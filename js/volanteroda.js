let anguloRoda = 0;     
let anguloVolante = 0; 

function setup() {
  createCanvas(1000, 600);
  angleMode(DEGREES); 
}

function draw() {
  background(220); 
  stroke(180);
  strokeWeight(2);
  line(width / 2, 0, width / 2, height);
  fill(50);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);
  text("Roda de Carro", width / 4, 50);
  
  push();
  translate(width / 4, height / 2); 
  rotate(anguloRoda);
  fill(35); 
  stroke(20); 
  strokeWeight(2);
  circle(0, 0, 160);
  stroke(50);
  strokeWeight(3);
  noFill();
  circle(0, 0, 145);
  stroke(100); 
  strokeWeight(3);
  fill(180); 
  circle(0, 0, 115);
  fill(60);
  noStroke();
  circle(0, 0, 95);
  stroke(210); 
  strokeWeight(6);
  for (let i = 0; i < 5; i++) {
    rotate(72); 
    line(0, 0, 0, -45); 
    
    fill(180);
    noStroke();
    circle(0, -42, 8);
    stroke(210);
    strokeWeight(6);
  }
  stroke(120);
  strokeWeight(2);
  fill(150);
  circle(0, 0, 30); 
  
  fill(220);
  noStroke();
  circle(0, 0, 10);
  pop();
  anguloRoda += 2.5;
  fill(50);
  noStroke();
  text("Volante Tradicional\n(Mova o mouse na horizontal)", (width / 4) * 3, 50);
  
  anguloVolante = map(mouseX, 0, width, -180, 180);
  
  push();
  translate((width / 4) * 3, height / 2); 
  rotate(anguloVolante);
  
  stroke(50);
  strokeWeight(15);
  noFill();
  circle(0, 0, 150); 
  
  strokeWeight(8);
  line(0, 0, 0, 75);   
  line(0, 0, -75, 0);  
  line(0, 0, 75, 0);   
  
  fill(50);
  circle(0, 0, 30);    
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
    if(mouseX < 500){
        window.location.href = '../html/subaru.html';
    }
    else{
        window.location.href = '../html/carro.html';
    }
}