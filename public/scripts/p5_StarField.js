class Star {
    constructor (){
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z = random(width);
        this.pz;
        this.hue = int(random(355));
    }
    update() {
        this.z = this.z - speed
        if (this.z < 1) {
            this.z = width; 
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.pz = this.z;
        }
    }
    show(){
        let sx = map(this.x/this.z, 0, 1, 0, width)
        let sy = map(this.y/this.z, 0, 1, 0, height)
        

        fill(`hsl(${this.hue}, 70%, 91%)`);
        noStroke();

        let r = map(this.z, 0, width, 16, 0)
        ellipse(sx, sy, r, r)

        let px = map(this.x/this.pz, 0, 1, 0, width)
        let py = map(this.y/this.pz, 0, 1, 0, height)

        this.pz = this.z;

        stroke(this.hue);
        line(px, py, sx, sy)
    }
}

let stars = [];
let speed;

function setup()
{
    let pad = createCanvas(windowWidth, windowHeight);
    pad.parent('canvas-layer');
    
    for (let i = 0; i < 100; i++) {
        stars[i] = new Star();
      }
}

function draw(){
    background(26, 14, 25);
    
    stroke(100);
    circle(mouseX, mouseY, 30);

    speed = map(mouseX, 0, width, 1, 5);
    
    translate(width / 2, height / 2);
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
    }
}

    // background(26, 14, 25, 40);
    // speed = 1;
    // background(0);
    // line(x1,y1,x2,y2)
    // codeBox = document.querySelector('#code').getBoundingClientRect()
    // photoBox = document.querySelector('#photos').getBoundingClientRect()
    // drawingBox = document.querySelector('#drawing').getBoundingClientRect()
    // writingBox = document.querySelector('#writing').getBoundingClientRect()
    // line(codeBox.left + (codeBox.right-codeBox.left)/2, codeBox.bottom, photoBox.left + (photoBox.right-photoBox.left)/2, photoBox.top)
    // line(codeBox.left + (codeBox.right-codeBox.left)/2, codeBox.bottom, drawingBox.left + (drawingBox.right-drawingBox.left)/2, drawingBox.top)
    // line(codeBox.left + (codeBox.right-codeBox.left)/2, codeBox.bottom, writingBox.left + (writingBox.right-writingBox.left)/2, writingBox.top)


