let fft
let volumenObj
let temas = []
let indice = 0
let frameCountTrucho = 0
let a 
let b
let c
let rectangulotrucho
let opacity = 0
let prendido = false
let angulo = -frameCountTrucho


function preload() {
  temas[0] = loadSound('music/prontaentrega.mp3');
  temas[1] = loadSound('music/Tomo lo que encuentro.mp3');
  temas[2] = loadSound('music/Pecado para dos.mp3');
  temas[3] = loadSound('music/Destino circular.mp3');
  temas[4] = loadSound('music/lunademiel.mp3');
  temas[5] = loadSound('music/Dicha feliz.mp3');
  temas[6] = loadSound('music/Sin disfraz.mp3');
  temas[7] = loadSound('music/Lugares comunes.mp3');

  tapa = loadImage ("imagenes/VirusCover.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  volumenObj = createVolume(temas[indice])

  // Crea un objeto frecuencia //
  fft = new p5.FFT(0.9,128);

  //manejo del volumen//
  temas[indice].setVolume(1)

  temas[indice].play();

}


function draw() {
angulo = -frameCountTrucho
if (!prendido) {
intro();
}
else{
 star()
 lineas()
}
}

function createVolume(sound) {
  let vol = new p5.Amplitude()
  vol.setInput(sound)
  return vol
}

// frenar y pausar loop y música//
function keyPressed(){
  if (key == "p") {
  prendido = !prendido
  a= 205
  b= 0
  c= 101
  background(a,b,c);
  fill(a,b,c)
  } 
  
else if (key == " "){
    if (temas[indice].isPlaying()) {
      temas[indice].pause()
    } else {
      temas[indice].play()
    }
  }
    
/* NUMEROS CANCIONES */
else if (key == "1"){
  
      temas[0].pause()
      temas[1].pause()
      temas[2].pause()
      temas[3].pause()
      temas[4].pause()
      temas[5].pause()
      temas[6].pause()
      temas[7].pause()
  
      indice = 0 
      if (temas[indice].isPlaying()) {
  
        temas[indice].pause()
      } else {
        temas[indice].play()
  
      }
      background(205, 0, 101);
      a= 205
      b= 0
      c= 101
      volumenObj = createVolume(temas[indice])
      frameCountTrucho = 0
      }
  
  
else if (key == "2"){
      temas[0].pause()
      temas[2].pause()
      temas[3].pause()
      temas[4].pause()
      temas[5].pause()
      temas[6].pause()
      temas[7].pause()
      
  
  
      indice = 1
      if (temas [indice].isPlaying()){
        temas[indice].pause()
      } else {
        temas[indice].play()
      }
    background(27, 72, 199)
    a=27
    b= 72
    c= 199
    volumenObj = createVolume(temas[indice])
    frameCountTrucho = 0
    }
    
else if (key == '3'){
      temas[0].pause()
      temas[1].pause()
      temas[3].pause()
      temas[4].pause()
      temas[5].pause()
      temas[6].pause()
      temas[7].pause()
      
  
      indice = 2
      if (temas [indice].isPlaying()) {
        temas[indice].pause()
      }else {
        temas[indice].play()
      }
  
     background(255, 30, 0)
     a=255
     b= 30
     c= 0
     volumenObj = createVolume(temas[indice])
     frameCountTrucho = 0
      } 
    
else if (key == '4'){
        temas[0].pause()
        temas[1].pause()
        temas[2].pause()
        temas[4].pause()
        temas[5].pause()
        temas[6].pause()
        temas[7].pause()
        
    
  
      indice = 3
      if (temas [indice].isPlaying()) {
        temas[indice].pause()
      }else {
        temas[indice].play()
      }
  
     background(100, 200, 255)
     a=100
     b= 200
     c= 255
     volumenObj = createVolume(temas[indice])
     frameCountTrucho = 0
      } 
    
else if (key == '5'){
        temas[0].pause()
        temas[1].pause()
        temas[2].pause()
        temas[3].pause()
        temas[5].pause()
        temas[6].pause()
        temas[7].pause()
       
    
  
      indice = 4
      if (temas [indice].isPlaying()) {
        temas[indice].pause()
      }else {
        temas[indice].play()
      }
  
     background(255, 126, 0)
     a=255
     b= 126
     c= 0
     volumenObj = createVolume(temas[indice])
     frameCountTrucho = 0
      } 
    
else if (key == '6'){
        temas[0].pause()
        temas[1].pause()
        temas[2].pause()
        temas[3].pause()
        temas[4].pause()
        temas[6].pause()
        temas[7].pause()
       
    
  
      indice = 5
      if (temas [indice].isPlaying()) {
        temas[indice].pause()
      }else {
        temas[indice].play()
      }
  
     background(139, 1, 184)
     a=139
     b= 1
     c= 184
     volumenObj = createVolume(temas[indice])
     frameCountTrucho = 0
      } 
    
else if (key == '7'){
        temas[0].pause()
        temas[1].pause()
        temas[2].pause()
        temas[3].pause()
        temas[4].pause()
        temas[5].pause()
        temas[7].pause()
       
    
  
      indice = 6
      if (temas [indice].isPlaying()) {
        temas[indice].pause()
      }else {
        temas[indice].play()
      }
  
     background(31, 111, 0)
     a=31
     b= 111
     c= 0
     volumenObj = createVolume(temas[indice])
     frameCountTrucho = 0
      } 
    
else if (key == '8'){
        temas[0].pause()
        temas[1].pause()
        temas[2].pause()
        temas[3].pause()
        temas[4].pause()
        temas[5].pause()
        temas[6].pause()
        
        
    
  
      indice = 7
      if (temas [indice].isPlaying()) {
        temas[indice].pause()
      }else {
        temas[indice].play()
      }
      background (205, 0, 101)
      a= 205
      b= 0
      c= 101
      volumenObj = createVolume(temas[indice])
      frameCountTrucho = 0
  
    }
  }

  function intro(){


    if (temas[indice].isPlaying ()) {
      temas[indice].pause()
    }
      background(235,233,236)
      image(tapa, 0, 0, tapa.width, tapa.height)
      fill(0)
      textSize(48)
      textAlign(RIGHT)
      text("LOCURA", width - 60, windowHeight - 370)
      text("VIRUS", width - 60,  windowHeight - 310)
      textAlign(LEFT, BOTTOM)
      textSize(18)
      text("Prendido ------------------------ 'p'", windowWidth-300, windowHeight - 240)
      text("Pronta Entrega --------------- '1'", windowWidth-300, windowHeight - 205)
      text("Tomo lo que encuentro ----- '2'", windowWidth-300, windowHeight - 185)
      text("Pecados Para Dos ----------- '3'", windowWidth-300, windowHeight - 165)
      text("Destino Circular -------------- '4'", windowWidth-300, windowHeight - 145)
      text("Luna de Miel en la Mano --- '5'", windowWidth-300, windowHeight - 125)
      text("Dicha Feliz --------------------- '6'", windowWidth-300, windowHeight - 105)
      text("Sin Disfraz --------------------- '7'", windowWidth-300, windowHeight-85)
      text("Lugares Comunes ----------- '8'", windowWidth-300, windowHeight-65)
      text("Pausa ---------------------------- '-'", windowWidth-300, windowHeight-30)
  }

function star (){
    frameCountTrucho++
    // console.log(frameCountTrucho)
    
    let espectro = fft.analyze();
    
    push()
    //para que el for se haga en el medio de la pantalla//
    translate(width/2,height/2);
    rotate(-angulo);

    if (frameCountTrucho > 1300) {
      frameCountTrucho = 0

    }
  //console.log (espectro2)
    for (let i = 0; i< espectro.length-30; i++){
      let x = map(i, 0, espectro.length-30, 200-frameCountTrucho/3, width/3-frameCountTrucho/2);
      let diametro = map(espectro[i], 0, 255, 0.3, 4);
      noStroke()
      fill (255, 255, 0)
      ellipse(x,0,diametro);
      fill (0,0,0,5)
  
    }
    pop()
  }

function lineas() {
  fill(a,b,c,50)
  noStroke()
    rect(0,0,150,height)
    fill(a,b,c,50)
    noStroke()
    rect(width-150,0,150,height)
  //circulo()
let level = volumenObj.getLevel()

let ancho = map(level, 0, 1, 0, 400)
noFill()
stroke(255, 255, 0, 50)
strokeWeight(ancho/10)
rect(-10, -10, ancho, height+1000)
rect(width-2, -10, -ancho, height+1000)
}