const express = require("express"); // importar módulo express
const server = express(); // instanciar o express
const dotenv = require("dotenv").config();

//Rotas

server.get('/', (req,res)=>{
    res.send('Bem vindo ao meu servidor NodeJS!!');
});

server.get('/cursos', (req,res)=>{
    res.json({
        'React': 'React Native',
        'NodeJs': 'NodeJS',
        'ML': 'Data Science'
    });
});

//Inicializar o servidor

server.listen(process.env.PORT); // Criar servidor e faze-lo utilizar uma porta;
console.log(`Servidor foi iniciado na porta ${process.env.PORT}.`);
