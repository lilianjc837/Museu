let progresso = 0; 

function setup() {
  createCanvas(1000, 600);
}

function draw() {
  background(240);
  
  fill(50);
  textSize(27);
  textAlign(CENTER);
  
  text("Use o scroll do mouse para pintar o logo da Subaru", 500, 60);
  text("Progresso: " + progresso + "%", 500, 105);

  if (progresso >= 15) {
    fill(10, 30, 90);
    stroke(200);
    strokeWeight(9);
    ellipse(500, 345, 533, 270);
  }

  noStroke();
  fill(255);

  if (progresso >= 35) {

    triangle(333, 278, 315, 345, 351, 345);
    triangle(333, 413, 315, 345, 351, 345);

    triangle(258, 345, 333, 329, 333, 362);
    triangle(408, 345, 333, 329, 333, 362);

    circle(333, 345, 37);
  }

  if (progresso >= 50) {

    triangle(567, 243, 558, 270, 575, 270);
    triangle(567, 297, 558, 270, 575, 270);

    triangle(537, 270, 567, 263, 567, 278);
    triangle(597, 270, 567, 263, 567, 278);

    circle(567, 270, 15);
  }

  if (progresso >= 65) {

    triangle(633, 288, 625, 315, 642, 315);
    triangle(633, 342, 625, 315, 642, 315);

    triangle(603, 315, 633, 308, 633, 323);
    triangle(663, 315, 633, 308, 633, 323);

    circle(633, 315, 15);
  }

  if (progresso >= 80) {

    triangle(600, 348, 592, 375, 608, 375);
    triangle(600, 402, 592, 375, 608, 375);

    triangle(570, 375, 600, 368, 600, 383);
    triangle(630, 375, 600, 368, 600, 383);

    circle(600, 375, 15);
  }

  if (progresso >= 95) {

    triangle(683, 386, 675, 413, 692, 413);
    triangle(683, 440, 675, 413, 692, 413);

    triangle(653, 413, 683, 405, 683, 420);
    triangle(713, 413, 683, 405, 683, 420);

    circle(683, 413, 15);

    triangle(650, 413, 643, 435, 657, 435);
    triangle(650, 458, 643, 435, 657, 435);

    triangle(625, 435, 650, 429, 650, 441);
    triangle(675, 435, 650, 429, 650, 441);

    circle(650, 435, 12);
  }
}

function mouseWheel(event) {

  if (event.delta > 0) {
    progresso = progresso + 5;
  }

  if (event.delta < 0) {
    progresso = progresso - 5;
  }

  if (progresso < 0) {
    progresso = 0;
  }

  if (progresso > 100) {
    progresso = 100;
  }

  return false;
}