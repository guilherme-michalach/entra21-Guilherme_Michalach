const { request, response, json } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;
 
app.use(express.json());
 
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
const users = [
    { id: 1, name: "Pedro", email: "pedro@email.com" },
    { id: 2, name: "João", email: "joao@email.com" },
    { id: 3, name: "Marcos", email: "marcos@email.com" },
];
 
// Rotas de usuário "/users"
app.get("/users", (req, res) => {
    res.json(users);
});
 
// Obter um usuário em específico
app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    
     console.log(userId);
    
     const user = users.find(user => user.id == userId);
    
     if (!user) {
    res.status(404).json({ message: "User not found!" });
    }
    
     res.json(user);
    });
 
// Criar um usuário
app.post("/users", (req, res) => {
    const { id, name, email } = req.body;
 
    const userAlreadyExists = users.find(user => user.email === email);
    
    if (userAlreadyExists) {
        return res.status(409).json({ message: "User already exists" })
    }
    
    const user = { id, name, email };

    user.push(user);

    res.status(201).json(user);    
});
 
// Atualizar as informções de um usuário
app.put("/users/id", (req, res) => {
    const { name } = req.body;
    const userID = req.params.id;

    const user = user.find(user => user.id === userID);
});
 
// Deletar um usuário
app.delete("/users/:id", (req, res) => {
 
});
 
app.listen(PORT, () => console.log("O servidor está rodando..."));