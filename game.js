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
        WinOrLoss.innerHTML = "You Lose!<br>Better luck next time<br>press ENTER to reset the game"
        pressEnter();
    }
    function resetColor(){
        for (var i=0 ; i<5; i++){
         boundary[i].style.backgroundColor = "#eeeeee";
        }
        Launch();
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
        
    }

    function pressEnter(){
        document.addEventListener('keypress', (event) => {
            if (event.key ==="Enter"){
                resetColor();
              } 
          
      
      })
      }

    startGame();

})

