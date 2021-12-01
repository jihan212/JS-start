// Series by for loop

// Series: 2 4 6 8 10.....
var series = "";
var n;
for ( var i= 1; i<10; i++){
    n = i*2;
    series = series + n + "  ";
} console.log("Series 1: ", series);

// Series: 1 4 7 10 13....
series ="";
n = 1;
for( var i=1; i<10; i++){
    n = n + 3;
    series = series + n + "  ";
} console.log("Series 2: ", series);

// // Series: 0 3 8 15 24....
// series ="";
// n = "1";
// for ( var i=1; i<=10; i++){
//     n = (i*i)-1;
//     series = series + n +"  ";
// } console.log("Series 3: ",series);

// //Series: 1 4 3 8 5 12....
// series ="";
// n = "1";
// for ( var i=1; i<=10; i++){
//     n = i;
//     if(i%2 == 0){
//         n = i*2;
//     }
//     series = series + n +"  ";
// } console.log("Series 4: ",series);
// // Series: 0 1 1 2 3 5 8 13 ....(Fibonacci)
// series = "0  1  ";
// var n = 0;
// var x = 0;
// var y = 1;

// for ( var i=0; i<10; i++){
//     n = x + y;
//     x = y;
//     y = n;
//     series = series + n +"  ";
// } console.log("Series 5: ",series);