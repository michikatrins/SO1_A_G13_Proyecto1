const express = require('express')
const app = express();
const fs = require('fs')



app.use(express.json({ limit: '5mb', extended: true }));

app.get('/proc', async (req, res) => {
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

app.get('/mem', async (req, res) => {
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

app.listen(3000);
console.log("servidor corriendo en puerto",8000);