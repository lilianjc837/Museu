let um, dois, tres, quatro, espaco, fundo;

let nave1, x = 0, y = 0;
let nave2, p = 100, q = 0;

let a, b, c, d, e, f;
let x1, x2, x3, y1, y2, y3;
let aa, bb, cc, dd, ee, ff;

let canvas;

function preload(){
  um = loadImage('../assets/um.jpg');
  dois = loadImage('../assets/dois.jpg');
  tres = loadImage('../assets/tres.jpg');
  quatro = loadImage('../assets/quatro.jpg');
  
  espaco = loadImage('../assets/espaco.jpg');
  
  nave1 = loadImage('../assets/nave1.png');
  nave2 = loadImage('../assets/nave2.png');
  
  aa = loadImage('../assets/a.png');
  bb = loadImage('../assets/b.png');
  cc = loadImage('../assets/c.png');
  dd = loadImage('../assets/d.png');
  ee = loadImage('../assets/e.png');
  ff = loadImage('../assets/f.png');

  fundo = espaco;
}

function setup() {
  canvas = createCanvas(1000, 600);
  
  //criando os sliders
  c = createSlider(50, 1000);
  a = createSlider(50, 1000);
  f = createSlider(50, 1000);
  e = createSlider(60, 600);
  d = createSlider(60, 600);
  b = createSlider(60, 600);
  
  //tamanhos
  c.size(150);
  a.size(150);
  f.size(150);
  
  e.size(150);
  d.size(150);
  b.size(150);
}

function draw() {
  background(fundo);

  let pos = canvas.position();

  //posições
  c.position(pos.x + 30, pos.y + 490);
  a.position(pos.x + 30, pos.y + 520);
  f.position(pos.x + 30, pos.y + 550);

  e.position(pos.x + 810, pos.y + 490);
  d.position(pos.x + 810, pos.y + 520);
  b.position(pos.x + 810, pos.y + 550);
  
  //adicionando o valor dos sliders nessas variáveis que definirão os eixos das imgs;
  x1 = c.value();
  x2 = a.value();
  x3 = f.value();
  y1 = e.value();
  y2 = d.value();
  y3 = b.value();
  
  //planetas antes de td pra ficarem no plano de fundo e n na frente
  
  //c
  image(aa, x1, 75, 75, 75);
  
  //a
  image(bb, x2, 225, 75, 75);
  
  //f
  image(cc, x3, 375, 75, 75);
  
  //e
  image(dd, 460, y1, 75, 75);
  
  //d
  image(ee, 615, y2, 75, 75);
  
  //b
  image(ff, 770, y3, 75, 75);
  
  //texto
  strokeWeight(3);
  textSize(30);
  stroke(255);
  text("Personalize o fundo dessa grande busca aos vilões!", 140, 55);
  
  //fundos
  
  //fundo um
  fill(0, 7, 111);
  rect(230, 490, 75, 75, 10);
  
  //fundo dois
  fill(68, 0, 139);
  rect(385, 490, 75, 75, 10);
  
  //fundo três
  fill(159, 69, 176);
  rect(540, 490, 75, 75, 10);
  
  //fundo quatro
  fill(229, 78, 208);
  rect(695, 490, 75, 75, 10);
  
  //botao de reset
  fill(255);
  rect(905, 20, 75, 40, 10);
  
  fill(0);
  textSize(15);
  text("INÍCIO", 920, 45);
  
  y = 30 * sin(x / 13) + 210;
  image(nave1, x, y, 70, 70);
  x += 1;
  
  if(x > width)
    x = -70;
  
  q = 30 * sin(p / 13) + 210;
  image(nave2, p, q, 70, 70);
  p += 1.3;
  
  if(p > width)
    p = -70;
}

function mouseClicked() {
  
  if(mouseX > 230 && mouseX < 305 && mouseY > 490 && mouseY < 565){
    fundo = um;
  }
  
  if(mouseX > 385 && mouseX < 460 && mouseY > 490 && mouseY < 565){
    fundo = dois;
  }
  
  if(mouseX > 540 && mouseX < 615 && mouseY > 490 && mouseY < 565){
    fundo = tres;
  }
  
  if(mouseX > 695 && mouseX < 770 && mouseY > 490 && mouseY < 565){
    fundo = quatro;
  }
  
  if(mouseX > 905 && mouseX < 980 && mouseY > 20 && mouseY < 60){
    fundo = espaco;
    x = 0;
    y = 0;
    p = 100;
    q = 0;
  }
}