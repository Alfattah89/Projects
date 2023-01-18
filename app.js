// Toggle-Menu
var NavLink = document.getElementById("Nav-Links");

function ShowMenu(){
    NavLink.style.top="0"
}

function hideMenu(){
    NavLink.style.top="-300px"
}


// Counter-Section
$(document).ready(function(){
    $(".counter").counterUp({
        delay:10,
        time:1200
    });
});


