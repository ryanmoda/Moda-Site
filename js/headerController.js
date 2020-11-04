(function () { 

var currentPath;
var app = angular.module('modaApp');
	var linkFunc = function ($scope) {
		$scope.picLink = "www.google.com";
					alert($scope.picLink);
		$scope.linkFunc = function (url) {
			$window.open("www.google.com");
		}
	}
  var headerController = function ($scope, $location) 
    { 
        $scope.isActive = function (viewLocation) { 
			currentPath = $location.path();
			//localStorage.setItem("currentPath", currentPath);
            return viewLocation === $location.path();
		};
		$scope.$on('$locationChangeStart',function(evt, absNewUrl, absOldUrl) {

			var hashIndex = absOldUrl.indexOf('#');

			var oldRoute = absOldUrl.substr(hashIndex + 2);

			hashIndex = absNewUrl.indexOf('#');

			var newRoute = absNewUrl.substr(hashIndex + 2);

			History.lastRoute = oldRoute;

			localStorage.setItem("currentPath", "/" + newRoute);
			//console.log(oldRoute);

			localStorage.setItem("prevPath", "/" + oldRoute);

			if ( localStorage.getItem("prevPath") == "/reps" && localStorage.getItem("currentPath") != "/reps" ) {

				localStorage.setItem("visited", "false");

			}

		});
	};
var simpleSlider = function ($scope) {
	var slideIndex = 1;
	showSlides(slideIndex);
		
	$scope.currentSlide = function(n) {
	  showSlides(slideIndex = n);
	}
	
	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("dot");
	  if (n > slides.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
		  slides[i].style.display = "none";  
	  }
	  for (i = 0; i < dots.length; i++) {
		  dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slides[slideIndex-1].style.display = "flex";  
	  dots[slideIndex-1].className += " active";
	}
	
	};

	var whiteIcons = function($scope, $location) {
		$scope.$on('$viewContentLoaded', function() {
			currentPath = $location.path();
			if (currentPath === "/" || currentPath === "/about") {
				var logos = document.getElementsByClassName("logo");
 
				logos[0].src="svgs/modalogoWHITE.svg";

				document.getElementById("logo").src="svgs/modalogo.svg";
				document.getElementById("phone").src="images/Icons/icon-phone-wh.svg";
				document.getElementById("fax").src="images/Icons/icon-fax-wh.svg";
				document.getElementById("mail").src="images/Icons/icon-email-wh.svg";

				document.getElementById("fb").src="images/Icons/FB.svg";
				document.getElementById("ig").src="images/Icons/ig.svg";
				document.getElementById("tw").src="images/Icons/twitter.svg";
				document.getElementById("in").src="images/Icons/linedkin.svg";
				
			}
			else {
				var logos = document.getElementsByClassName("logo");
				for (var i = 0; i < logos.length; i++) {
					logos[i].src="svgs/modalogo.svg";
				}
				document.getElementById("phone").src="images/Icons/icon-phone-blk-sm.svg";
				document.getElementById("fax").src="images/Icons/icon-fax-blk.svg";
				document.getElementById("mail").src="images/Icons/icon-email-blk-sm.svg";

				document.getElementById("fb").src="svgs/FB-blk.svg";
				document.getElementById("ig").src="svgs/ig-black.svg";
				document.getElementById("tw").src="svgs/twitter-blk.svg";
				document.getElementById("in").src="svgs/linedkin-blk.svg";
			}
		});
	};



    app.controller('HeaderController',headerController);
	app.controller('simpleSlider', simpleSlider);
	app.controller('linkFunc', linkFunc);
	app.controller('dynamicIcons', whiteIcons);
}());