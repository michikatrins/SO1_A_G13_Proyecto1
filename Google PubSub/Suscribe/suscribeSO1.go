package main

import (
	"sync"

	"fmt"

	"context"

	"cloud.google.com/go/pubsub"
)

func listen() error {
	//hola a todos
	projectId := "so1-1s2021-primerproyecto"
	suscribeId := "SO1_Suscribe"

	ctx := context.Background()

	client, _error := pubsub.NewClient(ctx, projectId)

	if _error != nil {
		fmt.Println("Error conexión: %v", _error)
		return fmt.Errorf("Error en la conexión")
	}

	var mute sync.Mutex
	//received := 0
	sub := client.Subscription(suscribeId)
	cctx, _ := context.WithCancel(ctx)

	_error = sub.Receive(cctx, func(ctx context.Context, msg *pubsub.Message) {
		mute.Lock()
		defer mute.Unlock()
		//fmt.Println(msg.Data)
		fmt.Printf("Got message: %q\n", string(msg.Data))
		msg.Ack()
		//received++
		//if received == 1 {
		fmt.Println("En Espera...")
		//cancel()
		//}
	})

	if _error != nil {
		fmt.Println("Error al escuhar: %v", _error)
		return fmt.Errorf("Error Al escuchar")
	}
	return nil
}

func main() {
	fmt.Println("Iniciando ...")
	fmt.Println("..")
	fmt.Println(".")
	listen()
}

//windows
//$env:GOOGLE_APPLICATION_CREDENTIALS './key.json'
//go run .\suscribeSO1.go

//linux
//export GOOGLE_APPLICATION_CREDENTIALS='./key.json'
//go run .\suscribeSO1.go
