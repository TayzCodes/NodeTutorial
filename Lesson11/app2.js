/**
 * Inheritance
 */

var util = require('util');
function Person() {
    this.firstName = "John";
    this.lastName = "Doe";
}

Person.prototype.greet = function(){
    console.log('Hello '+this.firstName +' '+this.lastName );
}

function Policeman() {
     Person.call(this); // makes the policeman inherit the person properties, changed context to person's this
    this.badgeNumber = '1234';
}

util.inherits(Policeman,Person);// connected prototypes but not properties inherited
var officer = new Policeman();
officer.greet(); // Hello undefined undefined //object.__proto__.__proto

