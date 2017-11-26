
function load() {
	document.getElementById('canvas').style = "display: none;"
};
function goTo(id)
{
	var proj = document.getElementById(id);
	proj.scrollIntoView({block: "start", behavior: "smooth"});
};
function hovered(id) {
	document.getElementById(id).style = "display: initial";
	document.getElementById(id).src="https://vignette.wikia.nocookie.net/theoptical-and-the-illusions/images/d/db/Volleyball_idle.png/revision/latest?cb=20130126014740";
	document.getElementById(id).alt="volleyball";
};
function notHovered(id) {
	document.getElementById(id).style = "display: none";
	document.getElementById(id).src="";
	document.getElementById(id).alt="";
};

function showOriginalHulk() {
	document.getElementById('greenhulk').style = "display: inital;"
		document.getElementById('canvas').style = "display: none;"
};

function invert() {
document.getElementById('greenhulk').style = "display: none;"
document.getElementById('canvas').style = "display: inital;"

	var image = new Image();
	image.crossOrigin = "anonymous";
	image.src = "http://2.bp.blogspot.com/-YCYMTGc2Mc4/VMu_B39cE8I/AAAAAAAAP6w/sjIOeSiWVlg/s1600/the%2Bincredible%2Bhulk%2B1.jpg";
	image.alt = "Hulk Inverted";
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	context.canvas.width = image.width;
	context.canvas.height = image.height;
	image.width = 754;
	image.height = 500;
	context.drawImage(image,0,0);
	var pixels = context.getImageData(0, 0, image.width, image.height);
	for (var i = 0, n = pixels.data.length; i < n; i+=4){
			pixels.data[i] = 255 - pixels.data[i];
			pixels.data[i+1] = 255 - pixels.data[i+1];
			pixels.data[i+2] = 255 - pixels.data[i+2];
	}
	context.putImageData(pixels,0,0);
};

function displayblog(display) {
	if(display == true)
	{
	document.getElementById('blogname').style = "display: block";
	}
	else {
			document.getElementById('blogname').style = "display: none";
	}
};

function displayblog2(display) {
	if(display == true)
	{
	document.getElementById('blogname2').style = "display: block";
	}
	else {
			document.getElementById('blogname2').style = "display: none";
	}
}
function displayNav(){
	var navList = ['profileBtn', 'resumeBtn', 'projectBtn', 'albumBtn', 'blogBtn', 'contactBtn'];
	var burgerBtnName = document.getElementById('burger').name;
	navList.forEach(function(e){
	var elem = document.getElementById(e);
	if(burgerBtnName == 'show'){
		document.getElementById('burger').name = "hide";
	elem.style.transition = "all 1s ease-in-out";
	elem.style.visibility = "hidden";
	elem.style.transform = "translateX(70.5em)";
	}
	else {
		document.getElementById('burger').name = "show";
		elem.style.transition = "all 1s ease-in-out";
		elem.style.visibility = "visible";
		elem.style.transform = "translateX(0em)";
	}
});
}
function adjustNav() {
	var navList = ['profileBtn', 'resumeBtn', 'projectBtn', 'albumBtn', 'blogBtn', 'contactBtn'];
	navList.forEach(function(e){
	var elem = document.getElementById(e);
		document.getElementById('burger').name = "show";
		elem.style.transition = "all 1s ease-in-out";
		elem.style.visibility = "visible";
		elem.style.transform = "translateX(0em)";
});
}
