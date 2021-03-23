FROM golang

RUN apt-get update

WORKDIR /app
COPY . .

EXPOSE 80

RUN export GOOGLE_APPLICATION_CREDENTIALS='key.json'

CMD ["go", "run", "./publisherSO1.go"]