const users = require("../models/user")

function getAllUsers(req, res, next) {
    res.json(users);
}

function getUserById(req, res, next) {
    const userId = req.params.id;
    
    console.log(userId);
   
    const user = users.find(user => user.id == userId);
   
    if (!user) {
   res.status(404).json({ message: "User not found!" });
   }
   
    res.json(user);
}

function createUser(req, res, next) {
    const { id, name, email } = req.body;
    
    const userAlreadyExists = users.find(user => user.email === email);
    
    if (userAlreadyExists) {
        return res.status(409).json({ message: "User already exists" })
    }
    
    const user = { id, name, email };

    users.push(user);

    res.status(201).json(user);   
}

function updateUser(req, res, next) {
    const { name } = req.body;
    const userID = req.params.id;

    const user = users.find(user => user.id == userID);

    if(!user) {
        return res.status(404).json({ message: "User not found!" });
    }

    user.name = name;

    res.json(user);
}

function deleteUser(req, res, next) {
    const userID = req.params.id;

    const userIDinDB = users.findIndex(user => user.id = userID);

    if(userIDinDB < 0) {
        return res.status(404).json({ message: "User not found!" });
    }

    users.splice(userIDinDB, 1);

    res.status(204).end();
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};