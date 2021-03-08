
noseX=0;
noseY=0;
noseZ=0;
noseW=0;

function preload() {
  mustach = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
  lip_stick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup() {
  canvas = createCanvas(500,500);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-110;
    noseY = results[0].pose.nose.y+30;
    noseZ = results[0].pose.nose.x-100;
    noseW = results[0].pose.nose.y+55;
  }
}

function draw() {
  image(video, 0, 0, 500, 500);
  image(mustach, noseX, noseY, 80, 35);
  image(lip_stick, noseZ,noseW,50,20);
}

function snapshot(){    
  save('myFilterImage.png');
}


