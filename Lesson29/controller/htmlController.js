var bodyParser = require('body-parser');

// create application/json parser
 var jsonParser = bodyParser.json()
 var urlencodedParser = bodyParser.urlencoded({extended: false});
 //app.use(urlencodedParser);

 module.exports = function(app){
       

        app.get('/',function(req, res){
            res.render('index');
        });

        

        app.post('/person',urlencodedParser, function(req, res){
                res.send('Thank you');
                console.log(req.body.firstname);
                console.log(req.body.lastname);
        });
        app.post('/personjson',jsonParser, function(req, res){
            res.send('Thank you for the json data');
            console.log(req.body.firstname);
            console.log(req.body.lastname);
        });
        app.get('/',function(req, res){
            res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1> Hello World !</h1></body></html>');

        });
        app.get('/person/:id',function(req, res){
            res.render('person',{ID: req.params.id, Qstr: req.query.qstr});
        });
}