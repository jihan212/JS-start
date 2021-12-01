// Factorial by For loop
var n = 5;
var factorial = 1;
for (var i = n; i>1; i--){
    factorial= factorial*i;
} console.log("Factorial of 5 is ",factorial );

var i = 4;
var factorial = 1;
for ( var j=1; j<=10; j++){
    factorial=1;
    for(var i=j; i>1; i--){
        factorial= factorial*1;
    }
    console.log("Factorial of",j,"is",factorial);
}
factorial = 1;
for (var i=1; i<=10; i++){
    factorial *= i;
    console.log("Factorial of ",i ,"is ",factorial);
}