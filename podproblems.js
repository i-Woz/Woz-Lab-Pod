"use strict";
// // Multiply values of an array by its length.
// // Take in array --> determine # of values --> multiply each value by # of total values.
// // Use bucket? Probably not but try at first.
// function multiplyByLength(x) {
//     var holder = []; // <--The bucket
//     for (var i = 0; i < x.length; i++) { // <--Establish for-loop to cycle through each array value.
//         holder.push(x[i] * x.length); // <--Multiplies each value by array length by using .length method.
//     }
//     return holder; // <--Returns the bucket
// }
//
// console.log(multiplyByLength([1, 2, 3]));
//
//
// //Count the number of capital letters in a string
// function capitalLetters(str) {
//     // str.split(""); <--An abandoned approach to solving the problem that was very clumsy.
//     // var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" <--See above comment.
//     var theCount = 0; // <--The all-powerful bucket returns!
//     for (var i = 0; i < str.length; i++) { //<--Establish for-loop to cycle through every letter of the string.
//         if (str[i] === str[i].toUpperCase())   { //<--The much-cleaner solution to determining if every cycled value contains a capital letter.
//         theCount++ //<--Incrementer that adds each boolean true result of the loop's logic to the bucket.
//         }
//     }
//     return theCount; //<--Returns the bucket.
// }
//
// console.log(capitalLetters("aBcDeFg"));
//
// //Convert a string into hacker speak by replacing the letter a,e,i,o,s with 4,3,1,0,5 respectively.
// function hackerSpeak(str) {
//
//     var splitArr = str.split(''); // <--Splits passed string into an array of separated letters.
//     for( var i = 0; i < splitArr.length; i++){ // <-- established the for-loop that cycles through every array value after the string was split.
//         if (splitArr[i] == 'a') { // <--conditional logic determines if each value returns boolean true.
//             splitArr[i] = 4 // <--Replaces letter with corresponding number.
//         } else if (splitArr[i]=='e') { // <--conditional logic determines if each value returns boolean true.
//             splitArr[i] = 3 // <--Replaces letter with corresponding number.
//         } else if (splitArr[i]=='i') { // <--conditional logic determines if each value returns boolean true.
//             splitArr[i] = 1 // <--Replaces letter with corresponding number.
//         } else if(splitArr[i]=='o') { // <--conditional logic determines if each value returns boolean true.
//             splitArr[i] = 0 // <--Replaces letter with corresponding number.
//         } else if(splitArr[i]=='s') { // <--conditional logic determines if each value returns boolean true.
//             splitArr[i] = 5 // <--Replaces letter with corresponding number.
//         }
//     }
//
//     return splitArr.join('') // <--Rejoins the previously-split array back into a string, returning the hacker-speak translation.
//
// }



// console.log(hackerSpeak("David rooles!"));

function scrabble(hand) {
    var bucket = 0;
    for(var i = 0; i < hand.length; i++)	{
        bucket += hand[i].score;
    }
    return "Your total points are " + bucket;
}

console.log(scrabble([
    {tile: "N", score: 1},
    {tile: "K", score: 5},
    {tile: "Z", score: 10},
    {tile: "X", score: 8},
    {tile: "D", score: 2},
    {tile: "A", score: 1},
    {tile: "E", score: 1}
]));

function sortDrinkByPrice(drinks) {
    return drinks.sort(function (a, b) {
        return b.price - a.price
    }
    )
}

console.log(sortDrinkByPrice([
    {name: 'lemonade', price: 90},
    {name: 'lime', price: 432},
    {name: 'peach', price: 23}
]));

function cityFacts(city) {
    var name = city.name;
    var population = city.population;
    var continent = city.continent;
    return name + ' has a population of ' + population + ' and is situated in ' + continent;
}

console.log(cityFacts({name: 'Manila', population: '1,780,148', continent: 'Asia'}));
console.log(cityFacts({name: 'Jeff City', population: '1', continent: 'the Moon!'}));



// function isSpecialArray(arr) {
//
//     for (var i = 0; i < arr.length; i++)
//     {
//         if (i % 2 === 0 ) {
//             if (arr[i] % 2 !== 0) return false;
//         } else if (arr[i] % 2 === 0) return false;
//     }
//
//     return true
// }

function isSpecialArray(arr) {
    let count = 1;
    return arr.every( function(x) {
        if (count % 2 != 0 && x % 2 == 0) {
            count++;
            return true;
        } else if (count % 2 == 0 && x % 2 != 0) {
            count++;
            return true;
        }
    })
}

console.log(isSpecialArray([2, 3, 4, 5, 6, 7, 8]));
console.log(isSpecialArray([1, 2, 3, 4, 5, 6, 7]));
