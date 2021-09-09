const { User, Post } = require("../db/models");

async function getAllUsers(req, res, next) {
    try {
        const users = await User.findAll();

        res.json(users);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: "Server Error" });
    }
}

async function getUserById(req, res, next) {
    const userId = req.params.id;
    
    try {
        const user = await User.findOne({
            where: { id: userId }
        });
            
        if (!user) {
        res.status(404).json({ message: "User not found!" });
        }
   
        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error"})
    }
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

async function updateUser(req, res, next) {
    const { name } = req.body;
    const userId = req.params.id;

    try {
    const user = await User.findOne({
        where: { id: userId }
    });

    if(!user) {
        return res.status(404).json({ message: "User not found!" });
    }

    user.name = name;
    await user.save();

    res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

async function deleteUser(req, res, next) {
    const userId = req.params.id;

    try {
        const user = await User.findOne({
            where: { id: userId }
        });
    
        if(!user) {
            return res.status(404).json({ message: "User not found!" });
        }
    
        await user.destroy();

        res.status(204).end();
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

async function createPost(req, res, next) {
    const userId = req.params.id;
    const { title, content } = req.body;
    const file = req.file;
    
    let image;
    if(file) {
        image = `${process.env.APP_URL}/static/${file.filename}`;
    }
        // console.log(file);
        // res.end();

    try {
        const user = await User.findOne({ where: { id: userId }});

        if(!user) {
            return res.status(404).json({ message: "User not found!" });
        }

        const post = await Post.create({
        title,
        content,
        image,
        user_id: userId
        });
            
        res.status(201).json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

async function getPosts(req, res, next) {
    const userId = req.params.id;
    
    try {
        const user = await User.findOne({
            where: { id: userId }
        });
            
        if (!user) {
        res.status(404).json({ message: "User not found!" });
        }
   
        const posts = await Post.findAll({
            where: { user_id: userId }
        });

        res.json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error"})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createPost,
    getPosts
};