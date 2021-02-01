<head>
  <title>Javascript Stopwatch</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
  <link rel="stylesheet" href="css/timerStyle.css">
  <link rel="stylesheet" href="style.css">

</head>
<div id="timerContainer">
<div class="timer" onclick="startTimer()">Start Timer!</div>
<div class="startTimer reset" onclick="startTimer()" >
    <i class="fas fa-play">Start</i>
  </div>
<div class="pauseTimer reset" onclick="pauseTimer()" >
    <i class="fas fa-pause">Pause</i>
  </div>
<div class="resetTimer reset" onclick="resetTimer()">Reset</div>
</div>
<script type="text/javascript" src="js/scriptTimer.js"></script>
