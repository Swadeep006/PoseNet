let capture
function setup(){
    // setup function runs only one time
    let canvas = createCanvas(600,400);
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
    canvas.style('border', '4px solid #2E4C6D')
    // to on the camera 
    capture = createCapture(VIDEO)
    capture.hide()
}
function draw(){
    //draw function runs multiple times i.e. in a loop

    //Background color of the canvas
    background(244, 225, 210)

    //Drawing shapes using p5js funcitons
    //point
    // point(200, 200)

    //line
    // line(100, 100, 200, 200)

    //triangle
    // triangle(50,60,100,200,200,300)

    //rectangle
    // rect(300,200,200,100);

    //ellipse
    //ellipse(300,300,400,200)

    // to give color,fill and stroke to a shape
    // fill(212, 165, 165)
    // stroke(255,0,0);
    // strokeWeight(2);
    // ellipse(300,300,400,200)

    // for image capturing in p5js
    // image(capture,0,0,800,600)
}