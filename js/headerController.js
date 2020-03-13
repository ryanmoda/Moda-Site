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
		
		});

	};

	

	
    app.controller('HeaderController',headerController);
	app.controller('linkFunc', linkFunc);


}());