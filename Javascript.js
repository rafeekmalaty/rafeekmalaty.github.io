var myImage=document.getElementById("myphoto")

var imageArray=["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];

Var imageindex=0;

function changeimage(){
	myphoto.setAttribute("src",imageArray[imageindex]);
imageindex**;
if (imageindex>=imageArray.length){
	imageindex=0;
	}
}
var intervalHandle=setInterval(changeimage,2000);

myphoto.onclick=function() {
	clearInterval(intervalHandle);
}