"use strict";

function showMultiplicationTable(x){
    for (var i = 1; i < 11; i++){
       var multi = i * x;
        console.log(x + " x " + i + " = " + multi);
    }
}


// This is how you get a random number between 50 and 100

// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

for (var i = 1; i < 11; i++){
    var allCones = Math.floor(Math.random() * 180) + 20;
    if (allCones % 2 === 0){
        console.log(allCones + " is Even")
    } else {
        console.log(allCones + " is odd");
    }
}

// for (var j = 1; j < 11; j++){
//     var output = j.toString(j);
//
// }

for(var i=1; i<=9; i++){
    var Num='';
    for(var j=0; j<i; j++){
        Num += i;
    }
    console.log(Num)
}

for (var k = 20; k > 0; k--){
    console.log(k * 5);
}


