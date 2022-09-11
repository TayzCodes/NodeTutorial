var express =  require('express');
var app = express();

var config = require('./config');
var mongoose = require('mongoose');
var setupcontroller = require('./controllers/setupcontroller');
var apiController = require('./controllers/apiController');
var port = process.env.PORT || 3001;
app.use('/assets', express.static(__dirname+'/public'));
app.set('view engine', 'ejs');
app.listen(port);
//app.use(express.static(path.resolve(__dirname, '../client/build')));
mongoose.connect(config.getDbConnectionString());
setupcontroller(app);
apiController(app);
