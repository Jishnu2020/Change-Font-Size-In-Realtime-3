leftWristX = 0;
rightWristX = 0;
difference = 0;
noseX = 0;
noseY = 0;
function setup() {
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 450);
canvas.position(650, 100);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', getPoses);
}
function draw() {
background('#969A97');
document.getElementById("result").innerHTML = "The Size Of The Font Will Be = " + difference + "px";
fill(255, 0, 0);
textSize(difference);
text('Jishnu', noseX, noseY);
}
function modelLoaded() {
console.log('PoseNet is initialized!');
}
function getPoses(results) {
if(results.length > 0) {
console.log(results);
leftWristX = floor(results[0].pose.leftWrist.x);
rightWristX = floor(results[0].pose.rightWrist.x);
difference = floor(leftWristX - rightWristX);
noseX = floor(results[0].pose.nose.x);
noseY = floor(results[0].pose.nose.y);
console.log("Left Wrist X = " + leftWristX + ", Right Wrist X = " + rightWristX + ", difference = " + difference + ", Nose X = " + noseX + ", Nose Y = " + noseY);
}
}