let fundo;
let olho;
let cabelo;
let boca;
let brilho;

let corOlho;
let corCabelo;
let corBoca;

//1000x600

function preload(){
  fundo = loadImage('../assets/salao.jpg');
  brilho = loadSound('../assets/brilho.mp3');
  olho = loadImage('../assets/olho.png');
  cabelo = loadImage('../assets/cabelo.png');
  boca = loadImage('../assets/boca.png');
}

function setup() {
  let x123 = 38;
  let y1 = 150;
  let y2 = 300;
  let y3 = 450;
  
  corOlho = color(0,255,0);
  corCabelo = color(127,74,0);
  corBoca = color(223,0,149);
  
  createCanvas(1000, 600);
  noStroke();
  background(fundo);
  fill(199, 241, 255);
  
  //fundo dos icones
  rect(x123-8, y1-8, 92, 92, 20);
  rect(x123-8, y2-8, 92, 92, 20);
  rect(x123-8, y3-8, 92, 92, 20);
  
  //icones
  image(olho, x123, y1, 75, 75);
  image(cabelo, x123, y2, 75, 75);
  image(boca, x123, y3, 75, 75);
  
  //botao de reset
  fill(255,60,100);
  rect(808, 38, 138, 54, 20);
  
  fill(255);
  textSize(23);
  text("RESET", 838, 73);
}

function draw() {
  
  //cabelo
  fill(corCabelo);
  circle(500, 285, 462);
  rect(269, 300, 462, 692);

  //corpo
  fill(47, 150, 214);
  circle(500, 650, 360);
  
  //rosto
  fill(247, 202, 140);
  circle(500, 300, 462);
  
  //branco do olho
  fill(255);
  circle(408, 225, 77);
  circle(592, 225, 77);
  
  //iris
  fill(corOlho);
  circle(415, 225, 54);
  circle(600, 225, 54);
  
  //pupila
  fill(0);
  circle(415, 225, 31);
  circle(600, 225, 31);

  //boca
  fill(corBoca);
  circle(500, 375, 231);
  
  fill(247, 202, 140);
  rect(380, 257, 241, 133);
  
  //nariz
  fill(237, 183, 107);
  rect(488, 300, 23, 27);
  
  //sobrancelha
  fill(corCabelo);
  rect(369, 150, 69, 15);
  rect(562, 150, 69, 15);

  //bolsa dos olhos
  fill(237, 183, 107);
  rect(387, 257, 43, 3);
  rect(571, 257, 43, 3);
}

function mouseClicked(){
  
  //botões de escolha: (som OK)
  
  //OLHO
  if(mouseX > 30 && mouseX < 122 && mouseY > 142 && mouseY < 234){
    brilho.play();
    corOlho = color(random(255), random(255), random(255));
  }
  
  //CABELO
  if(mouseX > 30 && mouseX < 122 && mouseY > 292 && mouseY < 384){
    brilho.play();
    corCabelo = color(random(255), random(255), random(255));
  }
  
  //BOCA
  if(mouseX > 30 && mouseX < 122 && mouseY > 442 && mouseY < 534){
    brilho.play();
    corBoca = color(random(180,255), random(0,80), random(50,180));
  }
  
  //RESET
  if(mouseX > 808 && mouseX < 946 &&
     mouseY > 38 && mouseY < 92){

    brilho.play();

    corOlho = color(0,255,0);
    corCabelo = color(127,74,0);
    corBoca = color(223,0,149);
  }
}