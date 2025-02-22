const express = require('express');
//importing the middleware from another file - 
const myMiddleware1 = require('./middleware/middleware1');
const morgan = require('morgan');

const app = express();

// custom middleware 1
app.use(myMiddleware1);

// custom middleware 2
app.use(function(req, res, next) {
    console.log("This is a custom middleware 2");
    next();
});

// morgan middleware (pass the format as a string, e.g., 'combined', 'dev', etc.)
app.use(morgan('dev'));

let courses = [
    {id: 1, name: 'javascript'},
    {id: 2, name: 'python'},
    {id: 3, name: 'java'}
];

// Middleware to parse JSON bodies - built-in middleware
app.use(express.json());

// GET, PUT, POST, DELETE
app.get('/', (req, res) => {
    res.send('Hello From Home Page');
});

app.get('/about', (req, res) => {
    res.send('We have created impact');
});

app.get('/course', (req, res) => {
    res.send(courses);
});

// Route Parameter
app.get('/course/:id', (req, res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id));

    if (!course) {
        return res.status(404).send('Course not found');
    }
    res.send(course);
});

// POST Method - creating an object
app.post('/course', (req, res) => {
    const new_course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(new_course);
    res.send(courses);
});

// PUT Method - updating course
app.put('/course/:id', (req, res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id));

    if (!course) {
        return res.status(404).send('Course not found');
    }

    course.name = req.body.name;
    res.send(course);
});

// DELETE Method - deleting course by name
app.delete('/course/:coursename', (req, res) => {
    const courseIndex = courses.findIndex(course => course.name === req.params.coursename);

    if (courseIndex === -1) {
        return res.status(404).send('Course not found');
    }

    courses.splice(courseIndex, 1); // Remove the course from the array
    res.send(courses);
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port ' + (process.env.PORT || 3000));
});