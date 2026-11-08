
tWidth = 80;
gap = 50;
startX = 0;
startY = 100;
hOffset = 80;
fadeStep = 0.05;
noiseScale = 0.03;
tris = [];
// colorLight = '#00b9be';
colorDark = '#3c3a4d'

// colorDark = window.getComputedStyle(document.body).getPropertyValue('--background-color');
colorLight = window.getComputedStyle(document.body).getPropertyValue('--background-highlight-color');

class tritri {
  constructor(w, xPos, yPos, orientation) {
    this.w = w;
    this.h = (w*sqrt(3))/2;
    this.x = xPos;
    this.y = yPos;
    this.orientation = orientation;
    this.hovered = false;
    this.radius = this.w * (sqrt(3)/6)*3;
    this.fadeVal = 0;
    this.firstDraw = true;

  }
  isOver() {

  // Scale the input coordinate.
  let nt = noiseScale * frameCount;
  let nt2 = noiseScale*0.3 * frameCount;
  // Compute the noise values.
    let noiseX = width * noise(nt);
    let noiseY = height * noise(nt + 10000);
    let noiseX2 = width * noise(nt2);
    let noiseY2 = height * noise(nt2 + 10000);
    // let noiseX = width * noise(noiseSpeed * frameCount);
    // let noiseY = height * noise(noiseSpeed * frameCount + 10000);
    if(
      (mouseX > this.x - this.radius &&
      mouseX < this.x + this.radius &&
      mouseY > this.y - this.radius &&
      mouseY < this.y + this.radius) ||
      (noiseX > this.x - this.radius &&
      noiseX < this.x + this.radius &&
      noiseY > this.y - this.radius &&
      noiseY < this.y + this.radius) ||
      (noiseX2 > this.x - this.radius &&
      noiseX2 < this.x + this.radius &&
      noiseY2 > this.y - this.radius &&
      noiseY2 < this.y + this.radius)
    ) {
      this.hovered = true;
    } else {
      this.hovered = false;
    }
  }
  draw() {
    if(!this.firstDraw && !this.hovered && this.fadeVal == 0) {
      return;
    }
    let colorA = color(colorLight);
    let colorB = color(colorDark);
    if(this.hovered) {
      fill(colorLight);
      this.fadeVal = 1;
    } else {
      if(this.fadeVal > 0) {
          fill(lerpColor(colorB, colorA, this.fadeVal));
      } else {
            if(this.firstDraw) {
              fill(colorDark);
              this.firstDraw = false;
            } else {
              fill(colorDark);
            }
      }
      if(this.fadeVal > 0) {
        this.fadeVal -= fadeStep;
      } else {
        this.fadeVal = 0;
      }
    }
    if(this.orientation == true){
        triangle(this.x-(this.w/2), this.y+(this.h/2), this.x, this.y-(this.h/2), this.x+(this.w/2), this.y+(this.h/2));
    } else if(this.orientation == false) {
        triangle(this.x-(this.w/2), this.y-(this.h/2), this.x, this.y+(this.h/2), this.x+(this.w/2), this.y-(this.h/2));
    }
  }
}

function initTris() {
  noStroke();
    background("#46425e");
    for(col = 0; col < hOffset; col++){
        for(row = 0; row < width/(tWidth/2); row++) {
          let orientation = (row%2 == 0);
          if(col%2 == false) {
            orientation = !orientation;
          }
          let r = Math.floor(Math.random() * 10);
            tris.push(new tritri(tWidth, (row*gap)+startX, (col*hOffset)+startY, orientation));
        }
      }
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  tris = [];
  initTris();
}

function setup() {
  frameRate(24);
  colorMode(HSB);
  canv = createCanvas(window.innerWidth, window.innerHeight);
	canv.parent("background-sketch");
  initTris();
}

function draw() {
  // colorDark = window.getComputedStyle(document.body).getPropertyValue('--background-color');
  colorLight = window.getComputedStyle(document.body).getPropertyValue('--background-highlight-color');
  for(x = 0; x < tris.length; x++) {
    tris[x].isOver();
    tris[x].draw();
  }
}
