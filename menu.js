function size(){
	if(window.innerWidth > 820){
		var rekt2 = document.getElementById("non-burg").getBoundingClientRect();	
		document.getElementById("use1").style.width = rekt2.width.toString() + "px";
		var rekt = document.getElementById("use1").getBoundingClientRect();
		document.getElementById("non-burg").style.left = rekt.left.toString() + "px";
		document.getElementById("non-burg").style.visibility = "visible";
		document.getElementById("burg").style.visibility = "hidden";
	}else{
		document.getElementById("non-burg").style.visibility = "hidden";
		document.getElementById("burg").style.visibility = "visible";
		document.getElementById("use1").style.width = "100%";
	}
}

window.onload = function(){
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
	}, 500);
};

window.onresize = function(){
	size();
};
