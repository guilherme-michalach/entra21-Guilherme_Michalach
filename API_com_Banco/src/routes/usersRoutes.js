const express = require("express");
const router = express.Router();
const multer = require("multer");
const multerConfig = require("../config/multer");

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

// Criar um post para um usuário

router.post("/:id/posts", multer(multerConfig).single("image"), usersControllers.createPost);

module.exports = router;