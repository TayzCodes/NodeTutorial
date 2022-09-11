var fs = require('fs');
// a synchronous way to read file
var greet = fs.readFileSync(__dirname+  '/greet.txt', 'utf-8');// __dirname path of directory i am currently in
console.log(greet);

var greet2 = fs.readFile(__dirname+'/greet.txt','utf-8',
function(err, data){// error first callbacks 
    console.log(data); // a buffer is returned

}
);
console.log('Done!');