  var c = document.getElementById('canvas');
  var canvas = c.getContext('2d');

  // rectangle haut de la voiture
  canvas.fillStyle = "#00a551";
  canvas.fillRect(50,250,400,100);

  // rectangle bas de la voiture
  canvas.fillStyle = "#00a551";
  canvas.fillRect(100,220,250,100);

  //roue droite
  canvas.beginPath();
  canvas.arc(150,350,40,0,Math.PI*2,true);
  canvas.fillStyle = "grey";
  canvas.fill();

  //roue gauche
  canvas.beginPath();
  canvas.arc(310,350,40,0,Math.PI*2,true);
  canvas.fillStyle = "grey";
  canvas.fill();
