const express = require("express");
const router = express.Router();

// Importando o Controller

const usersControllers = require("../controllers/usersControllers");

// Rotas de usuário "/users"

router.get("/", usersControllers.getAllUsers);

// Obter um usuário em específico

router.get("/:id", usersControllers.getUserById);

// Criar um usuário

router.post("/", usersControllers.createUser);

// Atualizar as informções de um usuário

router.put("/:id", usersControllers.updateUser);
 
// Deletar um usuário

router.delete("/:id", usersControllers.deleteUser);

module.exports = router;