"use strict";
//Multiply values of an array by its length.
function multiplyByLength(x) {
    var holder = [];
    for (var i = 0; i < x.length; i++) {
        holder.push(x[i] * x.length);
    }
    return holder;
}

console.log(multiplyByLength([1, 2, 3]));


//Count the number of capital letters in a string
function capitalLetters(str) {
    // str.split("");
    // var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var theCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase())   {
        theCount++
        }
    }
    return theCount;
}

console.log(capitalLetters("aBcDeFg"));

// H4CK3R 5P34K Converter
// function hackerSpeak (x) {
//     var xSplit = x.split("");
//     for (var i = 0; i < x.length; i++) {
//         if (x[i] === "a") {
//             x[i] = "4";
//         } else if (x[i] === "e") {
//             x[i] = "3";
//         } else if (x[i] === "i") {
//             x[i] = "1";
//         } else if (x[i] === "o") {
//             x[i] = "0";
//         } else if (x[i] === "s") {
//             x[i] = "5";
//         }
//     }
//     return xSplit.join("");
// }

// function hackerSpeak(x) {
//
//     var xSplit = x.split('');
//     for (var i = 0; i < x.length; i++) {
//         if (xSplit[i]=='a') {
//            xSplit[i] = 4;
//         } else if (xSplit[i]=='e') {
//             xSplit[i] = 3;
//         } else if (xSplit[i]=='i') {
//             xSplit[x] = 1;
//         } else if (Xsplit[i]=='o') {
//             xSplit[x] = 0;
//         } else if (xSplit[i]=='s') {
//             xSplit[x] = 5;
//         }
//     }
//     return xSplit.join('')
// }
function hackerSpeak(str) {

    var splitArr = str.split('');
    for( var i = 0; i < splitArr.length; i++){
        if (splitArr[i] == 'a') {
            splitArr[i] = 4
        } else if (splitArr[i]=='e') {
            splitArr[i] = 3
        } else if (splitArr[i]=='i') {
            splitArr[i] = 1
        } else if(splitArr[i]=='o') {
            splitArr[i] = 0
        } else if(splitArr[i]=='s') {
            splitArr[i] = 5
        }
    }

    return splitArr.join('')

}



console.log(hackerSpeak("aeios"));