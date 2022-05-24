window.addEventListener("load", function(){

    var boundary = document.getElementsByClassName("boundary");
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var WinOrLoss = document.getElementById("status");
    var running;
    var score = 0;
    var scoreArea = document.getElementsByClassName("boundary example");
    var changeTimer = document.getElementById("timer");
    var timer ;


//function to change the background color to red
    function changeColor(){
        for (var i=0 ; i<5; i++){
         boundary[i].style.backgroundColor = "red";
        }
        stopTimer();
        WinOrLoss.innerHTML = "You Lose!<br>Better luck next time<br>press ENTER to reset the game";
        
        score = score -10;
        scoreArea[0].innerHTML = ("score= " + score);
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
            setTimer();
            Launch();
        });
      
     
    }

    function Launch(){
        end.addEventListener("mouseover", function(event){
            WinOrLoss.innerHTML = ("You Win! press enter to play agian");
            stopTimer();    
            scoreArea[0].style.textAlign = "centre";
            score=5;
            scoreArea[0].innerHTML = ("score= " + score);
            pressEnter();
        }) 
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
                setTimer();
                score = 0;
                scoreArea[0].innerHTML = ("score= " + score);
                WinOrLoss.innerHTML = "Begin by moving your mouse over the S."
              } 
          
      
      })
      }

      function cheating(){
        alert("you trying to cheat!");
    }
    function setTimer(){
        var sec=0;
        timer = setInterval(()=>{
            changeTimer.innerHTML = '00:'+sec;
            sec++;
        }, 1000)
    }

    function stopTimer(){
        clearInterval(timer);
    }

    startGame();

})

