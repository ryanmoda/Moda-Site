var acc = document.getElementsByClassName("accordion");
var chevron = document.getElementsByClassName("chev");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
		$(this).find(".chev").toggleClass("rotate");
        this.nextElementSibling.classList.toggle("show");
  }
}