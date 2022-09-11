// var a = 1;
// var b = 2;
// var c = a + b;
// console.log(c);

function greet(){

    console.log("Hi");
}
greet();
//functions are first class
// functions in js are objects thus making it possible
function logGreeting(fn){
fn();
}
logGreeting(greet);


// function expression
var greetMe = function(){
    console.log("Hello");
}
greetMe();

