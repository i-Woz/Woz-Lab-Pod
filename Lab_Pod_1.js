"user strict";

//EASY//CONDTIONALS//LOGIC//BUGS//
// Find the Bug: Returning the Container
// The packaging system is running wild and the candy is lying loose all over in the warehouse and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.
//
//     The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...
//
// Examples
// getContainer("Bread") ➞ "bag"
//
// getContainer("Beer") ➞ "bottle"
//
// getContainer("Candy") ➞ "plastic"
//
// getContainer("Cheese") ➞ null
// Notes
// Run the tests first to see the results before making changes and understand why bread is stuffed in bottles and candy is not in plastic.


function getContainer(product) {
    let container
    switch (product) {
        case "Bread":
            container = "bag";
            break;
        case "Beer":
            container = "bottle";
            break;
        case "Milk":
            container = "bottle";
            break;
        case "Cerials":
            container = "box"
            break;
        case "Eggs":
            container = "carton";
            break;
        case "Candy":
            container = "plastic";
            break;
        default:
            container = null
    }

    return container;
}
console.log(getContainer("Candy"));


/////////////

// Ping Pong!
//     A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).
//
// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:
//
// If win equals true, end the list with Pong!.
// If win equals false, end with Ping! instead.
//     Examples
// pingPong(["Ping!"], true) ➞ ["Ping!", "Pong!"]
//
// pingPong(["Ping!", "Ping!"], false) ➞ ["Ping!", "Pong!", "Ping!"]
//
// pingPong(["Ping!", "Ping!", "Ping!"], true) ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
// Notes
// You will always return the ball (i.e. the Pongs are yours).
// Player 1 serves the ball and makes Ping!.
// Return an array of strings.

// function pingPong(arr, win) {
//     var final = arr.map(e => [e, "Pong!"]).flat();
//     return win ? final : final.slice(0,final.length-1);
// }



const pingPong = ({ length }, win) =>
    Array.from({ length: length * 2 - !win }, (_, i) =>
        i % 2 ? 'Pong!' : 'Ping!',
    );



////////////////////Fun//

// Make a function called coinFlip() that returns either 0 or 1, randomly
//Math.floor


function coinFlip(input){
    return Math.floor (Math.random() *2);
}
console.log(coinFlip(input));