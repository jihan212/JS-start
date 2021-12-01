// Multiplication table by for loop
var series ;
for ( var i = 1; i <=10; i++){
    series= "   ";
    for ( var j = 1; j<10; j++){
        series += i*j +"   ";
    }
    console.log("Table of",i,"is", series);
}