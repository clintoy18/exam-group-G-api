const express = require('express');
const router = express.Router();

// General route for '/'
router.get('/', (req, res) => {
    res.json({ message: "Group-G API" });
});

// Route for '/exams'
router.get('/exams', (req, res) => {
    res.json({ exams: ["Exam 1", "Exam 2", "Exam 3"] });
});

module.exports = router;
