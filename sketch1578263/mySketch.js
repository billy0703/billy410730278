var inputElement

var txts = []

var colors = "064789-427aa1-ebf2fa-679436-a5be00".split("-").map(a=>"#"+a)

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(100);
 inputElement =createInput("")
  inputElement.position(50,50)
 inputElement.style("font-size",'25px')
 inputElement.input(userInput)
 
}

function userInput(){
 
 txts.push({
  text: this.value(),
  x: width/2,
  y:height/2,
  vx:random(-3,3),
  vy: 1,
  color:random(colors)
 })
  this.value('')
 // print(txts)
}

function draw() {
 background(100);
 fill(255)
 textSize(50)
 for(var i=0;i<txts.length;i++){
  let txt = txts[i]
  fill(txt.color)
   text(txt.text , txt.x , txt.y)
  txt.x = txt.x + txt.vx
  txt.y = txt.y + txt.vy
  txt.vy = txt.vy + 0.1
  txt.vx = txt.vx*0.995
    txt.vy = txt.vy*0.995

  if(txt.y>height){
   txt.vy = -abs(txt.vy)
  }
   
   
 }
  
}