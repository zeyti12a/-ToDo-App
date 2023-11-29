const express = require("express")
const exphbs = require ("express-handlebars")
// arrumando o commit


const app = express() 
const mysql = require("mysql2")

app.engine('handlebars',exphbs.engine() )
app.set('view engine' , 'handlebars')

app.use(express.static('public'))


app.get('/' , (requisicao, resposta)=> {
    resposta.render('home')
}) 

app.listen(3000, () =>{
    console.log ("Servidor ROdando na porta 3000")
}) 

const conexao = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"Bernardo10",
    database:"Todo-App",
    // Caso o banco de dados esteja rodando na porta 3307 é necessario mudar a port a baixo para port: 3307
    port: 3306
})  
conexao.connect((erro)=>{
    if (erro){
        console.log(erro)
    } 

    console.log("conectado ao mysql")

    app.listen(3000, ()=>{
        console.log("Servidor rodando na porta 3000")
    })
})