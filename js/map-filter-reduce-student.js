"use strict";

/*********************************************
 *              .map
 ******************************************** */

const numbers = [1,2,3,4,5,6,7,8,9,10];

// let newArray = [];
// numbers.forEach(function (number) {
//     newArray.push(number + 1);
// });
// console.log(newArray);

//TO DO TOGETHER: Let's map through the array of number and add 1 to each
// element. Console log the new copy of the array.

let newArray = numbers.map(num => num + 1);


//TO DO: Map through the new array of numbers and this time multiply each
// element by 3. Console log the new copy.
let newerArray = newArray.map(num => num * 3);
console.log(newArray);
console.log(newerArray);

/*********************************************
 *              .filter
 ******************************************** */
const binary = [1,1,1,1,0,0,1,1,1,1];

const ones = binary.filter(num => num == true);
console.log(ones);

// TO DO TOGETHER: Let's filter through our binary and return all the true
// values. We'll store the new array in a variable named 'ones'

// TO DO: filter through binary again and this time, return all the false
// values.

const zeroes = binary.filter( num => num == false);
console.log(zeroes);

const fruitsAndVeggies = [
    {
        name: "banana",
        type: "fruit"
    },
    {
        name: "broccoli",
        type: "vegetable"
    },
    {
        name: "tomato",
        type: "fruit"
    },
    {
        name: "carrot",
        type: "vegetable"
    },
    {
        name: "apple",
        type: "fruit"
    },
    {
        name: "spinach",
        type: "vegetable"
    },
];


// TO DO: filter through the array of objects and return all fruit type
// objects.

const fruits = fruitsAndVeggies.filter(fruit => fruit.type === "fruit");
console.log(fruits);

// TO DO: filter through the array of objects and return all vegetable type
// objects.
const veggies = fruitsAndVeggies.filter(veggie => veggie.type === "vegetable");
console.log(veggies);

/*********************************************
 *              .reduce
 ******************************************** */

// TO DO TOGETHER: Let's reduce our original numbers Array into one single
// value.

const sum = numbers.reduce((a,b) => a + b,0) ;
console.log(sum);

// TO DO: Using .reduce, subtract all numbers in the numbers Array from a
// starting point of 100.
const difference = numbers.reduce((a,b) =>  a - b,100);
console.log(difference);

const shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

const appleTotal = shoppingCarts.reduce((total, cart) => {return total + cart.apples},0);
console.log(appleTotal);

// TO DO: Using .reduce, return the total number of apples.

// TO DO TOGETHER: let's use .reduce to return an object that has properties
// representing total values for each fruit.
function allTheColors(arr) {
    const colors = ['red', 'orange', 'red', 'blue', 'blue', 'green', 'red'];
    const colorCount = colors.reduce((colorCounts, color) => {
        if (typeof colorCounts[color] === 'undefined') {
            colorCounts[color] = 1;
        } else {
            colorCounts[color] += 1;
        }
        return colorCounts;
    }, {});
    return colorCount;
}

console.log(allTheColors());
// TO DO: Count the number of times a color appears in this Array. Hint:
// your initial value should be an empty object.

const lyrics = ['we','all','live','in','a','yellow','submarine'];

//TO DO TOGETHER: Using reduce, let's turn this into a string.
const oneLine = lyrics.reduce((currentString, word) => `${currentString} ${word}`,"");
console.log(oneLine);

// Bonus: Create an Array of all the unique fur colors!
var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

