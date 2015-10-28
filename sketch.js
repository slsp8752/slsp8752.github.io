
var R = [255, 196, 78, 199, 85];
var G = [107, 77, 205, 244, 98];
var B = [107, 88, 196, 100, 112];
rgb_index = 0;
var isOverButton = 0;
var pageheight;

function setup() {
    var body = document.body, html = document.documentElement;

    pageheight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    canv = createCanvas(windowWidth,pageheight+50);
    canv.parent("bgCanvas");
}

function draw() {
    var mx = mouseX;
    var my = mouseY;
    var w = width;
    background(255);

    for(var i = 0; i < windowWidth; i+=10){
        for (var j = 0; j < pageheight; j += 10) {
            var d = dist(mouseX, mouseY, i, j);
            trans = map(d, 0, w, 0, 255);
            size = map(d, 0, w, 10, 55);
            stroke(255);
            fill(R[rgb_index],G[rgb_index],B[rgb_index],trans);
            rect(i, j, size, size);
        }
        
    }
    fill(R[rgb_index],G[rgb_index],B[rgb_index],255);
    fill(255, 107, 107);
    but1 = ellipse(windowWidth-50, 100, 26, 26);
    fill(196, 77, 88);
    but2 = ellipse(windowWidth-80, 100, 26, 26);
    fill(78, 205, 196);
    but3 = ellipse(windowWidth-110, 100, 26, 26);
    fill(199, 244, 100);
    but4 = ellipse(windowWidth-140, 100, 26, 26);
    fill(85, 98, 112);
    but5 = ellipse(windowWidth-170, 100, 26, 26);

    var but1d = dist(mouseX, mouseY, windowWidth-50, 100);
    var but2d = dist(mouseX, mouseY, windowWidth-80, 100);
    var but3d = dist(mouseX, mouseY, windowWidth-110, 100);
    var but4d = dist(mouseX, mouseY, windowWidth-140, 100);
    var but5d = dist(mouseX, mouseY, windowWidth-170, 100);

    if(but1d < 13){
        isOverButton = 0;
    }
    if(but2d < 13){
        isOverButton = 1;
    }
    if(but3d < 13){
        isOverButton = 2;
    }
    if(but4d < 13){
        isOverButton = 3;
    }
    if(but5d < 13){
        isOverButton = 4;
    }
            

}

function mousePressed(){
    rgb_index = isOverButton;
}

