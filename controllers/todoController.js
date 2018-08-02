const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// let data = [{item: "Get Milk"}, {item: "Walk Dog"}, {item: "Kick some coding ass!"}];
let urlencodedParser = bodyParser.urlencoded({extended: false});

// Connecting to the DB
mongoose.connect("mongodb://saketk21:saket123@ds163781.mlab.com:63781/todo");

// Schema for the Documents in the Collection
let todoItemSchema = new mongoose.Schema({
  item: String
});

// Model for the Collection
let Todo = mongoose.model('Todo', todoItemSchema);

module.exports = function(app) {
  app.get('/todo', function(request, response) {
    Todo.find({}, function(error, data) {
      if(error) throw error;
      response.render('todo', {todos: data});
    });
  });

  app.post('/todo', urlencodedParser, function(request, response) {
    let newTodo = Todo(request.body).save(function(error, data) {
      if(error) throw error;
      response.json(data);
    });
  });

  app.delete('/todo/:item', function(request, response) {
    Todo.find({item: request.params.item.replace(/\-/g, " ")}).remove(function(error, data) {
      if(error) throw error;
      response.json(data);
    });
  });
};
