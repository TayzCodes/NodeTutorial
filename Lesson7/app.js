var  person = {
    firstname:"",
    lastname:"",
    greet: function(){
        console.log("Hello "+ this.firstname+" "+this.lastname);
    }
}

var john = Object.create(person);
john.firstname = "John";
john.lastname = "Doe";

var jane = Object.create(person);
jane.firstname = "Jane";
jane.lastname = "Doe";

john.greet();
jane.greet();


