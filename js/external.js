"use strict";
console.log('Hello from external JavaScript!');

alert("Welcome to my Website!");

var color = prompt("What is your favorite color?");
alert("Great,  " + color + " is my favorite color too!")


function movieRental() {
    var merm = prompt("How many days would you like to rent 'The Little Mermaid'?");
    var bear = prompt("How many days would you like to rent 'Brother Bear'?");
    var herc = prompt("How many days would you like to rent 'Hercules'?");
    var total = (merm * 3) + (bear * 3) + (herc * 3);
    alert("The total rent cost is $" + total);
}
console.log(movieRental(total));

var goog = prompt("How many hours did you work this week at Google?");
var face = prompt("How many hours did you work this week at Facebook?");
var amaz = prompt("How many hours did you work this week at Amazon?");
var totalHours = (goog * 400) + (face * 350) + (amaz * 380);
alert("Your total income is $" + totalHours);

function enroll(){
    var room = confirm("Is there still room in class for student to join? OK for yes.");
    var time = confirm("Is there an available time slot in the student's schedule? OK for yes.");
    return (room && time);
}
console.log(enroll());

function productOffer(){
   var premium = confirm("Are you a premium member? OK for yes");
   var items = prompt("How many items are you buying?");
   var date = confirm("Is today's date before 1/1/20? OK for yes.");
   return premium || (items > 2 && date);
}
console.log(productOffer());

var username = 'codeup';
var password = 'notastrongpassword';
password.length >= 5 && password.indexOf(username) === -1 && username.length <= 20 && username === username.trim() && password === password.trim();