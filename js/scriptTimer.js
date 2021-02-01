var startTimerButton = document.querySelector('.startTimer');
var pauseTimerButton = document.querySelector('.pauseTimer');
var timerDisplay = document.querySelector('.timer');
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;
function startTimer(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
// change 1 to 1000 above to run script every second instead of every millisecond. one other change will be needed in the getShowTime() function below for this to work. see comment there.   
 
    paused = 0;
    running = 1;
timerDisplay.style.background = "#FF0000";
    timerDisplay.style.cursor = "auto";
    timerDisplay.style.color = "yellow";
    startTimerButton.classList.add('lighter');
    pauseTimerButton.classList.remove('lighter');
    startTimerButton.style.cursor = "auto";
    pauseTimerButton.style.cursor = "pointer";
  }
}
function pauseTimer(){
  if (!difference){
    // if timer never started, don't allow pause button to do anything
  } else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;
    timerDisplay.style.background = "#A90000";
    timerDisplay.style.color = "#690000";
    timerDisplay.style.cursor = "pointer";
    startTimerButton.classList.remove('lighter');
    pauseTimerButton.classList.add('lighter');
    startTimerButton.style.cursor = "pointer";
    pauseTimerButton.style.cursor = "auto";
  } else {
// if the timer was already paused, when they click pause again, start the timer again
startTimer();
  }
}
function resetTimer(){
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
  timerDisplay.innerHTML = 'Start Timer!';
  timerDisplay.style.background = "#A90000";
  timerDisplay.style.color = "#fff";
  timerDisplay.style.cursor = "pointer";
  startTimerButton.classList.remove('lighter');
  pauseTimerButton.classList.remove('lighter');
  startTimerButton.style.cursor = "pointer";
  pauseTimerButton.style.cursor = "auto";
}
function getShowTime(){
  updatedTime = new Date().getTime();
  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference =  updatedTime - startTime;
  }
  // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);
hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
  timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
}

//SetTimer

//OCLOCK//

//ALARME//

$(document).ready(function(){


  //Action de cliquer sur le bouton "alarme"
  $("#alarme").click(function(){
    $("h1").html("Alarme");
    $(".bloc").empty();
  
     //Formulaire alarme
     $(".bloc").append("<div id='alarme'></div>");
     $(".bloc").append("<div id='table'><table id='alarm_table'></table></div>");
     $('#alarm_table').before("<h2>Alarme enregistrée</h2>");
     $('#alarm_table').append('<tr><th>Heure</th><th>Description</th></tr><br/>');
     var formalarme = '<div id="minuteur_form"><input type="time" name="time" id="time"><input type="desc" name="desc" id="desc"><button type="submit" name="alarm_set" id="alarm_set">Valider</button></div>';
     $("#alarme").html(formalarme);
     
   
    function alarm(target,desc){
    
      var today = new Date();
  
      deux_chiffres = function(element){
        if(element < 10){
          return element = "0" + element;
        }
        else{
          return element;
        }
      }
  
      //Pour l'affichage de la variable "rendu"
      var h =deux_chiffres(today.getHours());
      var m =deux_chiffres(today.getMinutes());
      var s =deux_chiffres(today.getSeconds());
      var rendu = h + ":" + m + ":" + s;
  
      //Si l'heure actuelle est égale à celle de l'alarme
      if(target === rendu){
        alert(desc);
        return "1";
      }
    }
  
    //Quand on définit une alarme
    $("#alarm_set").click(function (){
  
    //On récupère les données du formulaire
    //Par défaut, on ajoute 00 pour les secondes
    var time = $('#time').val()+":00";
    var desc = $('#desc').val();
  
    //Appel de la fonction qui définit l'alamre
    const timer=setInterval(() => {
      const sonnerie=alarm(time,desc);
      //Quand l'alarme sonne 
      if(sonnerie==="1")
      {
        //On arrête l'alarme
        clearInterval(timer);
        //On supprime l'alarme du tableau
        var alarme=$('tr').children().attr("innerHTML",time);
  
        alarme.remove();
      }
    }, 500);
  
  
    //On enregistre l'alarme dans un tableau
    var array=[];
    array.push([time,desc]);
  
    //On vide le tableau puis on le réemplit
    $('#alarm_table').empty();
  
  
    $.each(array, function (index, value) 
      {
        $('#alarm_table').append('<tr id=_'+index+'><td>' + value[0] + '</td><td>' + value[1] +'</td></tr>');
      });
    });
  
  });
  
  });
  
  