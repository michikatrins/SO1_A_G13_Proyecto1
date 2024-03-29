package main

import (
	"context"
	"log"
	"net"
	"bytes"
	"io/ioutil"
	"net/http"

	"google.golang.org/grpc"
	pb "google.golang.org/grpc/examples/helloworld/helloworld"
)

const (
	port = ":4000"
)

func failOnError(err error, msg string) {
	if err != nil {
		log.Fatalf("%s: %s", msg, err)
	}
}

// server is used to implement helloworld.GreeterServer.
type server struct {
	pb.UnimplementedGreeterServer
}

// SayHello implements helloworld.GreeterServer
func (s *server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	log.Printf("Received: %v", in.GetName())

	postBody := []byte(string(in.GetName()))
	log.Printf("Response : llego al server")
	req, err := http.Post("http:// 34.69.47.240:80", "application/json", bytes.NewBuffer(postBody))
	req.Header.Set("Content-Type", "application/json")
	failOnError(err, "POST new document")
	defer req.Body.Close()
	log.Printf("Response : envio datos")

	//Read the response body
	newBody, err := ioutil.ReadAll(req.Body)
	failOnError(err, "Reading response from HTTP POST")
	sb := string(newBody)
	log.Printf(sb)

	return &pb.HelloReply{Message: sb}, nil
}

func main() {
	log.Printf("SERVIDOR GRPC ACTIVO PUERTO 4000")
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterGreeterServer(s, &server{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
	
}