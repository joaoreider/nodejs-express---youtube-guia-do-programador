

const express = require('express');
const app = express();

const handlebars = require('express-handlebars')
const Sequelize = require('sequelize');


// Config

    //template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')

    // conexão banco de dandos PostgreSQL
    const sequelize = new Sequelize('testesequelize', 'postgres', '123', {
        host: "localhost",
        dialect: "postgres"
    });


// Rotas
app.get("/cadastro", function(req, res){
    res.render('formulario')
});




app.listen(8081, function(){
    console.log("Servidor rodando! http://localhost:8081")
});