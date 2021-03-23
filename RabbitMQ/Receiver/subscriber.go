package main

import (
	"bytes"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/streadway/amqp"
)

func failOnError(err error, msg string) {
	if err != nil {
		log.Fatalf("%s: %s", msg, err)
	}
}

func main() {
	conn, err := amqp.Dial("amqp://guest:guest@35.231.246.240:80/")
	failOnError(err, "Failed to connect to RabbitMQ")
	defer conn.Close()

	ampqchannel, err := conn.Channel()
	failOnError(err, "Failed to open a channel")
	defer ampqchannel.Close()

	queue, err := ampqchannel.QueueDeclare(
		"rabbitqueue",
		false,
		false,
		false,
		false,
		nil,
	)
	failOnError(err, "Failed to declare a queue")

	messagechannel, err := ampqchannel.Consume(
		queue.Name,
		"",
		true,
		false,
		false,
		false,
		nil,
	)
	failOnError(err, "Failed to register a consumer")

	forever := make(chan bool)

	go func() {
		for d := range messagechannel {
			log.Printf("Received a message: %s", d.Body)

			postBody := []byte(string(d.Body))
			req, err := http.Post("http://104.196.23.85:80/", "application/json", bytes.NewBuffer(postBody))
			req.Header.Set("Content-Type", "application/json")
			failOnError(err, "POST new document")
			defer req.Body.Close()

			newBody, err := ioutil.ReadAll(req.Body)
			failOnError(err, "Reading response from HTTP POST")
			sb := string(newBody)
			log.Printf(sb)
		}
	}()

	log.Printf(" [*] Waiting for messages. To exit press CTRL+C")
	<-forever
}
