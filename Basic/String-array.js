// String to Array
var series = "0,";
for ( var i=1; i<=20; i++){
    series += i + "," ;
    if (i >20){
        break
    }
}
var list = series.split(",");
console.log(list)