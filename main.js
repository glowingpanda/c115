lipsX = 0;
lipsY = 0;

function preload()
{
lip_stick = loadImage('https://i.postimg.cc/gjhbDQYq/lips.png');
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        lipsX = results[0].pose.lips.x-10;
        lipsY = results[0].pose.lips.y-10;
        console.log("lips x = " + results[0].pose.lips.x);
        console.log("lips y = " + results[0].pose.lips.y);
    }
}

function modelLoaded()
{
    console.log("PoseNet is initialized");
}

function draw()
{
    image(video, 0, 0, 300, 300);

    image(lip_stick, lipsX, lipsY, 30, 30);
}

function take_snapshot()
{
    save("Myfilterimage.png");
}