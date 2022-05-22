var boundary = document.getElementsByClassName("boundary");
var start = document.getElementById("start");


//function to change the background color to red
function changeColor(){
    for (var i=0 ; i<5; i++){
        boundary[i].style.backgroundColor = "red";
    }
}


function startGame(){
    start.addEventListener("click", Launch)   
}

function Launch(){
    for (var i = 0; i<5; i++){
        boundary[i].addEventListener("mouseover", changeColor);
    }
}

startGame();
;


