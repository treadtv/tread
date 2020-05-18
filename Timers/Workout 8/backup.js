var json = {"items": [
    {
   "exerciseName": "Starfish",
   "exerciseGif": "workouts//starfish.gif",
    "reps" : "AMRAP",
    "time":"20",
    "calories" :"1"
 },
 {
   "exerciseName": "Jumping Jacks",
   "exerciseGif": "workouts//jumping_jacks.gif",
    "reps" : "AMRAP",
    "time":"20",
    "calories" :"1"
     
 },
 {
  "exerciseName": "Plank",
  "exerciseGif": "workouts//plank.gif",
    "time":"15"
 },
 {
  "exerciseName": "Arm Cs",
  "exerciseGif": "workouts//arm_c.gif",
    "reps": "20",
 },
 {
  "exerciseName": "Arm Circles",
  "exerciseGif": "workouts//arm_circles.gif",
    "reps": "20",
    "time":"40"
 },
 {
  "exerciseName": "Back Behinds",
  "exerciseGif": "workouts//back_behinds.gif",
    "reps": "20",
    "time":"40"
 },
 {
  "exerciseName": "Calves Stretch",
  "exerciseGif": "workouts//calves_stretch.gif",
    "time":"20"
 }
]};
console.log(items)
var news = document.getElementsByClassName("tinder--cards")[0];
var items = json.items;
var br,br1;
for(var i = 0; i < items.length; i++) {
    var div = document.createElement("div");
    div.className += " tinder--card";

    var img = document.createElement("img");
    img.src = items[i].exerciseGif;
    
    var h3 = document.createElement("h3");
    h3.innerHTML = items[i].exerciseName;
     br = document.createElement("br");
    br1 = document.createElement("br");
    var p = document.createElement("div");
    if(items[i].time){
    p.className +='controlls';
    var span = document.createElement("span");
    span.innerHTML = items[i].time;
    span.className += 'display-remain-time';
    p.append(span);}
    else {
        p.innerHTML = "Swipe right for next workout<br>";
    }
    
    var p1 = document.createElement("p");
    if(items[i].reps){
    p1.innerHTML = items[i].reps+" reps";}
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(br1);
    div.appendChild(p);
    div.appendChild(br);
    div.appendChild(p1);
    news.appendChild(div);
}
/*initializing content above*/

var tinderContainer = document.querySelector('.tinder');
var allCards = document.querySelectorAll('.tinder--card');
var co = document.querySelectorAll('.removed');
var pp = document.getElementById('pp');
var pp1 = document.getElementById('pp1');
var cords;
var started = false;
pp.onclick = function charge() {
  cords = document.querySelectorAll('.tinder--card:not(.removed)'); 
if(started==false){
    createButtoListener(true,1);
}
if(pp1.classList[1] == "fa-play"){
       pp1.classList.remove("fa-play"); 
    pp1.classList.remove("fa-close"); 
       pp1.classList.add("fa-pause");
for(var i = 0; i < cords.length; i++) {
  initCards();}}
    else{
       pp1.classList.remove("fa-pause"); 
    pp1.classList.remove("fa-close"); 
       pp1.classList.add("fa-play");
for(var i = 0; i < cords.length; i++) {
    cords[i].style.opacity = 0;}
    }
    
    console.log(pp1.classList);
}


/*adding countdown timer*/
    function countdownSeconds(index) {
        var news = document.getElementsByClassName("tinder--card");
        var secondsSpan = news[index].getElementsByClassName('display-remain-time')[0];
        if(seconds>=1){
        seconds = seconds - 1;}
        else{
            secondsSpan.textContent = "00:00";
            var closer = createButtoListener(true,1);
            clearInterval(time);
        }
        minute = parseInt(seconds / 60, 10);
        second = parseInt(seconds % 60, 10);
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        secondsSpan.textContent = minute + ":" + second;
}

var tinderContainer = document.querySelector('.tinder');
var allCards = document.querySelectorAll('.tinder--card');
var nope = document.getElementById('nope');
var love = document.getElementById('love');
var where = 0;
var prevRemoved;

function initCards(card, index) {
  var newCards = document.querySelectorAll('.tinder--card:not(.removed)');

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
    card.style.opacity = (10 - index) / 10;
  });
  
  tinderContainer.classList.add('loaded');
}

initCards();

allCards.forEach(function (el) {
  var hammertime = new Hammer(el);

  hammertime.on('pan', function (event) {
    el.classList.add('moving');
  });

    
    
  hammertime.on('panright', function (event) {
      where = 1;
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
    tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

    var xMulti = event.deltaX * 0.03;
    var yMulti = event.deltaY / 80;
    var rotate = xMulti * yMulti;

    event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  }); 
    
    
    hammertime.on('panleft', function (event) {
    where = 2;
      console.log("left");
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
    tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

    var xMulti = event.deltaX * 0.03;
    var yMulti = event.deltaY / 80;
    var rotate = xMulti * yMulti;

    event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  });
    
var list;
var cList;
    
    
  hammertime.on('panend', function (event) {
      started=true;
      list =  document.querySelectorAll(' .removed');
      prevRemoved = list[list.length-1];
    tinderContainer.classList.remove('tinder_love');
    tinderContainer.classList.remove('tinder_nope');
      
    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(event.deltaX) < 60 || Math.abs(event.velocityX) < 0.5;
      if(where==1){
      event.target.classList.toggle('removed', !keep);
        }
      if(where==2){
     event.target.classList.toggle('removed', !keep);
      console.log(event,"pre",prevRemoved);
      prevRemoved.classList.toggle('removed');    
      event.target.classList.toggle('removed');
      console.log(event,"yo",prevRemoved.target);
      }

    if (keep) {
      event.target.style.transform = '';
    } else {
      var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
      var toX = event.deltaX > 0 ? endX : -endX;
      var endY = Math.abs(event.velocityY) * moveOutWidth;
      var toY = event.deltaY > 0 ? endY : -endY;
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;
      event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
      initCards();
    }
  });
});

var cRemoved;


function createButtonListener(love,cwhere) {
  return function (event) {
   
    started = true;
    var cards = document.querySelectorAll('.tinder--card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;
    
    
      cList =  document.querySelectorAll(' .removed');
      cRemoved = cList[cList.length-1];
    var card = cards[0];
    if(cards.length>2){
    var card2 = cards[1];
        var parent = card2.parentNode;
// The equivalent of parent.children.indexOf(child)
var index = Array.prototype.indexOf.call(parent.children, card2);
    last = 0;
    }
    else {
        parent = card.parentNode;
// The equivalent of parent.children.indexOf(child)
        index1 = Array.prototype.indexOf.call(parent.children, parent.lastChild);
        last = 1;
    }

           if (!cards.length){
      card = cRemoved;
               pp1.classList.remove("fa-play");
               pp1.classList.add("fa-close");
    }
    if (cwhere==1){
    card.classList.add('removed');}
    if (cwhere==2){
   // console.log("yooh",cRemoved.childNodes);
    cRemoved.classList.toggle('removed');
    }

    if (love) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)'; 
        clearInterval(time);
    
        if(last!=1 && card2.childElementCount>5){
        if(card2.childNodes[3].nodeName == 'DIV' && card2.childNodes[3].classList.contains('controlls') ){
         if (card2.childNodes[3].childNodes[0].classList.contains('display-remain-time')){
        console.log(card2.childNodes[3].innerText);
             console.log(document.getElementsByClassName("tinder--card")[index].childNodes);
             console.log(json.items[index-1],index,"passsed");
        seconds = json.items[index-1].time;
        time = setInterval( function() { 
            countdownSeconds(index); }, 1000 );
      }}}
        else {
             console.log(json.items[index1-1],index1,"passsed");
             seconds = json.items[index1-1].time;
            time = setInterval( function() { 
            countdownSeconds(index1); }, 1000 )
        }
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
        console.log("kooooooo");
        if(!time){
        clearInterval(time);
        time=null;
        }
        
        if(cRemoved.childElementCount>5){
        if(cRemoved.childNodes[3].nodeName == 'DIV' && cRemoved.childNodes[3].classList.contains('controlls') ){
         if (cRemoved.childNodes[3].childNodes[0].classList.contains('display-remain-time')){
        console.log('bolo'); 
        if(last!=1){
        seconds = json.items[index-3].time;
        
        clearInterval(time);
        time = setInterval( function() {
            countdownSeconds(index-2); }, 1000 );}
        else {
        seconds = json.items[index1-2].time;
        clearInterval(time);
        time = setInterval( function() {
            countdownSeconds(index1-1); }, 1000 );
        }
            
      }}
    }
    }
    initCards();

    event.preventDefault();
  };
}

var nopeListener = createButtonListener(false,2);
var loveListener = createButtonListener(true,1);
var time, last;   
nope.addEventListener('click', nopeListener);
love.addEventListener('click', loveListener);



/*for the keyboard buttons*/
function createButtoListener(love,cwhere) {
    started = true;
    var cards = document.querySelectorAll('.tinder--card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;
    
    
      cList =  document.querySelectorAll(' .removed');
      cRemoved = cList[cList.length-1];
    var card = cards[0];
    if(cards.length>2){
    var card2 = cards[1];
        var parent = card2.parentNode;
// The equivalent of parent.children.indexOf(child)
var index = Array.prototype.indexOf.call(parent.children, card2);
    last = 0;
    }
    else {
        parent = card.parentNode;
// The equivalent of parent.children.indexOf(child)
        index1 = Array.prototype.indexOf.call(parent.children, parent.lastChild);
        last = 1;
    }

           if (!cards.length){
      card = cRemoved;
               pp1.classList.remove("fa-play");
               pp1.classList.add("fa-close");
    }
    if (cwhere==1){
    card.classList.add('removed');}
    if (cwhere==2){
   // console.log("yooh",cRemoved.childNodes);
    cRemoved.classList.toggle('removed');
    }

    if (love) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)'; 
        clearInterval(time);
    
        if(last!=1 && card2.childElementCount>5){
        if(card2.childNodes[3].nodeName == 'DIV' && card2.childNodes[3].classList.contains('controlls') ){
         if (card2.childNodes[3].childNodes[0].classList.contains('display-remain-time')){
        console.log(card2.childNodes[3].innerText);
             console.log(document.getElementsByClassName("tinder--card")[index].childNodes);
             console.log(json.items[index-1],index,"passsed");
        seconds = json.items[index-1].time;
        time = setInterval( function() { 
            countdownSeconds(index); }, 1000 );
      }}}
        else {
             console.log(json.items[index1-1],index1,"passsed");
             seconds = json.items[index1-1].time;
            time = setInterval( function() { 
            countdownSeconds(index1); }, 1000 )
        }
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
        console.log("kooooooo");
        if(!time){
        clearInterval(time);
        time=null;
        }
        
        if(cRemoved.childElementCount>5){
        if(cRemoved.childNodes[3].nodeName == 'DIV' && cRemoved.childNodes[3].classList.contains('controlls') ){
         if (cRemoved.childNodes[3].childNodes[0].classList.contains('display-remain-time')){
        console.log('bolo'); 
        if(last!=1){
        seconds = json.items[index-3].time;
        
        clearInterval(time);
        time = setInterval( function() {
            countdownSeconds(index-2); }, 1000 );}
        else {
        seconds = json.items[index1-2].time;
        clearInterval(time);
        time = setInterval( function() {
            countdownSeconds(index1-1); }, 1000 );
        }
            
      }}
    }
    }
    initCards();
}

/*space and left right for laptop*/
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 32 :
            console.log("mind yo psace");
            document.getElementById('pp1').click();
            break;
        case 37:
    createButtoListener(false,2);
            break;
        case 39:    
    if(started== false){
       pp1.classList.remove("fa-play"); 
    pp1.classList.remove("fa-close"); 
       pp1.classList.add("fa-pause");}
    createButtoListener(true,1);
    break;

    }
};

