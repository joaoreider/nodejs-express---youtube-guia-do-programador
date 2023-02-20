

const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')



// Config

    //template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    
    // Body Parser
    app.use(express.json());
    app.use(express.urlencoded({
    extended: true
    }));



// Rotas

app.get("/", function(req, res){
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
        res.render('home', {posts: posts})
    })   
});

app.get("/cadastro", function(req, res){
    res.render('formulario')
});

app.post("/cadastro_enviado", function(req, res){

    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(erro => {res.send('erro na criação do post: ' + erro)})

   
});




app.listen(8081, function(){
    console.log("Servidor rodando! http://localhost:8081")
});