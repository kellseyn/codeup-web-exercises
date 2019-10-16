"use strict";
/*
* WHILE LOOPS
*/
var i = 10;

while (i > 0){
    console.log(i);
    i--;
}


// 1. Create a while loop that counts to 100 in increments of ten:
// (10...20...30...)

var i = 1;

while (i < 11){
    console.log(i * 10);
    i++;
}

// 2. Create a while loop that counts backwards from 50 - 1
var i = 50;

while (i > 0){
    console.log(i);
    i--;
}

var myQuestion;

// 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"
// Store the confirm in the myQuestion variable.
// Try running this. What happens?
while (!myQuestion){
    myQuestion = confirm('Would you like to exit?');

}

/*
* DO-WHILE LOOPS
*/


// 4. Refactor question 3 using a do-while loop.
// What is the behavior this time?

do {
    myQuestion = confirm('Would you like to exit?');
}while(!myQuestion);

// 5. Create a do-while loop that prompts the user for a color and continues
// to prompt until the string passed is "blue"

do {
    var myColor = prompt("Enter a color");
}while(myColor !== "blue");

// 6. Refactor question 1 using a do-while loop.
var i = 1;
do{
    console.log(i * 10);
    i++;
}while(i < 11);

/*
* FOR LOOPS
*/

var myArray = ["apples", "oranges", "bananas", "grapes", "pineapples"];

// 7. Create a for loop that iterates over this array and logs out each
// element to the console

for (var i = 0; i < myArray.length; i++){
    console.log(myArray[i])
}

// 8. You are going to use a for loop to complete the FizzBuzz exercise.
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.

for (var i = 1; i <= 100; i++) {
    console.log(i) || console.log((i % 3 === 0) + "Fizz") || console.log((i % 5 === 0) + "Buzz") || console.log((i % 15 === 0) + "FizzBuzz");
}


// 9. Refactor question 1 using a for-loop


for(var i = 1; i < 11; i++){
    console.log(i * 10);
}

// 10. Write a for-loop


/*
* BREAK AND CONTINUE
*/

// 11. Refactor question 1: using a 'break', stop the counting once it hits 70.
for(var i = 1; i < 11; i++){
    console.log(i * 10);
    if(i === 70){
        break;
    }
}

// 12. Refactor question 2: using a 'continue', skip numbers 50-26 and only
// log 25 - 1.










var i = 1;
while(i < 17){
    console.log("doubled from the previous" + (Math.pow(2, i)));
    i++;
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
//
//
//
do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (allCones > conesBought) {
        allCones -= conesBought;
        console.log("customer bought " + conesBought + " cones. There are " + allCones + " cones left in inventory.");
    } else if (allCones < conesBought) {
        console.log("Sorry I can't sell you " + conesBought + " cones. I only have " + allCones + " cones left in inventory.");
    } else{
        allCones -= conesBought;
        console.log("Yay I can go home. I'm all sold out!");
    }
}while (allCones > 0);