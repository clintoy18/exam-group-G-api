const express = require('express');
const app = express();
const examGroupRoute = require('./routes/exam-group-routes');

// Middleware to parse JSON
app.use(express.json());
//try merge with main 

// Use the routes
app.use('/', examGroupRoute);
//try a conflict

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//conflict files
