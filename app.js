const express = require('express');
const app = express();
const examGroupRoute = require('./routes/exam-group-g');

// Middleware to parse JSON
app.use(express.json());

// Use the routes
app.use('/exam-group-g', examGroupRoute);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
