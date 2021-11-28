rightWristX = 0;
leftWristX = 0;
difference = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    background('#FF0000');
    document.getElementById("font_size").innerHTML = "font size of the text = " + difference +" px ";
    textSize(difference);
    fill('#FFFFFF');
    text('Morris', 50, 400);
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}