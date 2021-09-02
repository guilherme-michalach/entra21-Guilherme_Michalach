const { Post } = require("../db/models");

async function updatePost(req, res, next) {
    const { title, content } = req.body;
    const postId = req.params.id;

    try {
    const post = await Post.findOne({
        where: { id: postId }
    });

    if(!post) {
        return res.status(404).json({ message: "Post not found!" });
    }

    post.title = title;
    post.content = content;
    await post.save();

    res.json(post);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

async function removePost(req, res, next) {
    const postId = req.params.id;

    try {
        const post = await Post.findOne({
            where: { id: postId }
        });
    
        if(!post) {
            return res.status(404).json({ message: "Post not found!" });
        }
    
        await post.destroy();

        res.status(204).end();
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

// async function getPosts(req, res, next) {

//     try {
//         const posts = await Post.findAll();

//         res.json(posts);
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).json({ message: "Server Error" });
//     }
// }

async function getPosts(req, res, next) {
    const userId = req.params.id;
    
    try {
        const user = await User.findOne({
            where: { id: userId }
        });
            
        if (!user) {
        res.status(404).json({ message: "User not found!" });
        }
   
        const posts = await Post.findByPk(userId);



        res.json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error"})
    }
}

module.exports = {
    updatePost,
    removePost,
    getPosts
};