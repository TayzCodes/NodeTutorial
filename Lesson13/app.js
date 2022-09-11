var greeter = require('./greet');

var greeter = new greeter();
greeter.on('greet', function(data){
    console.log("Someone greeted "+data);
});

greeter.greet("Tony");