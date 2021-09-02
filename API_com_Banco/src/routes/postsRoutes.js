const express = require("express");
const router = express.Router();

const postsControllers = require("../controllers/postsControllers");

router.put("/:id", postsControllers.updatePost);

router.delete("/:id", postsControllers.removePost);

router.get("/:id", postsControllers.getPosts);

module.exports = router;