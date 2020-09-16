const express = require("express"); // importar módulo express
const server = express(); // instanciar o express
const dotenv = require("dotenv").config();

//Cofigurações
server.use(express.json()); // permirir resposta ao cliente em formato json;

//Rotas
server.use(require('./src/routes'));

//Inicializar o servidor

server.listen(process.env.PORT); // Criar servidor e faze-lo utilizar uma porta;
console.log(`Servidor foi iniciado na porta ${process.env.PORT}.`);
