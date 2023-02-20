

const express = require('express');
const app = express();

const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize');


// Config

    //template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    
    // Body Parser
    app.use(express.json());
    app.use(express.urlencoded({
    extended: true
    }));

    // conexão banco de dandos PostgreSQL
    const sequelize = new Sequelize('testesequelize', 'postgres', '123', {
        host: "localhost",
        dialect: "postgres"
    });


// Rotas
app.get("/cadastro", function(req, res){
    res.render('formulario')
});

app.post("/cadastro_enviado", function(req, res){

    res.send(`Título: ${req.body.titulo}\nConteúdo: ${req.body.conteudo} `)
});




app.listen(8081, function(){
    console.log("Servidor rodando! http://localhost:8081")
});