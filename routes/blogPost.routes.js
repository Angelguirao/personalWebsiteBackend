const router = require('express').Router()
const BlogPost = require('../models/BlogPost.model');

// POST request to create a BlogPost - "C"RUD
router.post('/posts', async (req, res) => {
    try {
        const newPost = await BlogPost.create(req.body);
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET request to get a list of BlogPosts - C"R"UD
router.get('/posts', async (req, res) => {
    try {
        const posts = await BlogPost.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET request to get a specific BlogPost - C"R"UD
router.get('/posts/:id', async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

// PUT request to update a BlogPost - CR"U"D
router.put('/posts/:id', async (req, res) => {
    try {
        const updatedPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(202).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE request to delete a BlogPost - CRU"D"
router.delete('/posts/:id', async (req, res) => {
    try {
        await BlogPost.findByIdAndRemove(req.params.id);
        res.status(202).json({message: "BlogPost deleted"});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
