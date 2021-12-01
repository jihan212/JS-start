// Function starting
function sayHi(name="Sukriti", age="22") {
    console.log("Hey! whassup"+ " " +name + " your age is "+ age );
}
sayHi("Aisha","21");
sayHi("Luna","17");
sayHi("Draco","29");
sayHi();


//console.log(sayName("Aisha"));

// 1. Function can be stored in a variable
/*
function sayName (name){
   return 'Hello, ' + name;
}
var hello = sayName;
console.log(hello);
console.log(hello("Aisha"));

var hello2 = sayName;
console.log(hello2);
*/

// 2. A function can be stored in an array
/*
function sayName (name){
   return 'Hello, ' + name;
}
var array = [1,2,3];

array.push(sayName("Aisha"));

console.log(array);
*/
// 3. A function can be stored as an object field or property
/*
function sayName (name){
   return 'Hello, ' + name;
}
var person = {
    name: "Aisha",
    age : 20,
    sayName: sayName
}
console.log(person);
*/
// 4. Function can be create as needed
/*
var sum = 10 + (function (){return 90})();
console.log(sum);
*/
// 5. Function can be passed as an arguments
/*
function sayName (name){
    return 'Hello, ' + name;
 }
function wow (name, fun){
    return fun (name);
}
var result = wow ('Aisha',sayName);
console.log(result);
*/
// 6. We can return function from another function

function base(b){
    return function(p){
        var result = 1;
        for ( var i=0; i<b; i++){
            result *= p;
        }
        return result;
    }
}
var power = base(2);
var result = power(10);
console.log(result);