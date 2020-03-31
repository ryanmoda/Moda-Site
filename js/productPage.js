function productPage(el) {	
	var blocks = document.getElementsByClassName(el);
	var even = "#fff";
	var odd = "#fafafa";
	for (var i = 0; i < blocks.length; i++) {
		if ((i == 0) || (i%2 == 0)) { blocks[i].style.backgroundColor = even;} //even
		else {blocks[i].style.backgroundColor = odd;} //odd
	}
}
function modalClick(el) {	
	ga('send', 'event', 'modal', 'click', el);
}
function linkClick(el) {
		ga('send', 'event', 'resource', 'click', el);
}