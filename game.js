var boundary = document.getElementsByClassName("boundary");
var start = document.getElementById("start");
var end = document.getElementById("end");
var qiqi = document.getElementById("status");


//function to change the background color to red
function changeColor(){
    for (var i=0 ; i<5; i++){
        boundary[i].style.backgroundColor = "red";
    }
}

function startGame(){
    start.addEventListener("click", Launch);
    winGame();  
     
}

function Launch(){
    for (var i = 0; i<5; i++){
        boundary[i].addEventListener("mouseover", changeColor);
    }
}

function winGame(){
    end.addEventListener("mouseover", (event) =>{
       qiqi.innerHTML = "You Win !!"
    })
 }

 startGame();
 



