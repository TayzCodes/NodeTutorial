var greeting = "Hello world"; //Revealing module pattern

var greet = function(){
    console.log("Hello world !!!!");
}

module.exports = {

    greet: greet
}