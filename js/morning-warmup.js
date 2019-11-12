"use strict";

//9/18 Write a function that returns the sum of 2 arguments
function sum(x,y) {
    return x + y;
}
//9/19 write a function to fins the area of a triangle
function triangleArea(x,y,z) {
    //this variable stores half of the perimeter
    var half = (x+y+z)/2;
    //this area is the squareroot of this
    var area = Math.sqrt(half * (half-x) * (half-y) * (half-z));
    //returns the area
    return area;
}
//9/23 Write a JS function that returns the string of "Hi"
function sayHi() {
    return "Hi";
}

//9/25 Write a function that returns "Hello" and a name.//
function sayHello(name) {

    return 'Hello, ' + name + ' !';
}
console.log(sayHello("Kellsey"));

//9/26 Write a function that returns the first element of an array
function firstElement(arr) {
    return arr[0];
}

//9/27 Write a function that returns the area of an equilateral triangle
function equalTriangle(x) {
    return triangleArea(x,x,x);
}

//9/30 Write a function that concatenates 3 strings together
function threeStrings(x,y,z) {
    return x + " " + y + " " + z;
}
console.log(threeStrings("Good","morning","y'all"))

//10/1 Write a function that that takes in a string and returns the string with all the characters upper cased
function upperCase(string){
    return string.toUpperCase()
}
console.log(upperCase("kellsey"));

//10/2 Write a function that calculates the area of a circle when provided the diameter
function areaCircle(d){
    var rad = d / 2;

    var areaC = 3.14 * (rad * rad);

    return(areaC)
}
console.log(areaCircle(5));

//10/3 Write a JS function that returns the perimeter of a quadrilateral
function perimeterQuad(a,b,c,d){
    return a + b + c + d;
}
console.log(perimeterQuad(2,3,4,5));

//10/4 write a js function that returns the type of an arguement
function checkType(x){
    return typeof(x);
}

//10/7 write a function that returns true only when passed a positive even number
function isPositiveEven(x){
    if (x % 2 == 0 && x > 0){
        return true;
    }
    return false;
}

//10/8 write a js function that prompts a user for a number and returns 'true' if it is greater than 5
var ranNum = parseInt(prompt("Pick a number 1-10"));
alert(ranNum > 5);

//10/9 write a js function that returns hello there stranger or a string with input name.
// function helloThere(string = "stranger"){
//     return "Hello there " + string + ".";
//
//
// }
var name = prompt("What is your name?");
// alert(helloThere(name));


//10/10 write a js function that accepts an array and returns the length of that array
function arrLength(array){
    return array.length;
}

//10/11 write a js function that returns thr quotient of 2 numbers but only when passed 2 numbers it should return false in al other cases
    function quotient(num1, num2){
        if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 / num2;
        } else {
            return false;
        }
    }
    console.log(quotient(4, 2));
    console.log(quotient(3, 5));

//10/15 write a js function that that takes in an array that has a length of 5 console log each element of the array.
    function logArray(arrayInput){
        console.log(arrayInput);
    }
    logArray(["Kellsey", "Zackry", "Betty", "Polly", "Pocky"]);

//10/17 write a js function that takes in an input and returns true if the input is a string at least 8 characters in length. it should reutrn false for all other input
    function strLength(x){
        if (typeof x === "string" && x.length >= 8){
            return true;
        }
        return false;
    }
    console.log(strLength("kellseyn"));

    // return typeof str === "string" && str.length >= 8;

//10/18 write a js function that takes in a floating point number and returns a number rounded down it should return falase for all inputs that aren't numbers
    function roundDown(num1){
       if(typeof num1 === "number" && !isNaN(num1)){
           return Math.floor(num1);
       }
       return false;
    }
    console.log(roundDown(10.8));

//10/21 write a js function that counts from 1 up to the number that the user passes in .
    function userNum(x){
        for(var i = 1; i <= x; i++){
            console.log(i);

        }
        return "Done counting";
    }

//10/23 write a function called createPersonObject that takes in a name and an age and returns a person object containing name and age
    function createPersonObject(name, age) {
        var person = {};
            person.name = name;
            person.age = age;

        return person;
    }
//10/24 write a fizzbuzz in js
    function fizzBuzz(num) {
        var fizz = i % 3 === 0;
        var buzz = i % 5 === 0;
        for (var i = 1; i < num; i++) {
            if (fizz && buzz) {
                console.log("fizz buzz")
            } else if (fizz) {
                console.log("fizz")
            } else if (buzz) {
                console.log("buzz")
            } else {
            console.log(i)
            }
        }
    }
        console.log(100);

//10/25 write a function that will return the number 5, but only when passed the string of "five"
    function stringFive(x){
        if(x === "five"){
            return 5;
        }
    }
    console.log(stringFive("five"));

//10/28 write a JS function that will return the shopping cart with the most oranges.

var shoppingCarts = [
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

function mostOranges(carts){
    var winner = carts[0];
    carts.forEach(function (cart) {
        if (cart.oranges > winner.oranges){
            winner = cart;
        }
    });
    return winner;
}
console.log(mostOranges(shoppingCarts));

// shoppingCarts.forEach(function (cart) {
//     var arr = [];
//     if (cart.oranges > 5) {
//         return arr;
//     }
// });

//10/29 write a js function that accepts an array of student objects that are not registered for class

// function checkRegistration(x){
//     var bucket = [];
//     var students = [
//         {
//             name: "Mary",
//             grade: 10,
//             gpa: 3.7,
//             isRegistered: true
//         },
//         {
//             name: "Tim",
//             grade: 12,
//             gpa: 3.2,
//             isRegistered: false
//         },
//         {
//             name: "Ellie",
//             grade: 9,
//             gpa: 4.0,
//             isRegistered: false
//         },
//         {
//             name: "Alex",
//             grade: 10,
//             gpa: 3.9,
//             isRegistered: true
//         }
//     ];
//
//     studentArray.forEach(function (studentArray) {
//         if (!student.isRegistered) {
//             bucket.push(student);
//         }
//     });
//     return bucket;
// }
//
// console.log(checkRegistration(student));

//10/30 write a js function that will return an array of hamster objects sorted by height in ascending order

var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    }, {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    }, {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    }, {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    }, {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function heightOrder(hamHams) {
    var bucket = [];
    hamHams.sort(function (a, b) {
        return a.heightInMM - b.heightInMM;
    });
}

console.log(heightOrder(hamsters));

//11/1 3 fave web apps
console.log("twitter, aesthetically pleasing, discord, clean and easy accessibility, fanfiction, desktop feel even in mobile very easy to use settings");

//11/4 write a javascript function that will take in the whole numbers 1-10 and return the number spelled out as a string
function numberToWord(num){
   switch (num){
       case 1:
           return 'one';
       case 2:
           return 'two';
       case 3:
           return 'three';
       case 4:
           return 'four';
       case 5:
           return 'five';
       case 6:
           return 'six';
       case 7:
           return 'seven';
       case 8:
           return 'eight';
       case 9:
           return 'nine';
       case 10:
           return 'ten';
       default :
           return false;
   }

}


var randoNum = Math.floor(Math.random()* 10) + 1;


console.log(numberToWord(randoNum));

//11/5 Write a JS function that will return "You're welcome" but only when passed a JS object with a property of gratitude that has the value of "Thank you"

// var whatYouSay = [
//     {
//     gratitude: "Thank you"
//     },{
//     gratitude: "Thanks"
//     },{
//     gratitude: "Dueces"
//     }
// ];
// function response(obj){
//     if (obj.gratitude === "Thank you"){
//         return "You're Welcome"
//     }
// }
//
// console.log(response());


//11/6 write a js function that returns a random boolean

function rando(){
    return Boolean(Math.floor(Math.random() * 2));
}
console.log(rando());

//11.12 Given this array [1,2,3,4,5,6,7,8] write a loop that returns an array of all even numbers

var myNum = [1,2,3,4,5,6,7,8];

function isEven(arr) {
    var bucket = [];
    arr.forEach(function (num) {
        if (num % 2 === 0){
            bucket.push(num)
        }
    });
    return bucket;
}

console.log(isEven(myNum));

console.log(isEven());