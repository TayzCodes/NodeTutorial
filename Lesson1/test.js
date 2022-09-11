const names = ['Jason', 'Jedi', 'Tommy', 'Ryan']
var count = 0;

for(var name of names){
    //console.log(name);
    if(name.charAt(0) === "J"){
        count++;

    }

}
console.log(count);
var newList = names.filter((e)=>{
        return e.charAt(0) === "J";

});
console.log(newList);