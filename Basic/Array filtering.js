// Array Filtering
var month = ["January",null, "February",null,null,"March","April",NaN, "May","June","July",NaN,"August",null,NaN,"September","October",null,"November","December"]
var year;
for ( i in month){
    if(month[i]){
        year.push(month[i]);
    }
}
year = month.filter(Boolean);
console.log(year);