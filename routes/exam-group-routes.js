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

// Route to update an exam by ID
router.put('/exams/:id', (req, res) => {
    const id = parseInt(req.params.id); // Get the ID from the route parameter
    const exam = exams.find(ex => ex.id === id); // Find the exam with the matching ID

    if (!exam) {
        // If the exam is not found, return a 404 error
        return res.status(404).json({ message: "Exam not found" });
    }

    if (!req.body.name) {
        // If no name is provided in the request body, return a 400 error
        return res.status(400).json({ message: "Name is required" });
    }

    exam.name = req.body.name; // Update the exam's name
    res.json(exam); // Return the updated exam
});


module.exports = router;
