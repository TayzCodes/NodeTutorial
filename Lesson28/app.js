var express = require('express');
var app = express();

//process.env provided by node
// can set on the command line
var port = process.env.PORT || 3000;
var apiController = require('./controller/apiController');
var htmlController = require('./controller/htmlController');


app.use('/assets', express.static(__dirname+'/public'));
app.set('view engine','ejs');

apiController(app);
htmlController(app);

app.listen(port);