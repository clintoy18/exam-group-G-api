const express = require('express');
const app = express();
const examGroupRoute = require('./routes/exam-group-g');

<<<<<<< HEAD
// Use routes for '/exam-group-g '
=======
// Middleware to parse JSON
app.use(express.json());
//try merge with main 

// Use the routes
>>>>>>> eaf8a56b0df41cecd015e1c617ed48df078a1cbe
app.use('/', examGroupRoute);
//try a conflict


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//conflict files
