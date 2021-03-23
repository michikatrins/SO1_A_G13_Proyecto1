package main

import (
	"io/ioutil"
	"log"
	"sync"

	"bytes"
	"net/http"

	"fmt"

	"context"

	"cloud.google.com/go/pubsub"
	"golang.org/x/oauth2/google"
	"google.golang.org/api/option"
)

func failOnError(err error, msg string) {
	if err != nil {
		log.Fatalf("%s: %s", msg, err)
	}
}

func listen() error {
	//hola a todos
	projectId := "so1-1s2021-primerproyecto"
	suscribeId := "SO1_Suscribe"

	//lectura de credenciales
	jsonKey, err := ioutil.ReadFile("key.json")
	conf, err := google.JWTConfigFromJSON(jsonKey, pubsub.ScopePubSub, pubsub.ScopeCloudPlatform)
	if err != nil {
		log.Fatal(err)
	}

	ctx := context.Background()
	ts := conf.TokenSource(ctx)
	client, _error := pubsub.NewClient(ctx, projectId, option.WithTokenSource(ts))

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

		//bytes.NewBuffer
		postBody := []byte(string(msg.Data))
		log.Printf("Response : llego al server")
		http.Post("http://104.196.23.85:80", "application/json", bytes.NewBuffer(postBody))
		log.Printf("Response : envio datos")

		//ENVIAR A IP
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
