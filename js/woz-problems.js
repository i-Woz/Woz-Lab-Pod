"use strict"

// Given a number, return a string of the word "Boom", which varies in the following ways:
//
//     The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
//     If n is evenly divisible by 2, add an exclamation mark to the end.
//     If n is evenly divisible by 5, return the string in ALL CAPS.
//     If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.




// function boomIntensity(n) {
//     var intensity = "o".repeat(n);
//     var fuse;
//     if (n < 2){
//         fuse = "boom";
//     } else if (n % 10 === 0){
//         fuse = "B" + intensity.toUpperCase() + "M!";
//     } else if (n % 2 === 0){
//         fuse = "B" + intensity + "m!";
//     } else if (n % 5 === 0){
//         fuse = "B" + intensity.toUpperCase() + "M";
//     } else {
//         fuse = "B" + intensity + "m"
//     }
//     return fuse;
// }
//
// console.log(boomIntensity(15));

// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function numberString(str){
    var alphabetArray = ["filler", "a", "b", "c", "d","e","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var returnMessage = "";
    for(var i = 0; i < str.length; i++){
        var thisLetter = str[i];
        var letterIndex = alphabetArray.indexOf(thisLetter);
        if (letterIndex !== -1){
            returnMessage = returnMessage + letterIndex.toString() + " ";
        }
    }
    return returnMessage;
};

console.log(numberString("hello world"));


















