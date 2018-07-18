var c = document.getElementById('canvasba');
console.log(document.getElementById('canvasba'));
var ctx = c.getContext('2d');
//rectangle de base pour la maison
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(250,100);
ctx.lineTo(250,250);
ctx.lineTo(100,250);
ctx.closePath();
ctx.fillStyle = "lightblue";
ctx.fill();
//triangle pour la maison
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(175,50);
ctx.lineTo(250,100);
ctx.lineTo(100,100)
ctx.closePath();
ctx.fillStyle = "#d7823e";
ctx.fill();
//fenetre 1
ctx.beginPath();
ctx.moveTo(110,110);
ctx.lineTo(150,110);
ctx.lineTo(150,150);
ctx.lineTo(110,150);
ctx.closePath();
ctx.fillStyle = "silver";
ctx.fill();
//fenetre 2
ctx.beginPath();
ctx.moveTo(200,110);
ctx.lineTo(240,110);
ctx.lineTo(240,150);
ctx.lineTo(200,150);
ctx.closePath();
ctx.fillStyle = "silver";
ctx.fill();
//porte de la maison
ctx.beginPath();
ctx.moveTo(150,190);
ctx.lineTo(200,190);
ctx.lineTo(200,250);
ctx.lineTo(150,250);
ctx.closePath();
ctx.fillStyle = "silver";
ctx.fill();
