window.addEventListener("load", function(){

    var boundary = document.getElementsByClassName("boundary");
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var WinOrLoss = document.getElementById("status");
    var running;


//function to change the background color to red
    function changeColor(){
        for (var i=0 ; i<5; i++){
         boundary[i].style.backgroundColor = "red";
        }
    }
    function resetColor(){
        for (var i=0 ; i<5; i++){
         boundary[i].style.backgroundColor = "eeeeee";
        }
    }

    function startGame(){
        start.addEventListener("click", (Event) => {
            Launch();
        });
      
     
    }

    function Launch(){   
    for (var i = 0; i<5; i++){
            boundary[i].addEventListener("mouseover", changeColor);
        }
    }

    function winGame(){
        end.addEventListener("mouseover", (event) =>{
        WinOrLoss.innerHTML = "You Win !!"
        })
    };

    function Reset (){
        resetColor();  
        running = true;
    }

    startGame();

})

