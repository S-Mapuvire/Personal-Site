function setup()
{
    let pad = createCanvas(windowWidth, windowHeight);
    pad.parent('canvas-layer');
}

function draw(){
    background(26, 14, 25);
    
    stroke(100);
    circle(mouseX, mouseY, 30);
}