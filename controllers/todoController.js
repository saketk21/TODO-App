const bodyParser = require('body-parser');

let data = [{item: "Get Milk"}, {item: "Walk Dog"}, {item: "Kick some coding ass!"}];
let urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {
  app.get('/todo', function(request, response) {
    response.render('todo', {todos: data});
  });

  app.post('/todo', urlencodedParser, function(request, response) {
    data.push(request.body);
    response.json(data);
  });

  app.delete('/todo/:item', function(request, response) {
    data = data.filter(function(todo) {
      return todo.item.replace(/ /g, "-") !== request.params.item;
    });
    console.log(data);
    response.json(data);
  });

};
