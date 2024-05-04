// let header = document.querySelector('#header')
function setup()
{
    // header.innerHTML = "test";
    let pad = createCanvas(windowWidth, windowHeight);
    pad.parent('canvas-layer');
}
function draw(){
    circle(mouseX, mouseY, 30);
    background(26, 14, 25, 40);
    fill(244);
    stroke(0);
    
}