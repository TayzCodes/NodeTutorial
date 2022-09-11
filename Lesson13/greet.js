var Emitter = require("events");
//var utils = require("util");


// var Greetr = function(){
//     Emitter.call(this);
//     this.greeting = "Hello ";
// }

module.exports = class Greetr extends Emitter{
    constructor(){
        super();
        this.greeting = 'Hello ';
    }
    greet = function(data){
        console.log(this.greeting + data);
        this.emit('greet', data);
    
    }
}

//utils.inherits(Greetr, Emitter);

/*
Greetr.prototype.greet = function(data){
    console.log(this.greeting + data);
    this.emit('greet', data);

}
*/