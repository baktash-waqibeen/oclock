<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="js/scriptTimer.js"></script>
  <link href="css/styles.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Comfortaa&display=swap" rel="stylesheet">
  <script defer src="js/script.js"></script>
  <title>Clock</title>
</head>

<body>
  <main>
    <div class="clock">
      <div class="hand hour" data-hour-hand></div>
      <div class="hand minute" data-minute-hand></div>
      <div class="hand second" data-second-hand></div>
      <div class="number number1">1</div>
      <div class="number number2">2</div>
      <div class="number number3">3</div>
      <div class="number number4">4</div>
      <div class="number number5">5</div>
      <div class="number number6">6</div>
      <div class="number number7">7</div>
      <div class="number number8">8</div>
      <div class="number number9">9</div>
      <div class="number number10">10</div>
      <div class="number number11">11</div>
      <div class="number number12">12</div>
    </div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script
src="https://code.jquery.com/jquery-3.4.1.js"
integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
crossorigin="anonymous"></script>
<script src="alarm.js"></script>

</main>

<?php include "timer.php"; ?>

<section class="panneau">
    <section class="bloc">
    </section>
  <section class="boutons">
    <div><img class="icone" alt="alarme" src="img/alarme_b.png" id="alarme"/>Alarm</div>
  </section>
</section>

  </body>
  </html>

