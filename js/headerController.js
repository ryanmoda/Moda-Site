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
			localStorage.setItem("currentPath", currentPath);
			return viewLocation === $location.path();
		};

		$scope.$on('$locationChangeStart',function(evt, absNewUrl, absOldUrl) {

			var hashIndex = absOldUrl.indexOf('#');
		
			var oldRoute = absOldUrl.substr(hashIndex + 2);
		
			History.lastRoute = oldRoute;

			console.log(oldRoute);
			
			localStorage.setItem("prevPath", "/" + oldRoute);

			if ( localStorage.getItem("prevPath") == "/reps" && localStorage.getItem("currentPath") != "/reps" ) {
				//console.log("yessir");
				
				localStorage.setItem("visited", "false");
				
			}
			// function removejscssfile(filename, filetype){
			// 	var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
			// 	var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
			// 	var allsuspects=document.getElementsByTagName(targetelement)
			// 	for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
			// 	 if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1) {
			// 	  allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
			// 	  console.log("unload + " + allsuspects[i].src);
				  
			// 	 }
			// 	}
			//    }  
			//    removejscssfile("js/jszip.min.js", "js");
			//    removejscssfile("js/jszip-utils.min.js", "js");
			//    removejscssfile("js/FileSaver.js", "js");
			//    removejscssfile("js/js-help.js", "js");
			//    removejscssfile("js/zip.js", "js");
		
		});

	};

	

	
    app.controller('HeaderController',headerController);
	app.controller('linkFunc', linkFunc);


}());