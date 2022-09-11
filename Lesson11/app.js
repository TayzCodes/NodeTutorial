var Emitter = require("events");
var utils = require("util");


var Greetr = function(){
    Emitter.call(this);
    this.greeting = "Hello ";
}

utils.inherits(Greetr, Emitter);

Greetr.prototype.greet = function(data){
    console.log(this.greeting + data);
    this.emit('greet', data);

}

var greeter = new Greetr();
greeter.on('greet', function(data){
    console.log(" Have a nice day "+data);
});

greeter.greet("TOny");