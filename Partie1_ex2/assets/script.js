  var c = document.getElementById('canvas');
  var canvas = c.getContext('2d');
  // NOTE:

  //tracé du toit de la maison
   canvas.beginPath(150,20);      // Début du chemin
   canvas.moveTo(50,100);   // Le tracé part du point 200 en x,20 en y
   canvas.lineTo(250,100);  // Un segment est ajouté vers 290 x,50 y
   canvas.lineTo(150,20);  // Un segment est ajouté vers 200 x,20 y
   canvas.fillStyle = "#d7823e"; // Définition de la couleur de remplissage
   canvas.fill();           // Remplissage du dernier chemin tracé
   canvas.closePath();      // Fermeture du chemin

  // corps de la maison
  canvas.fillStyle = "#a1d8e6";     // attribut de la couleur
  canvas.fillRect(50,100,200,200); // trace un carré

  // porte
  canvas.fillStyle = "#c9c9c9";     // attribut de la couleur
  canvas.fillRect(130,250,40,50); // trace un rectangle

  // fenêtre droite
  canvas.fillStyle = "#c9c9c9";     // attribut de la couleur
  canvas.fillRect(180,150,40,40); // trace un carré

  // fenêtre gauche
  canvas.fillStyle = "#c9c9c9";     // attribut de la couleur
  canvas.fillRect(80,150,40,40); // trace un carré
