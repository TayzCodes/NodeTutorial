function person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
var john = new person('John', 'Doe');
person.prototype.greet = function(){

    console.log("Hello "+this.firstname + " "+ this.lastname);
}

john.greet();

var jane = new person('Jane', 'Doe');
jane.greetme = function(){
    console.log("Hey Greet me");
}
jane.greetme();
console.log(john.__proto__);
