let resultado = 0;

function preload(){
  fundo = loadImage('../assets/background.png');
  som = loadSound('../assets/vozpersonagem.mp3');
  menina1 = loadImage('../assets/menina1.jpg');
  menina2 = loadImage('../assets/menina2.jpg');
  icone = loadImage('../assets/Group.png');
}

function setup() {
  createCanvas(1000, 600);
  
  xTexto = 0;
  velocidadeTexto = 3;
  
  textSize(30);
  
  noStroke();
}

function draw() {
  background(fundo);

  fill(0);
  text("Você acha que essa voz combina com quem?", xTexto, 55);

  xTexto = xTexto + velocidadeTexto;

  if (xTexto >= width - 610 || xTexto <= 0) {
    velocidadeTexto = velocidadeTexto * -1;
  }
  
  image(menina1, 155, 338, 308, 185);
  image(menina2, 538, 338, 308, 185); // x, y, lar, alt
  
  fill(resultado);
  rect(400, 105, 208, 158, 10);
  
  image(icone, 408, 113, 192, 146);
}

function mouseClicked(){
  
  if(mouseX > 400 && mouseX < 608 && mouseY > 105 && mouseY < 263){
     som.play();
  }
  
  if(mouseX > 155 && mouseX < 463 && mouseY > 338 && mouseY < 523){
     //roxo
     resultado = color(220, 0, 255);
     window.location.href = '../html/salao.html';
  }
  
  if(mouseX > 538 && mouseX < 846 && mouseY > 338 && mouseY < 523){
     //verde
     resultado = color(120, 230, 30);
     window.location.href = '../html/galaxia.html';
  }
}