"use strict";

for (i = 1; i < 50; i += 2){
    var odd = (i % 2 !== 0);
    console.log("Here is an odd number: " + i);
    if (i === 25){
        console.log("Yikes! Skipping number: " + (i+=2));
        continue;
    }
}