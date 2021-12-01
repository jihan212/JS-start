//Array
var weekDays = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursdays","Friday"]
console.log(weekDays);

console.log(weekDays[2]); // 1st Element print

weekDays[6]="Friday" //Element add

console.log(weekDays);

console.log(weekDays.length); //Number of elements

var lastElement = weekDays.length - 1

console.log(weekDays);

console.log(weekDays[lastElement]);

weekDays.push("Friday") //Add last element

weekDays.pop(); // Remove last element

weekDays.shift(); //Remove first element

weekDays.unshift("Saturday"); //Add first element

var weekDays = ["Saturday","Sunday","Monday","Tuesday","Wednesday",
"Thursdays","Friday"]

var removed = weekDays.splice(0,2);
//var removed = weekDays.slice(0,2);
console.log(removed);
console.log(weekDays); 

var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
console.log(month.length);
var lastIndex = month.length - 1;
console.log(lastIndex);