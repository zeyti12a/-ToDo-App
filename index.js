const express = require("express")
const exphbs = require ("express-handlebars")
// arrumando o commit


const app = express() 
const mysql = require("mysql2")

app.engine('handlebars',exphbs.engine() )
app.set('view engine' , 'handlebars')

app.use(express.static('public'))


app.get('/' , (requisicao, resposta)=> {
    const sql = 'SELECT * FROM tarefas'

    conexao.query(sql,(erro,dados)=>{
        if (erro) {
            return console.log(erro)
        }

        const tarefas = dados.map((dado)=>{
            // Convertendo cada um dos itens da lista em um objeto que tem true ou false
            return{
                id: dado.id,
                descricao: dado.descricao,
                completa: dado.completa === 0 ? false : true
            }
        })

        res.render('home',{ tarefas })


    })
}) 

app.listen(3000, () =>{
    console.log ("Servidor ROdando na porta 3000")
}) 

const conexao = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"Bernardo10",
    database:"todo_app",
    // Caso o banco de dados esteja rodando na porta 3307 é necessario mudar a port a baixo para port: 3307
    port: 3306
})  
conexao.connect((erro)=>{
    if (erro){
        return console.log(erro)
    } 

    console.log("conectado ao mysql")

    app.listen(3000, ()=>{
        console.log("Servidor rodando na porta 3000")
    })
}) 

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())


app.post("/criar", (req,res)=>{
    const descricao= req.body.descricao 
    const completa = 0

    const sql = `
        INSERT INTO tarefas(descricao, completa)
        VALUES ('${descricao}', '${completa}')
    `

    conexao.query(sql, (erro)=>{
        if (erro){
            return console.log(erro)
        }

        res.redirect('/')
    })
})