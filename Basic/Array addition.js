// Array addition
var list1 = ["January","February","March"]
var list2 = ["April","May","June"]
var list3 = ["July","August","September"]
var list4 = ["October","November","December"]

//var list = list1.concat(list2).concat(list3).concat(list4)
var list = [].concat(list1, list2, list3, list4)
console.log(list);