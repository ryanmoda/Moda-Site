// JavaScript Document


function drop() {
	var w = window.innerWidth;
	var h = String(document.documentElement.scrollHeight - 18) + 'px'
	var open = "230px";
	
	if (document.getElementById("sidenav-d").style.width == open) {
		document.getElementById("sidenav-d").style.width = "0px";
		document.getElementById("burg").classList.remove("is-active");
		document.getElementById("over").classList.toggle("overlay");
		document.getElementById("over").style.height = "0px";
		return;
	}
	if (document.getElementById("sidenav-mob").style.width == open) {
		document.getElementById("sidenav-mob").style.width = "0px";
		document.getElementById("burg").classList.remove("is-active");
		document.getElementById("over").classList.toggle("overlay");
		document.getElementById("over").style.height = "0px";
		return;
	}
	
	document.getElementById("burg").classList.add("is-active");
	document.getElementById("over").classList.toggle("overlay");
	document.getElementById("over").style.height = h; /*set dynamic height for overlay*/
	
	if (w > 750) {
	document.getElementById("sidenav-d").style.width = open;

	}
	else {
	document.getElementById("sidenav-mob").style.width = open;
	}
}

var notSideBar = document.getElementById("over");
notSideBar.addEventListener("click", function() {
		drop();			
							});



var acc = document.getElementsByClassName("collapsable");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
		panel.style.display = "none";
        } else {
			panel.style.display = "block";

        }
    });
}







