window.onload = function() {
    var rPosition = 0;
    var seconds = 10;
    var rest = true;
    var interval;
    var timeElapsed = 0;
  var clicked = false;
  var position  = 0;
  var x = document.getElementById("myAudio"); 
  var y = document.getElementById("beep"); 
    var started = false;
    var breakTime = 10;
    var list = ["Butt Kicks",
    "Squat Jacks",
    "Right Leg Swing",
    "Left Leg Swing",
    "Plank Rows",
    "Round 1: V Situps",
    "Round 1: Burpees",
    "Round 1: Dive Bomber",
    "Round 1: Superman",
    "Round 1: Squat Jump",
    "Round 1: Steam Engines",
    "Round 2: V Situps",
    "Round 2: Burpees",
    "Round 2: Dive Bomber",
    "Round 2: Superman",
    "Round 2: Squat Jump",
    "Round 2: Steam Engines",
    "Round 3: V Situps",
    "Round 3: Burpees",
    "Round 3: Dive Bomber",
    "Round 3: Superman",
    "Round 3: Squat Jump",
    "Round 3: Steam Engines",];
    var wList = ["1. Butt Kicks",
    "<br>2. Squat Jacks",
    "<br>3. Right Leg Swing",
    "<br>4. Left Leg Swing",
    "<br>5. Plank Rows",
    "<br>6. Round 1: V Situps",
    "<br>7. Round 1: Burpees",
    "<br>8. Round 1: Dive Bomber",
    "<br>9. Round 1: Superman",
    "<br>10. Round 1: Squat Jump",
    "<br>11. Round 1: Steam Engines",
    "<br>12. Round 2: V Situps",
    "<br>13. Round 2: Burpees",
    "<br>14. Round 2: Dive Bomber",
    "<br>15. Round 2: Superman",
    "<br>16. Round 2: Squat Jump",
    "<br>17. Round 2: Steam Engines",
    "<br>18. Round 3: V Situps",
    "<br>19. Round 3: Burpees",
    "<br>20.Round 3: Dive Bomber",
    "<br>21.Round 3: Superman",
    "<br>22.Round 3: Squat Jump",
    "<br>23.Round 3: Steam Engines",];
    
    var dList = [30,
      30,
      30,
      30,
      30,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40,
      40];
    var restList = [1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1];
    var links = ["workouts//butt_kicks.gif",
    "workouts//squat_jacks.gif",
    "workouts//right_leg_swing.gif",
    "workouts//left_leg_swing.gif",
    "workouts//plank_rows.gif",
    "workouts//v_situps.gif",
    "workouts//burpees.gif",
    "workouts//divebomber.gif",
    "workouts//supermans.gif",
    "workouts//squat_jumps.gif",
    "workouts//steam_engines.gif",
    "workouts//v_situps.gif",
    "workouts//burpees.gif",
    "workouts//divebomber.gif",
    "workouts//supermans.gif",
    "workouts//squat_jumps.gif",
    "workouts//steam_engines.gif",
    "workouts//v_situps.gif",
    "workouts//burpees.gif",
    "workouts//divebomber.gif",
    "workouts//supermans.gif",
    "workouts//squat_jumps.gif",
    "workouts//steam_engines.gif"
    ];
  
    var linkSRC = document.getElementById("help");
    
    
 var controls = document.getElementsByClassName("controls");

    var startButton = document.getElementById("start");
    var pauseButton = document.getElementById("pause");
    var completeButton = document.getElementById("complete");
    
    var workList = document.getElementById("worklist");
  var nextHeader = document.getElementById("next");
  
    var statusHeader = document.getElementById("status");
    var secondsSpan = document.getElementById("sec");
x.onended = function(){
    this.currentTime = 0;
  var delay = setTimeout(function(){
    x.play();
    clearTimeout(delay);
  }, 8000);
}
    startButton.onclick = function() {
    if(position==0 && started == false){
        started = true;
        seconds =dList[position];
        rest = false;
        controls[0].style.display = "none";
    } 
    if (clicked == false ){
    if(rest==true){
    console.log("gooo");}
    else {
    console.log(rest,"noo");
    changeToGo();
    }
    interval = setInterval(countdownSeconds, 1000);
    x.play();   
    clicked = true;
    }
  }
  
    pauseButton.onclick = function() {
      clicked = false;
      x.pause();
      y.pause();
      clearInterval(interval);
    }
    
var minute,second;
    function countdownSeconds() {
        seconds = seconds - 1;
        minute = parseInt(seconds / 60, 10);
        second = parseInt(seconds % 60, 10);

        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;

        secondsSpan.textContent = minute + ":" + second;
          if (seconds <= 5){
          y.play();
      }
        console.log(seconds);
      checkForStateChange();}

      
  
    function checkForStateChange() {
      if (position == list.length){
      theEnd();}
      if (seconds == 0 && rest == false) {
        if (restList[rPosition] == 1){
            console.log("yolo in here now");
            rest = true;
            seconds = breakTime;
            rPosition = rPosition +1;
            changeToRest();}
        if(rest==false){
        position = position+1;
        seconds = dList[position];
        changeToGo(); 
        rPosition = rPosition +1;}
        }
       
      if(rest == true && seconds ==0){
         console.log("Hi");
          rest = false;
          position = position + 1;
          seconds = dList[position];
          changeToGo();
      }
    }
  
    function changeToRest() {
     seconds = breakTime;
      console.log(position,rPosition,restList[rPosition],"rest");
      $("body").css("background", "cyan");
      statusHeader.innerText = "Rest";
      nextHeader.innerText = "UP NEXT : "+ list[position+1];
      linkSRC.src = "workouts//rest_2.gif";
    }
  
    function changeToGo() {
      $("body").css("background", "#ffbc59");
      if(restList[rPosition]==2){
      $("body").css("background", "orange");
      }
 console.log(rPosition,links[position],position,restList[rPosition]);
      statusHeader.innerText = list[position];
      if(restList[rPosition+1] != 1){
      nextHeader.innerText = "UP NEXT : "+ list[position+1];
      }
      else {
          nextHeader.innerText = "UP NEXT : REST";
      }
      linkSRC.src = links[position];
    }
      
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 

  var modalx = document.getElementById("completed");
  
  // Get the button that opens the modal
  var btnx = document.getElementById("complete");
  var min = document.getElementById("min");
  var cal = document.getElementById("cal");

  // Get the <span> element that closes the modal
  var spanx = document.getElementsByClassName("close")[1];
  var secondsDone= 0;
  var calSeconds = 0;
var restDone = 0;
  function theEnd() {
  console.log("hi");
    clearInterval(interval); 
    var completed = wList.slice(0,position+1);
    var compString = completed.join(' ');
    workList.innerHTML = compString;
    
  console.log(position,"length");
    for (i = 0; i < position+1; i++) {
    //if (rPosition[i]==2)
        //{
            //rPosition = rPosition/2;
       // }
    secondsDone += dList[i]+restList[i]*breakTime;
    calSeconds += dList[i];
  }
      if(rest == true){
      secondsDone = secondsDone - seconds;}
      else{
      secondsDone = secondsDone - seconds-restList[i]*breakTime;  
      }
      console.log(secondsDone,parseInt(secondsDone/60));
      calSeconds = calSeconds - seconds;
  min.innerText = parseInt(secondsDone/60)+":"+(secondsDone%60);
  cal.innerText = calSeconds*12/60;
    clicked = false;
    modalx.style.display = "block";
    x.pause();
    y.pause();
  }    
  
  // When the user clicks the button, open the modal 
  
  btnx.addEventListener('click', function() {
      theEnd();
  }, false);
   
  
  span.onclick = function() {
      modal.style.display = "none";
      if (rest==false && clicked == false && started!=false){
      console.log(clicked,interval);
      changeToGo();
      interval = setInterval(countdownSeconds, 1000);
      clearInterval(interval);
      if(seconds == 5){
      y.play();
      x.play();
      clicked = true;
      }
      else {
      x.play();
      clicked = true;
      }
      }
      if (rest==true && clicked == false && started!=false){
      console.log(clicked,interval);
      changeToRest();    
      interval = setInterval(countdownSeconds, 1000);
      clearInterval(interval);
      if(seconds == 5){
      y.play();
      x.play(); 
      clicked = true;
      }
      else {
      x.play();
      clicked = true;
      }
      }
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      if (rest==false && clicked == false && started!=false){
      changeToGo();
      clearInterval(interval); 
      interval = setInterval(countdownSeconds, 1000);
      if(seconds == 5){
      y.play();
      x.play();
      clicked = true;
      }
      else {
      x.play();
      clicked = true;
      }
      }
      if (rest==true && clicked == false && started!=false){
      changeToRest();
      clearInterval(interval); 
      interval = setInterval(countdownSeconds, 1000);  
      if(seconds == 5){
      y.play();
      x.play(); 
      clicked = true;
      }
      else {
      x.play();
      clicked = true;
      }
      }
    }
  }
      
  }
