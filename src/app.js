//para que seja possível usar os recursos do express
import express from "express";

//criação de uma instancia do express
const app = express();

//será reponsável por interpretar o que está chegando via post ou via put e 
//transformar em um objeto para eu poder armazenar, visualizar e manipular. 
app.use(express.json());

//array simples apenas para primeiros testes
const tarefas = [
    {id: 1, "tarefa": "continuação curso de node"},
    {id: 2, "tarefa": "finalizar atividade p/ nota"}
]

function buscaTarefa(id){
    return tarefas.findIndex(tarefa => tarefa.id == id);    
}

//criação das rotas do CRUD, seus metodos, código de retorno de cada uma e a resposta
app.get('/', (req, res) => {
    res.status(200).send('Olá! o que vamos fazer hoje?');
});

app.get('/tarefas', (req, res) =>{
    res.status(200).json(tarefas);
});

app.get('/tarefas/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaTarefa(id);
    res.json(tarefas[index]);
});

app.post('/tarefas', (req, res) => {
    tarefas.push(req.body);
    res.status(201).send('Tarefa cadastrada com sucesso');
});

app.put('/tarefas/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaTarefa(id);
    tarefas[index].tarefa = req.body.tarefa;
    res.json(tarefas);
});

app.delete('/tarefas/:id', (req, res) => {
    let {id} = req.params;
    let index = buscaTarefa(id);
    tarefas.splice(index, 1);
    res.json(tarefas);
})

//importante para que outros arquivos sejam capazes de utilizar este arquivo
//Para que seja possível utilizar a importação e a exportação de módulos é necessário que haja 
//uma configurção no package.json o "type": "module"
export default app;