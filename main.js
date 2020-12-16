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
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}