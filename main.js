video="";
status="";
function preload(){
    video=createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    canvas.position(550,250)
}
function draw(){
    image(video,0,0,480,380);
}
function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Dedecting video";
}
function modelLoaded(){
    console.log("model is loaded");
    status=true;
    video.loop();
    video.volume(0);
    video.speed(1);
}
