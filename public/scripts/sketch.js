function setup()
{
    // fix so height and width are dynamic - windowWidth only loads once
    let pad = createCanvas(windowWidth, 600);
    pad.parent('canvas-layer');
    console.log(document.querySelector('main').style)
}
function draw(){
    circle(mouseX, mouseY, 30);
    background(26, 14, 25, 40);
    fill(244);
    stroke(0);
}