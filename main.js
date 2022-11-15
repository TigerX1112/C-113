function preload() {
}

function setup() {
    canvas = createCanvas(400, 350);
    canvas.position(500, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 130, 110, 150, 150);

    fill(0, 0, 250);
    stroke(0, 0, 250);
    circle(50, 50, 80);

    circle(350, 50, 80);

    circle(50, 300, 80);

    circle(350, 300, 80);

    fill(0, 250, 0);
    stroke(0, 250, 0);
    square(90, 40, 220, 20);
    
    square(90, 290, 220, 20);

    square(40, 90, 20, 170);

    square(340, 90, 20, 170);
}