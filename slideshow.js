
var imgIndex = 0;

function resizeCont(){
//	document.getElementById("slideshow-container").style.width = document.getElementsByClassName("slide-Image")[0].width.toString() + "px";
	document.getElementById("slideshow-container").style.height = document.getElementsByClassName("slide-Image")[0].height.toString() + "px";
	var containerRect = document.getElementById("slideshow-container").getBoundingClientRect();
	for(var i = 0; i < document.getElementsByClassName("slide-Image").length; i ++){
		document.getElementsByClassName("slide-Image")[i].style.top = containerRect.top.toString() + "px";
	}
	document.getElementsByClassName("slide-Image")[imgIndex].style.left = containerRect.left.toString() + "px";
	var dots = document.getElementById("div-dots");
	var arrowLeft = document.getElementById("arrow-left");
	var arrowRight = document.getElementById("arrow-right");
	var Text = document.getElementById("text");
	dots.style.top = (containerRect.top + containerRect.height - dots.getBoundingClientRect().height - 10).toString() + "px";
	dots.style.left = (containerRect.left + containerRect.width/2 - dots.getBoundingClientRect().width/2).toString() + "px";
	arrowLeft.style.top = (containerRect.top + containerRect.height/2 - arrowLeft.getBoundingClientRect().height/2).toString() + "px";
	arrowRight.style.top = (containerRect.top + containerRect.height/2 - arrowRight.getBoundingClientRect().height/2).toString() + "px";
	Text.style.top = (containerRect.top + containerRect.height - Text.getBoundingClientRect().height - 30).toString() + "px";
}

function showImage(newIndex){
	if(newIndex >= document.getElementsByClassName("slide-Image").length){
		newIndex = 0;
	}else if(newIndex < 0){
		newIndex = document.getElementsByClassName("slide-Image").length-1;
	}
	while(newIndex != imgIndex){
		if(newIndex > imgIndex){
			nextImage2();
		}else{
			lastImage2();
		}
	}
	var imgText = ["Contact Us","Computational Thinking","Creative Designs"];
	document.getElementById("text").innerHTML = imgText[newIndex];
	document.getElementById("numbertext").innerHTML = (newIndex + 1).toString() + "/3";
	if (newIndex == 0){
		document.getElementById("dot1").style.backgroundColor = "white";
	}else{
		document.getElementById("dot1").style.backgroundColor = "";
	}
	if (newIndex == 1){
		document.getElementById("dot2").style.backgroundColor = "white";
	}else{
		document.getElementById("dot2").style.backgroundColor = "";
	}
	if (newIndex == 2){
		document.getElementById("dot3").style.backgroundColor = "white";
	}else{
		document.getElementById("dot3").style.backgroundColor = "";
	}
	
	
}

function nextImage2(){
	document.getElementsByClassName("slide-Image")[imgIndex+1].style.zIndex = "1";
	document.getElementsByClassName("slide-Image")[imgIndex].style.zIndex = "0";
	document.getElementsByClassName("slide-Image")[imgIndex+1].style.transition = "0.01s ease-in-out, transform 0.01s ease-in-out";
	document.getElementsByClassName("slide-Image")[imgIndex+1].style.left = "-100%";
	document.getElementsByClassName("slide-Image")[imgIndex+1].style.transition = "0.6s ease-in-out, transform 0.6s ease-in-out";
	var containerRect = document.getElementById("slideshow-container").getBoundingClientRect();
	document.getElementsByClassName("slide-Image")[imgIndex+1].style.left = containerRect.left;
	imgIndex += 1;
}

function lastImage2(){
	document.getElementsByClassName("slide-Image")[imgIndex-1].style.zIndex = "0";
	document.getElementsByClassName("slide-Image")[imgIndex].style.zIndex = "1";
	document.getElementsByClassName("slide-Image")[imgIndex].style.transition = "0.6s ease-in-out, transform 0.6s ease-in-out";
	document.getElementsByClassName("slide-Image")[imgIndex].style.left = "-100%";
	document.getElementsByClassName("slide-Image")[imgIndex-1].style.transition = "0.01s ease-in-out, transform 0.01s ease-in-out";
	var containerRect = document.getElementById("slideshow-container").getBoundingClientRect();
	document.getElementsByClassName("slide-Image")[imgIndex-1].style.left = containerRect.left;
	imgIndex -= 1;
}

function nextImage(){
	showImage(imgIndex+1);
}
function lastImage(){
	showImage(imgIndex-1);
}

window.onload = function(){	
	resizeCont();
	document.getElementById("dot1").style.backgroundColor = "white";
	document.getElementById("toggle").onclick = function(){
		if(document.getElementById("open").style.height == ""){
			document.getElementById("open").style.height = "auto";
		}else{
			document.getElementById("open").style.height = "";
		}
	};
	
	size();
	setInterval(function(){
		size();
	}, 5);
	setInterval(function(){
		nextImage();
	}, 5000);
}

window.onresize = function(){
	resizeCont();
	size();
};
