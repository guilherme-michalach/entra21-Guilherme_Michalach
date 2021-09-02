const { request, response, json } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;

// Importando as rotas

const usersRoutes = require("./routes/usersRoutes");

const postsRoutes = require("./routes/postsRoutes");

// Definindo local dos arquivos estáticos

app.use("/static", express.static('uploads'));

// Definindo os middlewares
 
app.use(express.json());

// Definindo as rotas

app.use("/users", usersRoutes);

app.use("/posts", postsRoutes);
 
// Rotas da raíz
app.get("/", (request, response) => {
    response.send("Olá, Mundo!");
});
 
app.post("/", (request, response) => {
    response.send("Método POST");
});
 
app.put("/", (request, response) => {
    response.send("Método PUT");
});
 
app.delete("/", (request, response) => {
    response.send("Método DELETE");
});
 
// Banco de dados
 
// Rotas de usuário "/users"
 
// Obter um usuário em específico
 
// Criar um usuário

// Atualizar as informções de um usuário

// Deletar um usuário

app.listen(PORT, () => console.log("O servidor está rodando..."));