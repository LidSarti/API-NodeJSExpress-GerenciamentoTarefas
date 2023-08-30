import app from "./src/app.js";

//quando subimos para um servidor diferente do local ele pode ficar escutando em outra porta
//para que isso seja ajustado necessário utilizar a constante que vai identificar a porta que está 
//sendo escutada a requisição que o servidor subiu (uma boa prática)
const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Escutando em http://localhost:${port}`);
});

//da maneira que foi feita agora o server tem uma função mais definida, a de iniciar o servidor e ficar
//escutando as requisições 