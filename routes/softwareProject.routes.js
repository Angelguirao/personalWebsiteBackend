const router = require('express').Router()
const SoftwareProject = require('../models/SoftwareProject.model');

// POST request to create a SoftwareProject - "C"RUD
router.post('/projects', async (req, res) => {
    try {
        const newProject = await SoftwareProject.create(req.body);
        res.status(201).json(newProject);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET request to get a list of SoftwareProjects - C"R"UD
router.get('/projects', async (req, res) => {
    try {
        const projects = await SoftwareProject.find();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET request to get a specific SoftwareProject - C"R"UD
router.get('/projects/:id', async (req, res) => {
    try {
        const project = await SoftwareProject.findById(req.params.id);
        res.status(200).json(project);
    } catch (err) {
        res.status(500).json(err);
    }
});

// PUT request to update a SoftwareProject - CR"U"D
router.put('/projects/:id', async (req, res) => {
    try {
        const updatedProject = await SoftwareProject.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(202).json(updatedProject);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE request to delete a SoftwareProject - CRU"D"
router.delete('/projects/:id', async (req, res) => {
    try {
        await SoftwareProject.findByIdAndRemove(req.params.id);
        res.status(202).json({message: "SoftwareProject deleted"});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
