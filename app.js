const express = require('express');
const todoController = require('./controllers/todoController');
let app = express();

// Set up Template Engine
app.set('view engine', 'ejs');

// Serve Static Files
app.use(express.static('./public'));

// Port 3000
app.listen(3000);
console.log('Listening on Port 3000.... ');

// Fire up the Todo-Controller
todoController(app);
