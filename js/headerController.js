(function () { 
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
            return viewLocation === $location.path();
        };
    };
    app.controller('HeaderController',headerController);
	app.controller('linkFunc', linkFunc);
}());