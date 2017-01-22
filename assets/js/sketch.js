var img1;
var system;
var colors = [];

function setup() {
  var body = document.body, html = document.documentElement;
	canv = createCanvas($(window).width(), getCanvasHeight());
	canv.parent("background-sketch");
	frameRate(30);
	system = new ParticleSystem(createVector(width/2, 50));
	c1 = [237, 149, 170];
	c2 = [107, 179, 220];
	c3 = [198, 111, 158];
	c4 = [109, 178, 166];
	c5 = [179, 148, 206];
	c6 = [138, 159, 230];
	colors.push(c1, c2, c3, c4, c5, c6);
}

function getCanvasHeight(){
	return $(header).height() + parseInt($(header).css('padding-top'),10) + parseInt($(header).css('padding-bottom'),10) + $(main).height()+ 1*(parseInt($(main).css('padding-bottom'),10))- $(tilegrid).height();
}

function draw() {
	clear();
	if(system.particles.length < 20) system.addParticle();
	system.run();
}

function windowResized() {
	resizeCanvas($(window).width(), getCanvasHeight());
}

// A simple Particle class
var Particle = function(position) {
  //this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = position.copy();
  this.lifespan = 200.0;
  this.color = colors[Math.floor(Math.random()*colors.length)];
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  //this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 3;
};
//this.color = 'rgba('+ colors[Math.floor(Math.random()*colors.length)] +',' + this.lifespan/255 +')'
// Method to display
Particle.prototype.display = function() {
  strokeWeight(2);
  noStroke();
  fill('rgba('+ this.color + ',' + this.lifespan/255 +')');
  ellipse(this.position.x, this.position.y, 50, 50);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  var posx = random($(window).width());
  var posy = random(getCanvasHeight() - 50);
  this.particles.push(new Particle(createVector(posx, posy)));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

