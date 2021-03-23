const express = require('express')
//const mongoose = require('mongoose')
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



app.get('/data', async (req, res) => {
    var dat=[];
    try {
        db.collection("personita2").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.json(result);
          });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ 'message': 'failed' });
    }
});




app.get('/mem', async (req, res) => {
    var dat="";
    try {
        var archivo="/proc/mem_grupo13";
        fs.readFile(archivo, 'utf8' , (err, data) => {
            if (err) {
              console.error(err);
              return
            }
            dat=JSON.parse(data);
            console.log("salida1"+dat);
            res.json(dat);
          });
          console.log("salida2"+dat);
          
    } catch (err) {
        console.log(err);
        res.status(500).json({ 'message': 'failed reading' });
    }
});

app.get('/proc', async (req, res) => {
    var dat="";
    try {
        var archivo="/proc/proc_grupo13";
        fs.readFile(archivo, 'utf8' , (err, data) => {
            if (err) {
              console.error(err);
              return
            }
            //dat=JSON.parse(data);
            console.log("salida1"+data);
            //res.json(dat);
            res.send(data)
          });
          console.log("salida2"+dat);
          
    } catch (err) {
        console.log(err);
        res.status(500).json({ 'message': 'failed reading' });
    }
});



app.get('/', (req, res) => {
    res.json({message: 'OK'})
});

app.listen(5000);
console.log("servidor corriendo en puerto",5000);