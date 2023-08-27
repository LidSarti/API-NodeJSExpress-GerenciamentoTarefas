//inicio curso de node
//Nesse arquivo é feito a crição do servidor local 

//maneira antiga de importar os recursos necessários, no futuro será migrado para o import
const http = require("http");
const port = 3000;

// Definição das rotas e seus respectivos conteúdos
const rotas = {
    '/': 'Curso de Node',
    '/tarefas': 'Tarefas',
    '/categorias': 'Categorias',
  }

//responsavel por instanciar o modulo http do node
//nele foi definido a resposta que o usuario terá
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end("Ola, mundo!")
})

//Definição da porta
server.listen(port, () =>{
    console.log(`Escutando em http://localhost:${port}`);
});

//para executar utilizar o comando node server.js
//possivel criar um script novo no package.json, no caso foi criado um chamado dev,
//que facilita porque resume um comando grande 