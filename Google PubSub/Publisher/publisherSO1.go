package main

import (
	"context"

	"fmt"

	"cloud.google.com/go/pubsub"
)

func publish(msg string) error {

	projectId := "so1-1s2021-primerproyecto"
	topicId := "SO1_Chat"

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
	publish("Hola a todos")
}

//windows
//$env:GOOGLE_APPLICATION_CREDENTIALS './key.json'
//go run .\publisherSO1.go

//linux
//export GOOGLE_APPLICATION_CREDENTIALS='./key.json'
//go run .\publisherSO1.go
