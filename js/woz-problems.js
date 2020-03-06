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


// Planetary Weight Converter
// In this challenge, you have to convert a weight weighed on a planet of the Solar System to the corresponding weight on another planet.
//
//     To convert the weight, you have to divide it by the gravitational force of the planet on which is weighed and multiply the result (the mass) for the gravitational force of the other planet. See the table below for a list of gravitational forces:
//
//     weight on planetA / gravitational force of planetA) * gravitational force of planetB
//
// Planet	m/s²
// Mercury	3.7
// Venus	8.87
// Earth	9.81
// Mars	    3.711
// Jupiter	24.79
// Saturn	10.44
// Uranus	8.69
// Neptune	11.15
// Given a weight weighed on planetA, return the converted value for planetB rounded to the nearest hundredth.
//
//     Examples
// spaceWeights("Earth", 1, "Mars") ➞ 0.38
//
// spaceWeights("Earth", 1, "Jupiter") ➞ 2.53
//
// spaceWeights("Earth", 1, "Neptune") ➞ 1.14


var planets = [
    {
        name: 'Mercury',
        force: 3.7
    },
    {
        name: 'Venus',
        force: 8.87
    },
    {
        name: 'Earth',
        force: 9.81
    },
    {
        name: 'Mars',
        force: 3.711
    },
    {
        name: 'Jupiter',
        force: 24.79
    },
    {
        name: 'Saturn',
        force: 10.44
    },
    {
        name: 'Uranus',
        force: 8.69
    },
    {
        name: 'Neptune',
        force: 11.15
    },
    {
        name: 'Pluto',
        force: 0.62
    }
];

function spaceWeights(planetA, weight, planetB) {
    // planetA.forEach(function (planet1){
        // if(this.name === planet1.toUpperCase()){
            this.name = planetA;
        // }
    // });
    return planetA
}

console.log(spaceWeights(Earth, 1, Mars));




