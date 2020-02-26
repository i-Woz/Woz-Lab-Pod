"use strict"

// Given a number, return a string of the word "Boom", which varies in the following ways:
//
//     The string should include n number of "o"s, unless n is below 2 (in that case, return "boom").
//     If n is evenly divisible by 2, add an exclamation mark to the end.
//     If n is evenly divisible by 5, return the string in ALL CAPS.
//     If n is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.




function boomIntensity(n) {
    var intensity = "o".repeat(n);
    var fuse;
    if (n < 2){
        fuse = "boom";
    } else if (n % 10 === 0){
        fuse = "B" + intensity.toUpperCase() + "M!";
    } else if (n % 2 === 0){
        fuse = "B" + intensity + "m!";
    } else if (n % 5 === 0){
        fuse = "B" + intensity.toUpperCase() + "M";
    } else {
        fuse = "B" + intensity + "m"
    }
    return fuse;
}

console.log(boomIntensity(15));

// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function numberString(str){
    var alphabetArray = ["filler", "a", "b", "c", "d","e","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
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


// Create a Phone Number
// Write a function that takes an array of 10 integers (between 0 and 9) and returns a string in form of a phone number.
//
//     Examples
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
//
// createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) ➞ "(111) 111-1111"
//
// createPhoneNumber([8, 7, 4, 1, 2, 5, 6, 5, 8, 2]) ➞ "(874) 125-6582"
// Notes
// N/A



function phoneNumber(arrayInput) {
    var phoneNumber;
    if (arrayInput.length !== 10){
        phoneNumber = "That is not a proper phone number"
    } else {
        var number = arrayInput.join(',');
        var num = number.split(',').join('');
        phoneNumber = '(' + num.charAt(0) + num.charAt(1) + num.charAt(2) + ') ' + num.charAt(3) + num.charAt(4) + num.charAt(5) + "-" + num.charAt(6) + num.charAt(7) + num.charAt(8) + num.charAt(9)
    }
    return phoneNumber
}

console.log(phoneNumber([1,2,3,4,5,6,7,8,9,0]));





