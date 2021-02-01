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
        objects[0].label;
        objects[0].width;
    }
}

function draw() {
    image(img, 0, 0, 640, 420);
}