package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/streadway/amqp"
)

func failOnError(err error, msg string) {
	if err != nil {
		log.Fatalf("%s: %s", msg, err)
	}
}

func newElement(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	if r.Method == "GET" {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("{\"message\": \"ok\"}"))
		return
	}

	var body map[string]interface{}
	err := json.NewDecoder(r.Body).Decode(&body)
	failOnError(err, "Parsing JSON")
	//adding key CAMINO to the JSON
	body["CAMINO"] = "RabbitMQ"
	data, err := json.Marshal(body)

	conn, err := amqp.Dial("amqp://guest:guest@35.231.246.240:80/")
	failOnError(err, "RabbitMQ connection")
	defer conn.Close()

	amqpchannel, err := conn.Channel()
	failOnError(err, "New channel connection")
	defer amqpchannel.Close()

	// Declaring a new Queue
	queue, err := amqpchannel.QueueDeclare(
		"rabbitqueue",
		false,
		false,
		false,
		false,
		nil,
	)
	failOnError(err, "Failed to declare a queue")

	// Publishing a new message
	newData := string(data)
	err = amqpchannel.Publish(
		"",
		queue.Name,
		false,
		false,
		amqp.Publishing{
			ContentType: "text/plain",
			Body:        []byte(newData),
		})
	failOnError(err, "Failed to publish a message")
	log.Printf(" [x] Sent %s", newData)

	w.WriteHeader(http.StatusCreated)
	w.Write([]byte(newData))
}

func handleRequests() {
	http.HandleFunc("/", newElement)
	log.Fatal(http.ListenAndServe(":5000", nil))
}

func main() {
	handleRequests()
}
