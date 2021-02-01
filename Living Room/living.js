img = "";
status = "";
objects = [];

function back_home() {
    window.location = "../index.html";
}

function preload() {
    img = loadImage('living_room.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : Detecting Object";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(results, error) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(img, 0, 0, 640, 420);

    if(status != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "STATUS : Objects Detected";
            document.getElementById("number_of_objects").innerHTML = objects.length + "objects(s) detected."; 
            console.log("DRAWING");

            fill(r, g, b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r, g, b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}