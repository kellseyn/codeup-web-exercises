"use strict";

while(true){
    var num = parseInt(prompt("Pick an odd number between 1 and 50"));
    if (num % 2 === 0 && <= 50 && num >= 1){
        break;
    }
}

for (i = 1; i < 50; i += 2){

    var odd = (i % 2 !== 0);
    console.log("Here is an odd number: " + i);
    if (i === num){
        console.log("Yikes! Skipping number: ");
        continue;
    }
}