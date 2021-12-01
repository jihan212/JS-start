// Unlimited Arguments
function addstudents (storage, ...people){
    for ( i=0; i<people.length; i++ ){
        storage.push( people[i]);
    }
}
var students =[];
addstudents(students, "Aisha", "Sahil", "Rishab", "Tara", "Luna", "Harry", "Ron","Sukriti", "Prakriti", "Shirley", "Yashwini", "Armaan" );
console.log(students.length);

addstudents(students, "Aisha", "Sahil", "Rishab", "Tara", "Luna", "Harry", "Ron", "Sukriti", "Prakriti");
console.log(students.length);

addstudents(students, "Aisha", "Sahil", "Rishab", "Tara", "Luna", "Harry", "Ron");
console.log(students.length);