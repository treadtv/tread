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
    var list = ["Walkout Plank",
    "Butt Kicks",
    "Hip Circles Clockwise",
    "Hip Circles Anti Clockwise",
    "T Pushup",
    "Donkey Kicks Left",
    "Crab Toe Touch",
    "Loaded Beast to Beast Reach",
    "Negative Pushups",
    "Plank Side to side dips",
    "Squats to Calf Raise",
    "T Pushup",
    "Donkey Kicks Right",
    "Crab Toe Touch",
    "Loaded Beast to Beast Reach",
    "Negative Pushups",
    "Plank Side to side dips",
    "Squats to Calf Raise",
    "Swimmers",
    "Cat Cow Stretch",];
    var wList = ["1. Walkout Plank",
    "<br>2. Butt Kicks",
    "<br>3. Hip Circles Clockwise",
    "<br>4. Hip Circles Anti Clockwise",
    "<br>5. T Pushup",
    "<br>6. Donkey Kicks Left",
    "<br>7. Crab Toe Touch",
    "<br>8. Loaded Beast to Beast Reach",
    "<br>9. Negative Pushups",
    "<br>10. Plank Side to side dips",
    "<br>11. Squats to Calf Raise",
    "<br>12. T Pushup",
    "<br>13. Donkey Kicks Right",
    "<br>14. Crab Toe Touch",
    "<br>15. Loaded Beast to Beast Reach",
    "<br>16. Negative Pushups",
    "<br>17. Plank Side to side dips",
    "<br>18. Squats to Calf Raise",
    "<br>19. Swimmers",
    "<br>20.Cat Cow Stretch",];
    
    var dList = [45,
      45,
      30,
      30,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      45,
      30];
    var restList = [0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      0,
      2,
      2];
    var links = ["workouts//walkout_plank.gif",
    "workouts//butt_kicks.gif",
    "workouts//hip_circles.gif",
    "workouts//hip_circles.gif",
    "workouts//tpushup.gif",
    "workouts//donkey_kicks_left.gif",
    "workouts//crab_toe_touch.gif",
    "workouts//loaded_beast_to beast_reach.gif",
    "workouts//negative_pushups.gif",
    "workouts//side_to_side_planks.gif",
    "workouts//squats_to_calf_raise.gif",
    "workouts//tpushup.gif",
    "workouts//donkey_kicks_right.gif",
    "workouts//crab_toe_touch.gif",
    "workouts//loaded_beast_to beast_reach.gif",
    "workouts//negative_pushups.gif",
    "workouts//side_to_side_planks.gif",
    "workouts//squats_to_calf_raise.gif",
    "workouts//swimmers.gif",
    "workouts//cat_cow_stretch.gif"
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
