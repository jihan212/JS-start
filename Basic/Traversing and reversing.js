var month = ["January","February","March","April","May","June","July",
"August","September","October","November","December"]
//Traversing method 1
for ( i in month){
    console.log("Element of ", i ,"offset is ",month[i]); }

//Traversing method 2
//for ( var i=0; i<month.length; i++){
//   console.log("Element of ", i ,"offset is ",month[i]); }

//Reversing
for ( var i=(month.length - 1); i>=0; i--){
    console.log("Element of ", i ,"offset is ",month[i]); }