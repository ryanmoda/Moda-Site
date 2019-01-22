function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "+ Read more"; 
    moreText.style.display = "none";
	moreText.style.opacity = "0";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "- Read less"; 
    moreText.style.display = "inline";
	moreText.style.opacity = "1";  
  }
}
function readMoreDyn(d,m,r) {
  var dots = document.getElementById(d);
  var moreText = document.getElementsByClassName(m)[0];
  var btnText = document.getElementsByClassName(r)[0];
console.log("sup");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "+ Read more"; 
    moreText.style.display = "none";
	moreText.style.opacity = "0";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "- Read less"; 
    moreText.style.display = "inline";
	moreText.style.opacity = "1";  
  }
}