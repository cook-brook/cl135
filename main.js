video="";
status="";
objects=[];
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

    if (status!=""){
        objectDetector.detect(video,gotResults);
        for(i=0; i<objects.length;i++){
            document.getElementById("status").innerHTML="Status: Video detected";
            document.getElementById("number_of_objects").innerHTML="Number of object detected are "+objects.length;

            fill("#FFC0CB");
            percentage=floor(objects[i].confidence*100);
            text(objects[i].label+" "+ percentage+"%",objects[i].x,objects[i].y);
            noFill();
            rect(objects[i].width,objects[i].height,objects[i].x,objects[i].y);
        }
    }
}
function gotResults(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects=results;
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
