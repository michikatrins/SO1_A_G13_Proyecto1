FROM node:14


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install mongoose

COPY . .

EXPOSE 5000

CMD [ "node", "server.js" ]