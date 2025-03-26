const express = require('express');
const app = express();
const examGroupRoute = require('./routes/exam-group-g');

// Use routes for '/exam-group-g '
app.use('/', examGroupRoute);
//try a conflict


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//conflict files
