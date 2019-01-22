(function() {
  var supportOffset = window.pageYOffset !== undefined,
      lastKnownPos = 0,
      ticking = false,
      scrollDir;

  function doSomething(scrollPos, scrollDir) {
    // Your code goes here...
    console.log('scroll pos: ' + scrollPos + ' | scroll dir: ' + scrollDir);
	var target = document.getElementsByClassName("scrollTabs");
	  var position = document.getElementById("block1");
	  console.log(position.offsetTop);
	  if (scrollPos >= position.offsetTop) {
	  for (var i=1; i < target.length; i++) {
		  target[i].classList.toggle("flash");
	  }
	  }
  }

  window.addEventListener('wheel', function(e) {
    currYPos = supportOffset ? window.pageYOffset : document.body.scrollTop;
    scrollDir = lastKnownPos > currYPos ? 'up' : 'down';
    lastKnownPos = currYPos;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(lastKnownPos, scrollDir);
        ticking = false;
      });
    }
    ticking = true;
  });
})();