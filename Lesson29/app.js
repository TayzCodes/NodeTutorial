var express = require('express');
var app = express();
var mysql = require('mysql');
//process.env provided by node
// can set on the command line
var port = process.env.PORT || 3000;
var apiController = require('./controller/apiController');
var htmlController = require('./controller/htmlController');


app.use('/assets', express.static(__dirname+'/public'));
app.set('view engine','ejs');

app.use('/', function(req, res, next){

    console.log('Request URL : '+req.url);
    var con =  mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: 'root@1234',
        database: 'EMS'
    });
    con.query('SELECT DEPARTMENT.ID, DEPARTMENT.deptname from DEPARTMENT',function(err,rows){
        if(err) throw err;
        console.log(rows);
    });
    next();
});

apiController(app);
htmlController(app);

app.listen(port);