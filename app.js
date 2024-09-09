const express = require ('express');
const path = require ('path');

const app = express()
const port = 3000;

app.use (express.static(path.join(__dirname,'Public')));

app.get ('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'Public','meu.html'));
});
app.get('/sobre',(req,res)=>{
    res.sendFile(path.join(__dirname,'Public','novo.html'));
});
app.listen (port, ()=>{
    console.log (`Servidor Rodando na em http://127.0.0.1:${port}`)
})