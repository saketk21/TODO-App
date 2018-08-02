const express = require('express');

let app = express();

// Set up Template Engine
app.set('view engine', 'mustache');

// Serve Static Files
app.use(express.static('./public'));

// Port 3000
app.listen(3000);
console.log('Listening on Port 3000.... ');
