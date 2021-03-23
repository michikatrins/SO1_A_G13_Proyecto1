package main

import (
	"context"
	"encoding/json"
	"fmt"

	"net/http"

	"cloud.google.com/go/pubsub"
)

type msg_COVID struct {
	Name         string
	Location     string
	Age          int
	Infectedtype string
	State        string
}

const (
	projectId  = "so1-1s2021-primerproyecto"
	topicId    = "SO1_Chat"
	portServer = 80
)

func Server(wr http.ResponseWriter, req *http.Request) {

	switch req.Method {
	case "POST":
		var json_covid msg_COVID

		//route := "Google pub/sub"
		decoder := json.NewDecoder(req.Body)
		_error := decoder.Decode(&json_covid)

		if _error != nil {
			fmt.Println("Error al recibir cadena: %v", _error)
		}

		message, _error := json.Marshal(msg_COVID{Name: json_covid.Name, Location: json_covid.Location, Age: json_covid.Age, Infectedtype: json_covid.Infectedtype, State: json_covid.State})

		if _error != nil {
			fmt.Fprintf(wr, "Error en parser: %v", _error)
			return
		}

		fmt.Println(string(message))
		publish(string(message))

	default:
		fmt.Println(wr, "Ruta %s no validada", req.Method)
		return
	}
}

func publish(msg string) error {

	ctx := context.Background()

	client, _error := pubsub.NewClient(ctx, projectId)

	if _error != nil {
		fmt.Println("Error conexión: %v", _error)
		return fmt.Errorf("Error en la conexión")
	}

	t := client.Topic(topicId)
	result := t.Publish(ctx, &pubsub.Message{Data: []byte(msg)})

	id, _error := result.Get(ctx)
	if _error != nil {
		fmt.Println("Error publicación: %v", _error)
		return fmt.Errorf("Error al publicar")
	}

	fmt.Println("Mensaje publicado: %v", id)
	return nil
}

func main() {
	fmt.Println("Iniciando ...")
	fmt.Println("..")
	fmt.Println(".")
	http.HandleFunc("/", Server)
	puerto := ":80"
	_error := http.ListenAndServe(puerto, nil)
	if _error != nil {
		fmt.Println("Error en el WebService: %v", _error)
	}
}

//windows
//$env:GOOGLE_APPLICATION_CREDENTIALS './key.json'
//go run .\publisherSO1.go

//linux
//export GOOGLE_APPLICATION_CREDENTIALS='./key.json'
//go run .\publisherSO1.go
