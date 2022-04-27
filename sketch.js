let laranjas;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

}

function draw() {

    background(0)

    if(mouseY>=height/2 && mouseX<=width/2)
    fill    (123,104,238); // azul

    else if(mouseY<height/2 && mouseX<=width/2) 
    fill    (220,20,60); // vermelho

    else if(mouseY<height/2 && mouseX>width/2) 
    fill    (0,255,127); // verde 

    else{
         noFill();
    }

    stroke(230);
    strokeWeight(2);
    circle(width / 2, height / 2, height / 4);
}
