const express = require('express');
const router = express.Router();

const todosControllers = require('./todosControllers');

router.get('/', todosControllers.getAllTodos);

router.post('/', todosControllers.createTodo);

router.put('/:id', todosControllers.updateTodo);

router.delete('/id', todosControllers.deleteTodo);

module.exports = router;