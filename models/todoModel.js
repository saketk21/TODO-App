const mongoose = require('mongoose');

// Connecting to the DB
mongoose.connect("mongodb://saketk21:saket123@ds163781.mlab.com:63781/todo");

// Schema for the Documents in the Collection
let todoItemSchema = new mongoose.Schema({
  item: String
});

// Model for the Collection
module.exports = mongoose.model('Todo', todoItemSchema);
