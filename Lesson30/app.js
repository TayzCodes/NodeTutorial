var express = require('express');
var app = express();
var mongoose = require('mongoose');
//process.env provided by node
// can set on the command line
var port = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://test:test123@cluster0.28gy0rm.mongodb.net/addressbook");
var Schema = mongoose.Schema;
var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});
var Person = mongoose.model('Person', personSchema);// collection
var john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '555 main st'
});
john.save(function(err){
    if(err) throw err;
    console.log("person saved!");
});
var jane = Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: '555 main st'
});
jane.save(function(err){
    if(err) throw err;
    console.log("person saved!");
})

var apiController = require('./controller/apiController');
var htmlController = require('./controller/htmlController');


app.use('/assets', express.static(__dirname+'/public'));
app.set('view engine','ejs');

app.use('/', function(req, res, next){

    console.log('Request URL : '+req.url);
   // get all users
   Person.find({}// evreything
    ,function(err, users){
        if(err) throw err;
        console.log(users);
    });
    next();
});

apiController(app);
htmlController(app);

app.listen(port);