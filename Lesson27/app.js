var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//process.env provided by node
// can set on the command line
var port = process.env.PORT || 3000;
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});
/**
 * POST
 * Host:
 * Content-type: application/x-www-form-urlencoded
 * Cookie: 
 * 
 */
//app.use(urlencodedParser);

app.use('/assets', express.static(__dirname+'/public'));

app.set('view engine','ejs');
app.use('/', function(req, res, next){
    console.log('Request URL : '+req.url);
    next();
});
app.get('/',function(req, res){
    res.render('index');
});

// create application/json parser
var jsonParser = bodyParser.json()

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

// path parameter
//query parameter
// url : https:www.soemthing.com/page1/123
// url : localhost:3000/person/1?qstr=value
app.get('/person/:id',function(req, res){
    res.render('person',{ID: req.params.id, Qstr: req.query.qstr});
});
app.get('/api', function(req, res){
    res.json({
        firstname: 'John',
        lastname:'Doe'
    });
});
app.listen(port);


/**
 *
 * s1 -> s2 -> s3
 * s1 -> s2 -- re render
 * 
 * REST - API 
 * 
 * /getallusers   GET
 * /createUser    POST
 * 
 * 
 * HTTP verbs
 * 
 * POST
 * /person
 * {
 * }
 * 
 * PUT
 * person/1
 * {
 * //
 * }
 * 
 * GET
 * /persons
 * 
 * //
 * GET
 * /person/1
 * 
 * DELETE
 * person/1
 * 
 * 
 */