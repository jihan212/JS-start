var result = sum(20, 10);

function sum (a, b){

    function add() {
        return a+b;
    }

    function sub() {
        return a-b;
    }

    function multiple() {
        return a*b;
    }

    function divided() {
        return a/b;
    }

    return add() + sub() + multiple() + divided();
   
}

console.log(result);