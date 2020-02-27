"use strict";
// Multiply values of an array by its length.
// Take in array --> determine # of values --> multiply each value by # of total values.
// Use bucket? Probably not but try at first.
function multiplyByLength(x) {
    var holder = []; // <--The bucket
    for (var i = 0; i < x.length; i++) { // <--Establish for-loop to cycle through each array value.
        holder.push(x[i] * x.length); // <--Multiplies each value by array length by using .length method.
    }
    return holder; // <--Returns the bucket
}

console.log(multiplyByLength([1, 2, 3]));


//Count the number of capital letters in a string
function capitalLetters(str) {
    // str.split(""); <--An abandoned approach to solving the problem that was very clumsy.
    // var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" <--See above comment.
    var theCount = 0; // <--The all-powerful bucket returns!
    for (var i = 0; i < str.length; i++) { //<--Establish for-loop to cycle through every letter of the string.
        if (str[i] === str[i].toUpperCase())   { //<--The much-cleaner solution to determining if every cycled value contains a capital letter.
        theCount++ //<--Incrementer that adds each boolean true result of the loop's logic to the bucket.
        }
    }
    return theCount; //<--Returns the bucket.
}

console.log(capitalLetters("aBcDeFg"));

//Convert a string into hacker speak by replacing the letter a,e,i,o,s with 4,3,1,0,5 respectively.
function hackerSpeak(str) {

    var splitArr = str.split(''); // <--Splits passed string into an array of separated letters.
    for( var i = 0; i < splitArr.length; i++){ // <-- established the for-loop that cycles through every array value after the string was split.
        if (splitArr[i] == 'a') { // <--conditional logic determines if each value returns boolean true.
            splitArr[i] = 4 // <--Replaces letter with corresponding number.
        } else if (splitArr[i]=='e') { // <--conditional logic determines if each value returns boolean true.
            splitArr[i] = 3 // <--Replaces letter with corresponding number.
        } else if (splitArr[i]=='i') { // <--conditional logic determines if each value returns boolean true.
            splitArr[i] = 1 // <--Replaces letter with corresponding number.
        } else if(splitArr[i]=='o') { // <--conditional logic determines if each value returns boolean true.
            splitArr[i] = 0 // <--Replaces letter with corresponding number.
        } else if(splitArr[i]=='s') { // <--conditional logic determines if each value returns boolean true.
            splitArr[i] = 5 // <--Replaces letter with corresponding number.
        }
    }

    return splitArr.join('') // <--Rejoins the previously-split array back into a string, returning the hacker-speak translation.

}



console.log(hackerSpeak("David rooles!"));