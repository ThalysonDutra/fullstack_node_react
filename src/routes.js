const express = require('express');
const { planoExercicios } = require('./controllers/musculacao');
const routes = express.Router();
const musculacaoController =require('./controllers/musculacao')

routes.get('/', (req,res)=>{
    res.send('Bem vindo ao meu servidor NodeJS!!');
});

routes.get('/cursos', (req,res)=>{
    res.json({
        'React': 'React Native',
        'NodeJs': 'NodeJS',
        'ML': 'Data Science'
    });
});

    //body, header, params
routes.post('/cursos',(req,res)=>{
    const response = req.body;
    res.json(response);
});

routes.post('/alunos',(req,res)=>{
    const response = req.body;
    res.status(200).send();
    console.log(`Bem vindo ${response.nome} ${response.sobrenome} !!!`);
});

routes.post('/prog/:nome',(req,res)=>{
    var id = req.params.nome;
    res.send(id);
});

routes.post('/diretoria',(req,res)=>{
    var nome = req.query.nome;
    var sobrenome = req.query.sobrenome;
    var sexo = req.query.sexo;
    res.send(`Nome: ${nome} / Sobrenome: ${sobrenome} / Sexo: ${sexo}`);
});

routes.post('/matricula', musculacaoController.planoExercicios);

module.exports = routes;