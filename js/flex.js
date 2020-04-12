//var baz = document.getElementById("int-flex");
//var boz = document.getElementById("ext-flex");
//baz.addEventListener("click", function() {
//	alert("sup");
//baz.classList.toggle("animate-int-flex");
//boz.classList.toggle("animate-ext- flex");
//});
function flupper(foo) {
var baz = "int-flex";
var boz = "ext-flex";
var biz = document.getElementById(baz);
var bee = document.getElementById(boz);
var type = foo + "-dis";
displayProducts(type);
//	if (foo === baz) { //int-flex clicked
//		document.documentElement.style.overflowY = "scroll";
//		document.getElementById("int-flex-dis").style.marginTop = "0px";
//		document.getElementById("int-flex-dis").style.opacity = "1";
//	}
//	else {
//		var intHeight = document.querySelector("#int-flex-dis");
//		var height = intHeight.offsetHeight;
//		intHeight = "-" + height + "px";
//		document.documentElement.style.overflowY = "scroll";
////		document.getElementById("int-flex-dis").style.marginTop = intHeight;
//		document.getElementById("ext-flex-dis").style.marginTop = "0px";
//		document.getElementById("ext-flex-dis").style.opacity = "1";
//	}
		slideOpen(biz,bee);
}		
	
function curtainHover(id) {
if (id === "int-flex") {
	document.getElementById("interior").style.display = "block";
} else {document.getElementById("exterior").style.display = "block";}
}

function noHover(id) {
if (id === "int-flex") {
	document.getElementById("interior").style.display = "none";
} else {document.getElementById("exterior").style.display = "none";}
}


function displayProducts(type) {
	document.documentElement.style.overflowY = "scroll";
	document.getElementById(type).style.marginTop = "0px";
	document.getElementById(type).style.opacity = "1";
}

function slideOpen(el,el1) {
el.classList.toggle("animate-int-flex");
el1.classList.toggle("animate-ext-flex");
noHover("int-flex");noHover("ext-flex");
}

$('.curtain').css('opacity', 0);
$('#int-flex-dis').css('opacity', 0);
$('#ext-flex-dis').css('opacity', 0);
$(window).on('load', function() {
  $('.curtain').css('opacity', 1);
});