function one (name){
    console.log('My name is '+ name);
    function two (age){
        console.log('My age is '+ age);
    }
    return two;
}
var a = one("Aisha");
console.log(a);