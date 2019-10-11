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
console.log(areaCircle(5))

//10/3 Write a JS function that returns the perimeter of a quadrilateral
function perimeterQuad(a,b,c,d){
    return a + b + c + d;
}
console.log(perimeterQuad(2,3,4,5))

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
function helloThere(string = "stranger"){
    return "Hello there " + string + ".";


}
var name = prompt("What is your name?");
alert(helloThere(name));


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
    console.log(quotient(red, 5));
