
$(document).ready(function(){


$("#alarme").click(function(){
  $("h1").html("Alarme");
  $(".bloc").empty();

   $(".bloc").append("<div id='alarme'></div>");
   $(".bloc").append("<div id='table'><table id='alarm_table'></table></div>");
   $('#alarm_table').before("<h2>Recorded alarm</h2>");
   $('#alarm_table').append('<tr><th>Hour</th><th>Description</th></tr><br/>');
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

    var h =deux_chiffres(today.getHours());
    var m =deux_chiffres(today.getMinutes());
    var s =deux_chiffres(today.getSeconds());
    var rendu = h + ":" + m + ":" + s;

    if(target === rendu){
      alert(desc);
      return "1";
    }
  }

  $("#alarm_set").click(function (){

  var time = $('#time').val()+":00";
  var desc = $('#desc').val();

  const timer=setInterval(() => {
    const sonnerie=alarm(time,desc);
    //Quand l'alarme sonne 
    if(sonnerie==="1")
    {
      clearInterval(timer);
      var alarme=$('tr').children().attr("innerHTML",time);

      alarme.remove();
    }
  }, 500);


  var array=[];
  array.push([time,desc]);

  $('#alarm_table').empty();


  $.each(array, function (index, value) 
    {
      $('#alarm_table').append('<tr id=_'+index+'><td>' + value[0] + '</td><td>' + value[1] +'</td></tr>');
    });
  });

});

});

