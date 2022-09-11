/**
 * Call and apply : Can change the context, change the value of this 
 */

var object = {
    name :"John Doe",
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}
object.greet();

object.greet.call({name:"Jane Doe"});


object.greet.apply({name:"Jane Doe"});
