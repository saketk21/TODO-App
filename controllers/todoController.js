const bodyParser = require('body-parser');
let Todo = require('../models/todoModel');

// let data = [{item: "Get Milk"}, {item: "Walk Dog"}, {item: "Kick some coding ass!"}];
let urlencodedParser = bodyParser.urlencoded({extended: false});

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
