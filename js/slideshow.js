var slideIndex = 0;
var j = 1;
setTimeout(showSlides, 100);
function showSlides() {
//	alert("begin function");
var slidesArr = document.getElementsByClassName("slides");
for (var i = 0; i < slidesArr.length; i++) {
	slidesArr[i].classList.add("hidden");
	var el = document.getElementById("d" + j);
	el.classList.remove("activate");
	j++;
}
	slideIndex++;
	j = 1;
	if (slideIndex > slidesArr.length) {slideIndex =  1}
	slidesArr[slideIndex - 1].classList.remove("hidden");
	butActive(slideIndex);
//	slides[slideIndex - 1].style.opacity = "1";
//	alert("2000ms timeout");
	setTimeout(showSlides, 4000);
	
}

function goToSlide(n) {
var slidesArr = document.getElementsByClassName("slides");
	var j = 1;
	for (i = 0; i < slidesArr.length; i++) {
//		slides[i].style.opacity = "0";
		slidesArr[i].classList.add("hidden");
		var el = document.getElementById("d" + j);
		el.classList.remove("activate");
		j++;
	}
	slidesArr[n-1].classList.remove("hidden");
	document.getElementById("d" + n).classList.add("activate");
	slideIndex = n;
}

function butActive(i) {
	var but = "d" + i;
	var el = document.getElementById(but);
	
	el.classList.toggle("activate");
}