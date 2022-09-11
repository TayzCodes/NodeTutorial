var greet = require('./greet1');
greet();
var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();

greet3.greeting = "Changed greeting";

var greet3b = require('./greet3'); // uses the same cached object
greet3b.greet();

var greet4 = require('./greet4'); 

greet4 = new greet4();
greet4.greet();
