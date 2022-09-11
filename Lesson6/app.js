//var Emitter  =  require('./Emitter');
var Emitter = require('events');
var config = require('./config');
var emit = new Emitter();

emit.on('greet', function(){
    console.log("Hello World 1");
});
emit.on('greet', function(){
    console.log("Hello World 2");
});
emit.on('greet', function(){
    console.log("Hello World 3");
});

emit.emit('greet'); 

