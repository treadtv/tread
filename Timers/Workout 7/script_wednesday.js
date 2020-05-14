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
    var intervalTime = 15;
    var breakTime = 10;
    var list = ["Seal Jacks",
"Pushups",
"Reverse Lunges",
"Glute Bridges",
"Jumping Jacks",
"Supermans",
"Mountain Climbers",
"Close Squats",
"Planks",
"Burpees",
"Left Glute Stretch",
"Right Glute Stretch",
"Cat Cow Stretch"];
    var wList = ["1. Seal Jacks",
"<br>2. Pushups",
"<br>3. Reverse Lunges",
"<br>4. Glute Bridges",
"<br>5. Jumping Jacks",
"<br>6. Supermans",
"<br>7. Mountain Climbers",
"<br>8. Close Squats",
"<br>9. Planks",
"<br>10. Burpees",
"<br>11. Left Glute Stretch",
"<br>12. Right Glute Stretch",
"<br>13. Cat Cow Stretch"];  
    var dList = [50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50,
50];
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
0];
    var links = ["workouts//seal_jacks.gif",
    "workouts//knee_pushup.gif",
    "workouts//reverse_lunge.gif",
    "workouts//glute_bridges.gif",
    "workouts//jumping_jacks.gif",
    "workouts//supermans.gif",
    "workouts//mountain_climbers.gif",
    "workouts//close_squats.gif",
    "workouts//plank.gif",
    "workouts//burpees.gif",
    "workouts//left_glute_stretch.gif",
    "workouts//right_glute_stretch.gif",
    "workouts//cat_cow_stretch.gif",
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
  
    startButton.onclick = function() {
    if(position==0 && started == false){
        started = true;
        seconds =dList[position];
        rest = false;
        controls[0].style.display = "none";
    } 
    if (clicked == false ){
    if(rest==true){
    changeToRest();
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
    
    function countdownSeconds() {
      //console.log("countdown",seconds,rest,clicked,rPosition);
      seconds -= 1;
      secondsSpan.innerText = seconds;
      if (seconds <= 5){
          y.play();
      }
      checkForStateChange();
    }
      
  
    function checkForStateChange() {
      if (position == list.length){
      theEnd();}
      if (seconds == 0 && rest == false) {
        if (restList[rPosition] == 1){
            console.log("yolo in here now");
            rest = true;
            seconds = breakTime+1;
            rPosition = rPosition +1;
            changeToRest();}
        if(rest==false){
        position = position+1;
        seconds = dList[position]+1;
        changeToGo(); 
        rPosition = rPosition +1;}
        }
       
      if(rest == true && seconds ==0){
         console.log("Hi");
          rest = false;
          position = position + 1;
          seconds = dList[position]+1;
          changeToGo();
      }
    }
  
    function changeToRest() {
      console.log(position,rPosition,restList[rPosition],"rest");
      $("body").css("background", "cyan");
      statusHeader.innerText = "Rest";
      nextHeader.innerText = "UP NEXT : "+ list[position+1];
      linkSRC.src = "workouts//rest_2.gif";
    }
  
    function changeToGo() {
      $("body").css("background", "pink");
      if(restList[rPosition]==2){
      $("body").css("background", "orange");
      }
    console.log(rPosition,links[position],position,restList[rPosition]);
      statusHeader.innerText = list[position];
      if(restList[rPosition] != 1){
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
  function theEnd() {
  console.log("hi");
    clearInterval(interval); 
    var completed = wList.slice(0,position+1);
    var compString = completed.join(' ');
    workList.innerHTML = compString;
    
  console.log(position,"length");
    for (i = 0; i < position+1; i++) {
    if (rPosition[i]==2)
        {
            rPosition = rPosition/2;
        }
    secondsDone += dList[i]+restList[i]*breakTime;
    calSeconds += dList[i];
  }
      secondsDone = secondsDone - seconds;
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
