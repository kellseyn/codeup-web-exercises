"use strict";
console.log('Hello from external JavaScript!');

alert("Welcome to my Website!");

var color = prompt("What is your favorite color?");
alert("Great,  " + color + " is my favorite color too!");


function movieRental() {
    var merm = parseInt(prompt("How many days would you like to rent 'The Little Mermaid'?"));
    var bear = parseInt(prompt("How many days would you like to rent 'Brother Bear'?"));
    var herc = parseInt(prompt("How many days would you like to rent 'Hercules'?"));
    var total = (merm * 3) + (bear * 3) + (herc * 3);
    alert("The total rent cost is $" + total);
}

var goog = parseInt(prompt("How many hours did you work this week at Google?"));
var face = parseInt(prompt("How many hours did you work this week at Facebook?"));
var amaz = parseInt(prompt("How many hours did you work this week at Amazon?"));
var totalHours = (goog * 400) + (face * 350) + (amaz * 380);
alert("Your total income is $" + totalHours);


var room = confirm("Is there still room in class for student to join?");
var time = confirm("Is there an available time slot in the student's schedule?");
alert("Student signed up for class: " + (room && time) + ".");




var premium = confirm("Are you a premium member?");
var items = parseInt(prompt("How many items are you buying?"));
var valid = confirm("Is today's date before 1/1/20?");
alert("The super special discount applied: " + premium || (items > 2 && valid) + ".");


