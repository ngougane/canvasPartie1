  var c = document.getElementById('canvas');
  var canvas = c.getContext('2d');
  // NOTE:
   //tracé du toit de la maison
    canvas.beginPath();      // Début du chemin
    canvas.moveTo(200,20);   // Le tracé part du point 200 en x,20 en y
    canvas.lineTo(100,100);  // Un segment est ajouté vers 110 x, 50  en y
    canvas.lineTo(300,100);  // Un segment est ajouté vers 290 x,50 y
    canvas.lineTo(200,20);  // Un segment est ajouté vers 200 x,20 y
    canvas.fillStyle = "#d7823e"; // Définition de la couleur de remplissage
    canvas.fill();           // Remplissage du dernier chemin tracé
    canvas.closePath();      // Fermeture du chemin


    // tracé du corps de la maison
    canvas.beginPath();
    canvas.moveTo(100,100);  // Le tracé part du point 100 en x,100 en y
    canvas.lineTo(100,350);  // Un segment est ajouté vers 100 x, 350  en y
    canvas.lineTo(300,350);  // Un segment est ajouté vers 100 x, 450  en y
    canvas.lineTo(300,100);  // Le tracé part du point 450 en x,100 en y
    canvas.lineTo(100,100);  // Le tracé part du point 100 en x,100 en y
    canvas.fillStyle = "#a1d8e6";
    canvas.fill();
    canvas.closePath();


    // tracé de la porte
    canvas.beginPath();
    canvas.moveTo(180,310);  // Le tracé part du point 180 en x,310 en y
    canvas.lineTo(180,350);  // Un segment est ajouté vers 180 x, 350  en y
    canvas.lineTo(220,350);  // Un segment est ajouté vers 220 x, 350  en y
    canvas.lineTo(220,310);  // Le tracé part du point 220 en x,310 en y
    canvas.lineTo(180,310);  // Le tracé part du point 180 en x,310 en y
    canvas.fillStyle = "#c9c9c9";
    canvas.fill();
    canvas.closePath();


    // tracé de la fenêtre de droite
    canvas.beginPath();
    canvas.moveTo(110,130);  // Le tracé part du point 100 en x,100 en y
    canvas.lineTo(110,150);  // Un segment est ajouté vers 100 x, 350  en y
    canvas.lineTo(130,150);  // Un segment est ajouté vers 100 x, 450  en y
    canvas.lineTo(130,130);  // Le tracé part du point 450 en x,100 en y
    canvas.lineTo(110,130);  // Le tracé part du point 100 en x,100 en y
    canvas.fillStyle = "#c9c9c9";
    canvas.fill();
    canvas.closePath();

    // tracé de la fenêtre de gauche
    canvas.beginPath();
    canvas.moveTo(260,130);  // Le tracé part du point 100 en x,100 en y
    canvas.lineTo(260,150);  // Un segment est ajouté vers 100 x, 350  en y
    canvas.lineTo(280,150);  // Un segment est ajouté vers 100 x, 450  en y
    canvas.lineTo(280,130);  // Le tracé part du point 450 en x,100 en y
    canvas.lineTo(260,130);  // Le tracé part du point 100 en x,100 en y
    canvas.fillStyle = "#c9c9c9";
    canvas.fill();
    canvas.closePath();
