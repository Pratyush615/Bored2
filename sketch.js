let name = 'Click button for randomization';
let InsOrCom = '';
let button;
let rand = 0;
let rand2 = 0;
let is = ''
function preload(){
  buttonImage = loadImage("Button.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  text(name, windowWidth/2,windowHeight/2)
  button = createSprite(windowWidth/2,windowHeight/1.75,100,100)
  button.addImage(buttonImage)
  alert('i was bored so I made this  ¯\_(ツ)_/¯')
}
function draw(){
  background("#404040")
  if(mouseX>285&&mouseX<390&&mouseY>240&&mouseY<370){
    cursor(HAND)
  }
  else{
    cursor(ARROW)
  }
    textSize(25)
  fill("white")
    text(name + " "+is+" "+InsOrCom, windowWidth/2.5,windowHeight/2.5)
  drawSprites();
}
function mouseClicked() {
if(mouseX>285&&mouseX<390&&mouseY>250&&mouseY<380){
    rand=Math.round(random(1,5))
    rand2 = Math.round(random(1,10))
    is = "is"

  }
  if(rand == 1){
    name = 'Kevin'
  }
  if(rand == 2){
    name = "Quinn"
  }
  if(rand == 3){
    name = "Tyler"
  }
  if(rand == 4){
    name = "Mia"
  }
  if(rand == 5){
    name = "Pratyush"
  }
////////////////
  if(rand2 == 1){
    InsOrCom ="Fat"
  }
  if(rand2 == 2){
    InsOrCom ="Cool"
  }
  if(rand2 == 3){
    InsOrCom ="Ugly"
  }
  if(rand2 == 4){
    InsOrCom ="Amazing"
  }
  if(rand2 == 5){
    InsOrCom ="a Rat"
  }
  if(rand2 == 6){
    InsOrCom ="Spectacular"
  }
  if(rand2 == 7){
    InsOrCom ="Fugly"
  }
  if(rand2 == 8){
    InsOrCom ="Good at Videogames"
  }
  if(rand2 == 9){
    InsOrCom ="Terrible at Videogames"
  }
  if(rand2 == 10){
    InsOrCom ="Cooler than absolute zero"
  }
}