//Using group and or (||)

var movieRating = "r";
var age = 18;

if ("pg" == movieRating && age >= 13){
    console.log("You can watch the movie");
} else if ("r"== movieRating && age>= 18){
    console.log("You can watch the movie");
} else if ("g" == movieRating){
    console.log("You can watch the movie");
} else {
    console.log("You can't watch the movie");
} 

var movieRating = "r";
var age = 11;

if ( ("pg"== movieRating && age >= 13) || ("r"== movieRating && age>=18) || ("g"== movieRating)){
    console.log("You can watch the movie");
} else {
    console.log("You can't watch the movie");
}

// Age = stage 
var age = 29;
var result ;

if (age<0 || age>500){
    result="vampire";
} else if (age <= 2){
    result="baby";
} else if (age <= 12){
    result="kid";
} else if (age <= 19){
    result="teenager";
} else {
    result="adult";
}
console.log("You are"+" "+ result);