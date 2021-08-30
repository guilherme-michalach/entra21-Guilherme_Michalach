const { User } = require("../db/models");

async function getAllUsers(req, res, next) {
    try {
        const users = await User.findAll();

        res.json(users);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server Error" });
    }
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

async function createUser(req, res, next) {
    const { name, email, password } = req.body;
    
    // Verificando se o e-mail já está cadastrado no BD
    try {
    const [ user, created ] = await User.findOrCreate({
    where: { email },
    defaults: {
    name,
    password
    }
    });
    
    if (!created) {
    return res.status(409).json({ message: "User already exists" });
    }
    
    res.status(201).json(user);
    } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
    }
    
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