// Reuseable Function
function reverseString (data){
    var reversedString = data.split('').reverse().join('');
    return reversedString;
}
var sentence = "Hello World";
var sentence2 = "Hello Pluto";

var reversedSentence = reverseString(sentence);
var reversedSentence2 = reverseString(sentence2);

console.log(reversedSentence, reversedSentence2);