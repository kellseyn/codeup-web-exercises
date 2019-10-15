"use strict";

$(document).ready(function() {

    $('.carousel').carousel()

});


var directoryDiv = document.getElementById("directory");
var innerBoxes = directoryDiv.getElementsByClassName("inner-box");
for (var i = 0; i < innerBoxes.length; i++) {
    innerBoxes[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("hov-clicked");
        if(current != null && current[0] != null && this.classList.contains("hov-clicked")) {
            current[0].className = current[0].className.replace(" hov-clicked", "");
        }
        else if (current != null && current[0] != null) {
            current[0].className = current[0].className.replace(" hov-clicked", "");
            this.className += " hov-clicked";
        }
        else {
            this.className += " hov-clicked"
        }
    });
}


