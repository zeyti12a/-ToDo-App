const express = require("express")
const exphbs = require ("express-handlebars")


const app = express() 

app.engine('handlebars',exphbs.engine() )
app.set('view engine' , 'handlebars')


app.get('/' , (requisicao, resposta)=> {
    resposta.send("ola mundo")
}) 

app.listen(3000, () =>{
    console.log ("Servidor ROdando na porta 3000")
})