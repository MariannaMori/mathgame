var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if we click on the start/reset button
document.getElementById("startreset").onclick = function(){
//if we are playing
   if(playing == true) {
       location.reload();  //reload page

   } else{  //if we are not playing
    //change mode to playing
    playing = true;
    //set score to 0
       score = 0;
       document.getElementById("scorevalue").innerHTML = score;
       //show countdow box
       show("timeremaining");
       timeremaining = 60;

       document.getElementById("timeremainingvalue").innerHTML = timeremaining;

       //hide gaame over message
       hide("gameOver");

//change button to reset
document.getElementById("startreset").innerHTML = "Reset Game";
//start countdown

startCountdown();
//generate newq&A
generateQA();

   }
}

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){

        if(playing==true){
            if(this.innerHTML == correctAnswer){
                //correct answer //increase score by 1
                score++;
                document.getElementById("scorevalue").innerHTML=score;
    
                //hide wrong box show correct
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
    
                }, 1000);
                //generate newQ&A
                generateQA();
    
            }else{
                //wrong answer
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
    
                }, 1000);
    
            }
    
        }
    }
}


      function startCountdown(){
          action = setInterval(function(){
              timeremaining -= 1;

              document.getElementById("timeremainingvalue").innerHTML = timeremaining;
              if(timeremaining == 0){//game over
                stopCountdown();
                show("gameOver");
                document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";
                hide("timeremaining");
                hide("correct");
                hide("wrong");
                playing = false;
                document.getElementById("starteset").innerHTML = "Start Game";
            
            }

          }, 1000);
      }
//stop the counter
      function stopCountdown(){
          clearInterval(action);
      }
//hide an elemnt
      function hide (id){
          document.getElementById(id).style.display = "none";

      }
//show an element
      function show(id){
          document.getElementById(id).style.display = "block";
      }

      //generate question and multiple answers
      function generateQA(){
          var x = 1+ Math.round(9*Math.random());
          var y = 1+ Math.round(9*Math.random());
          correctAnswer = x*y;
          document.getElementById("question").innerHTML = x + "x" + y;
          var correctPosition = 1+ Math.round(3*Math.random());
          document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with correct answer

          //fill other boxes with wrong answers

          var answers = [correctAnswer];

          for(i=1; i<5; i++){
              if(i !== correctPosition) {
                  var wrongAnswer;
                  do{
                    wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));   //a wrong answer
                  }
                  while(answers.indexOf(wrongAnswer)>-1)
            
              document.getElementById("box"+i).innerHTML = wrongAnswer;     
              answers.push(wrongAnswer);

              }
          }

      

      }


