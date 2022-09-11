var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');
module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    // Have Node serve the files for our built React app
    /**
     * For deployment
     */
    //https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
   /* app.use(express.static(path.resolve(__dirname, '../client/build')));   
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
      }); 

      */
    app.get('/api/todos/:uname', function(req, res){
        Todos.find({username: req.params.uname}, function(err, todos){
            if(err) throw err;
            
            res.send(todos)
        })
    });

    app.get('/api/todos/:id', function(req,res){
        console.log(req.params);
        Todos.findById({id: req.params.id}, function(err, todo){
            if(err ) throw err;
            console.log(todo);
            res.send(todo);
        });
    });

    app.post('/api/todo', function(req, res){
        if(req.body.id){ // exists so update
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment:  req.body.hasAttachment
            }, function(err){
                if(err) throw err;
                res.send('success')
            });
        }else{
            var newTodo =  Todos({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment:  req.body.hasAttachment
            });
            newTodo.save(function(err){
                if(err) throw err;
                res.send('success');
            });
        }
    });
    
    app.delete('/api/todo', function(req,res){
        Todos.findOneAndDelete(req.body.id, function(err){
                if(err) throw err;
                res.send('success');
        })
    }

    );

}