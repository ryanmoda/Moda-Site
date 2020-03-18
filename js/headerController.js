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

	var jsload = function($scope) {

		$scope.loadScript = function (url, type, charset) {
			if (type===undefined) type = 'text/javascript';
			if (url) {
				var script = document.querySelector("script[src*='"+url+"']");
				if (!script) {
					var heads = document.getElementsByTagName("head");
					if (heads && heads.length) {
						var head = heads[0];
						if (head) {
							script = document.createElement('script');
							script.setAttribute('src', url);
							script.setAttribute('type', type);
							if (charset) script.setAttribute('charset', charset);
							head.appendChild(script);
						}
					}
				}
				return script;
			}
		};		
		
	  $scope.loadScript('js/jszip.min.js', 'text/javascript', 'utf-8');
    $scope.loadScript('js/jszip-utils.min.js', 'text/javascript', 'utf-8');
    $scope.loadScript('js/FileSaver.js', 'text/javascript', 'utf-8');
    $scope.loadScript('js/zip.js', 'text/javascript', 'utf-8');
    $scope.loadScript('js/js-help.js', 'text/javascript', 'utf-8');
    $scope.checked = function() {
      return ($scope.checkbox1 || $scope.checkbox2);
    }
		
	};




    app.controller('HeaderController',headerController);
	app.controller('linkFunc', linkFunc);
	app
	.controller('jsload', jsload)
	.directive('mmcwlModal', function() {
		return {
		  templateUrl: 'mmcwl-modal.html'
		};
	  });


}());
