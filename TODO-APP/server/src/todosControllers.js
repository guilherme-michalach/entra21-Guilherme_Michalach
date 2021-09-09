const { Todo } = require('./db/models');
const createHttpError = require('http-errors');

async function getAllTodos (res) {
    try {
        const todos = await Todo.findAll();

        res.json(todos);
    } catch (err) {
        console.error(err);
        next(err);
    }
}

async function createTodo (req, res, next) {
    const { task } = req.body;
    try {
        const todo = await Todo.create({ task });

        res.status(201).json(todo);
    } catch (err) {
        console.error(err);
        next(err);
    }    
}

async function updateTodo (req, res, next) {
    const todoID = req.params.id;
    const { task, completed } = req.body;

    try {
        const todo = await Todo.findOne({ where: { id: todoID } })

        if (!todo) {
            throw new createHttpError(404, "Not Found");
        }

        todo.task = task;
        todo.completed = completed;
        await todo.save();

        res.status(204).end();
    } catch (err) {
        console.error(err);
        next(err);
    }    
}

async function deleteTodo (req, res, next) {
    const todoID = req.params.id;

    try {
        const todo = await Todo.findOne({ where: { id: todoID } })

        if (!todo) {
            throw new createHttpError(404, "Not Found");
        }

        await todo.destroy();

        res.status(204).end();
    } catch (err) {
        console.error(err);
        next(err);
    }    
}

module.exports = {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
}