function setup() {
    createCanvas(400, 400);
    background("grey");
  }
  
  function draw() {
    stroke("black");
    fill("red");
    
    if(mouseIsPressed){
    rect(mouseX, mouseY, 20, 20);
  }
  }