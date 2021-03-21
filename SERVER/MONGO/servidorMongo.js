const express = require('express')
const mongoose = require('mongoose')
const app = express();
const MongoClient = require("mongodb").MongoClient;

//mongoose.connect('mongodb://mongodb/mimongo')
//    .then(db => console.log('la BD se conecto correctamente a', db.connection.host))
//    .catch(err => console.error(err));

var db;
MongoClient.connect('mongodb://mongodb/mimongo/labso1?retryWrites=true&w=majority', { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err;
    db = client.db("labso1");
});

app.use(express.json({ limit: '5mb', extended: true }));

app.post('/', async (req, res) => {
    const data = req.body;
    try {
        let collection = db.collection("personita2");
        let result = await collection.insertOne(data);
        console.log("ingreso algo",data);
        res.json(result.ops[0]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ 'message': 'failed' });
    }
});

app.get('/', (req, res) => {
    res.json({message: 'OK'})
});

app.listen(3000);
console.log("servidor corriendo en puerto",3000);