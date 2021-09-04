canvas=document.getElementById('myCanvas');
ctx=canvas.getcontext("2d");
nasa_mars_images=["nasaimg1.jpg","nasaimg2.jpg","nasaimg3.jpg","mars.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
rover_width=100;
rover_height=90;
roverX=10;
roverY=10;
background_image=nasa_mars_images[random_number];
console.log("background_image="+background_image);
rover_image="rover.png";
function  add()
{
background_imagetag=new Image();
background_imagetag.onload=uploadbackground;
background_imagetag.src=background_image;
rover_imagetag=new Image();
rover_imagetag.onload=uploadrover;
rover_imagetag.src=rover_image;
}
function uploadbackground()
{
    ctx.drawImage(background_imagetag,0,0, canvas.width,canvas.height);
}
function uploadrover()
{
    ctx.drawImage(rover_imagetag,roverX,roverY,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=='37')
    {
        Left();
        console.log("left");
    }
    if(keypress=='38')
    {
        Up();
        console.log("up");
    } if(keypress=='39')
    {
    Right();
        console.log("right");
    } if(keypress=='40')
    {
        Down();
        console.log("down");
    }
}
function Up()
{
    if(roverY>=0)
    {
        roverY=roverY-10;
        console.log("when up arrow pressed,x= "+roverX+ ",y= "+roverY);
        uploadrover();
        uploadbackground();
    }
}
function Down()
{
    if(roverY<=500)
    {
        roverY=roverY+10;
        console.log("when up arrow pressed,x= "+roverX+ ",y= "+roverY);
        uploadrover();
        uploadbackground();
    }
}
function Right()
{
    if(roverX<=700)
    {
        roverX=roverX+10;
        console.log("when up arrow pressed,x= "+roverX+ ",y= "+roverY);
        uploadrover();
        uploadbackground();
    }
}
function Left()
{
    if(roverX>=0)
    {
        roverX=roverX-10;
        console.log("when up arrow pressed,x= "+roverX+ ",y= "+roverY);
        uploadrover();
        uploadbackground();
    }
}
