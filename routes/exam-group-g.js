const express = require('express');
const router = express.Router();
let exams = [];

// Default route
router.get('/', (req, res) => {
    res.json({ message: "Group-G API" });
});

// GET /exams: Return the list of exams
router.get('/exams', (req, res) => {
    res.json({ exams });
});

// POST /exams: Add a new exam
router.post('/exams', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ message: "Name is required" });
    }
    const newExam = { id: exams.length + 1, name: req.body.name };
    exams.push(newExam);
    res.status(201).json(newExam);
});

module.exports = router;
