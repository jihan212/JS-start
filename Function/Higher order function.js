function caller (){
    return function (name){
        return 'Jihan calling you '+ name;
    }
}

var a = caller();
var b = a('Aisha');
var c = a('Ayush')

console.log(b);
console.log(c);