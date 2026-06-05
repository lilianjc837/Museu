let aberturaJanela = 0; 
let maxAbertura = 82;
let anguloMovimento = 0;
let farolAceso = false;

function setup() {
  createCanvas(1000, 600);
}

function draw() {
  
  if (farolAceso) {
    background(30, 40, 60);
  } else {
    background(240); 
  }

  stroke(farolAceso ? 80 : 150);
  strokeWeight(2);
  line(0, 450, width, 450);

  if (farolAceso) {
    noStroke();
    
    fill(255, 255, 150, 80); 
    triangle(125, 322, 0, 255, 0, 435);
  }

  noStroke();
  fill(220, 50, 50); 

  rect(133, 300, 700, 113, 15); 
  
  rect(267, 195, 400, 120, 20, 20, 0, 0); 

  fill(200);
  rect(108, 367, 33, 23, 5);
  rect(833, 367, 25, 23, 5);

  fill(farolAceso ? color(255, 255, 0) : color(255, 240, 150));
  ellipse(142, 322, 25, 38); 

  fill(40);
  rect(300, 217, 158, 83, 10, 0, 0, 0); 
  rect(475, 217, 158, 83, 0, 10, 0, 0);

  fill(173, 216, 230, 180); 
  rect(300, 217 + aberturaJanela, 158, 83 - aberturaJanela, 10, 0, 0, 0);
  rect(475, 217 + aberturaJanela, 158, 83 - aberturaJanela, 0, 10, 0, 0);

  stroke(30);
  strokeWeight(4);
  line(467, 217, 467, 300);

  let manivelaX = 383;
  let manivelaY = 360;
  let raioManivela = 30;

  noStroke();
  fill(80);
  circle(manivelaX, manivelaY, 25);

  let pontaX = manivelaX + cos(anguloMovimento) * raioManivela;
  let pontaY = manivelaY + sin(anguloMovimento) * raioManivela;

  stroke(120);
  strokeWeight(4);
  line(manivelaX, manivelaY, pontaX, pontaY);

  noStroke();
  fill(30);
  circle(pontaX, pontaY, 13);

  desenharRoda(267, 413, anguloMovimento); 
  desenharRoda(683, 413, anguloMovimento); 

  aberturaJanela = constrain(aberturaJanela, 0, maxAbertura);

  if (farolAceso) {
    fill(100, 255, 100);
  } else {
    fill(200);
  }

  stroke(50);
  strokeWeight(2);
  rect(33, 30, 217, 53, 8);

  noStroke();
  fill(0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(farolAceso ? "FAROL: ACESO" : "FAROL: APAGADO", 142, 57);

  fill(farolAceso ? 255 : 0);
  textSize(23);
  text("Gire a rodinha (scroll) do mouse para as janelas", width / 2, 120);
}

function desenharRoda(x, y, angulo) {
  push();
  translate(x, y);
  rotate(angulo);

  noStroke();
  fill(30);
  circle(0, 0, 108);

  fill(180);
  circle(0, 0, 58);

  stroke(100);
  strokeWeight(3);

  line(-25, 0, 25, 0);
  line(0, -25, 0, 25);

  pop();
}

function mousePressed() {
  if (mouseX > 33 && mouseX < 250 &&
      mouseY > 30 && mouseY < 83) {
    farolAceso = !farolAceso;
  }
}

function mouseWheel(event) {
  if (event.delta > 0) {
    aberturaJanela += 4;
    anguloMovimento += 0.15;
  } else if (event.delta < 0) {
    aberturaJanela -= 4;
    anguloMovimento -= 0.15;
  }

  return false;
}