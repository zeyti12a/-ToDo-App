const express = require("express")

const app = express() 

app.get('/' , (requisicao, resposta)=> {
    resposta.send("ola mundo")
}) 

app.listen(3000, () =>{
    console.log ("Servidor ROdando na porta 3000")
})