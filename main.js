noseX=0;
noseY=0;
rightWristX=0;
difference=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);
    video.position(100,150);
    
    canvas=createCanvas(550,550);
    canvas.position(770, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#4a32a8');

    document.getElementById("square_side").innerHTML = "Width and Height of the square will be = "+difference+"px";
    fill('#fcffcf');
    stroke('#fff799')
    square(noseX, noseY, difference);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = "+noseX+" noseY = "+noseY);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference= floor(leftWristX - rightWristX);

        console.log("rightWristX = "+rightWristX+" leftWristX = "+leftWristX+" difference = "+difference);

    }
}