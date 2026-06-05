let fundo;
let som;
let som2;
let monet;
let magritte;

let x1 = 350;
let x2 = 550;
let y1e2 = 500;
  
//1300x800

function preload(){
  fundo = loadImage('../assets/museu.jpeg');
  monet = loadImage('../assets/nifeias.jpg');
  magritte = loadImage('../assets/magritte.jpg');
  som2 = loadSound('../assets/vozbrmagritte.mp3');
  som = loadSound('../assets/vozbrmonet.mp3');
}

function setup() {
  createCanvas(1000, 600);
  noStroke();
}

function draw() {
  background(fundo);
  
  //BOTÃO MONET ZOOM
  let larguraBotaoMonet = 100;
  let alturaBotaoMonet = 80;

  if(mouseX > x1 && mouseX < x1 + 100 && mouseY > y1e2 && mouseY < y1e2 + 80){
    larguraBotaoMonet = 120;
    alturaBotaoMonet = 100;
    fill(255, 202, 59);
  }
  else{
    fill(255, 214, 102);
  }
  
  rect(x1 - (larguraBotaoMonet - 100)/2, y1e2 - (alturaBotaoMonet - 80)/2, larguraBotaoMonet, alturaBotaoMonet, 20);

  //BOTÃO MAGRITTE ZOOM
  let larguraBotaoMagritte = 100;
  let alturaBotaoMagritte = 80;

  if(mouseX > x2 && mouseX < x2 + 100 && mouseY > y1e2 && mouseY < y1e2 + 80){
    larguraBotaoMagritte = 120;
    alturaBotaoMagritte = 100;
    fill(255, 202, 59);
  }
  else{
    fill(255, 214, 102);
  }

  rect(x2 - (larguraBotaoMagritte - 100)/2, y1e2 - (alturaBotaoMagritte - 80)/2, larguraBotaoMagritte, alturaBotaoMagritte, 20);
  
  fill(255);
  textSize(30);
  
  text("Qual o mais bonito?", 380, 470);
  
  text("Claude Monet", 130, 430);
  text("René Magritte", 700, 430);
  
  textSize(20);
  fill(0);
  strokeWeight(5);
  
  text("Monet", x1+23, y1e2+47);
  text("Magritte", x2+14, y1e2+47);
  
  //MONET ZOOM
  let tamanhoMonet = 300;
  if(mouseX > 70 && mouseX < 370 && mouseY > 80 && mouseY < 380){
    tamanhoMonet = 400;
  }
  else{
    tamanhoMonet = 300;
  }
  
  image(monet, 70 - (tamanhoMonet - 300)/2, 80 - (tamanhoMonet - 300)/2, tamanhoMonet, tamanhoMonet);
  
  //MAGRITTE ZOOM
  let tamanhoMagritte = 300;
  if(mouseX > 630 && mouseX < 930 && mouseY > 80 && mouseY < 380){
    tamanhoMagritte = 400;
  }
  else{
    tamanhoMagritte = 300;
  }
  
  image(magritte, 630 - (tamanhoMagritte - 300)/2, 80 - (tamanhoMagritte - 300)/2, tamanhoMagritte, tamanhoMagritte);  
}

function mouseClicked(){
  
  //imagens
  if(mouseX > 20 && mouseX < 420 && mouseY > 30 && mouseY < 430){
     som.play();
  }
  
  if(mouseX > 580 && mouseX < 980 && mouseY > 30 && mouseY < 430){
     som2.play();
  }
  
  //botões de escolha
  if(mouseX > 350 && mouseX < 450 && mouseY > 500 && mouseY < 580){
     //está funcionando, ir para a opção1
     window.location.href = '../html/volanteroda.html';
  }
  
  if(mouseX > 550 && mouseX < 650 && mouseY > 500 && mouseY < 580){
     //está funcionando, ir para a opção2
     window.location.href = '../html/cyberchase.html';
  }
}