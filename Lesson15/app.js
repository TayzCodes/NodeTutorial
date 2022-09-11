//callbacks
var greet = function(callback){
    console.log('Hello');
    var data = {
        name:'John Doe'
    }
    callback(data);
}

greet(function(data){
    console.log('Callback was invoked');
    console.log(data);
});
greet(function(data){
    console.log('A different callback was invoked');
    console.log(data.name);

});