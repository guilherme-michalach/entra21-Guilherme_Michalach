const express = require("express");
const app = express();

const PORT = 3000;

// Rotas da raiz/root
app.get("/", (request, response) => {
    // console.log(request);
    // console.log(response);
    response.send('Hello World!');
});

app.post('/', (request, response) => {
    response.send('Método Post')
});

app.put('/', (request, response) => {
    response.send("Método PUT")
});

app.delete('/', (request, response) => {
    response.send("Método DELETE")
});

// Banco de dados

const users = [
    {id: 1, name: "Pedro", email: "pedro@gmail.com"},
    {id: 2, name: "Jorge", email: "jorge@gmail.com"},
    {id: 3, name: "Lucas", email: "lucas@gmail.com"},
];

// Rotas de usuário "/users"

app.get("/users", (request, response) => {
    response.json(users);
});

app.get("/users/:id", (request, response) => {
    const user_id = request.params.id;
    
    const user = users.find(user => user.id === user_id);

    if (!user) {
        response.status(404).json({ message: "User not found!" });
    }

    response.json(user);
});

app.get("/users", (request, response) => {
    
});

app.get("/users", (request, response) => {
    
});

app.get("/users", (request, response) => {
    
});

app.listen(PORT, () => console.log("Server rodando..."));
