var Todos = require('../models/todoModel');
module.exports = function(app){
    //jsongenerator
    app.get('/api/setupTodos', function(req, res){
        var starterTodos = [
            {
                username : 'test',
                todo: 'Buy Milk',
                isDone: false,
                hasAttachment :  false
            },
            {
                username : 'test',
                todo: 'Learn Node',
                isDone: false,
                hasAttachment :  false
            },
            {
                username : 'test',
                todo: 'cook breakfast',
                isDone: false,
                hasAttachment :  false
            }
        ];
        Todos.create(starterTodos, function(err, results){
            res.send(results);
        })
    });
}