// Code goes here

(function () {

    var app = angular.module('modaApp',['ngRoute']);
    
    app.config(function ($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'index-slide-1.html'
             //   templateUrl:'slide-test-1.html'

            })
            .when('/mini-cove',{
                templateUrl:'mini-cove.html'
            })
			.when('/cove',{
                templateUrl:'cove.html'
            })
					.when('/mmc-wl',{
						templateUrl:'mmc-wl.html',
					})
					.when('/mmc-sc',{
						templateUrl:'mmc-sc.html'
					})
			.when('/mini-graze',{
                templateUrl:'mini-graze.html'
            })
				.when('/mmg-sc',{
                templateUrl:'mmg-sc.html'
            })
				.when('/graze',{
					templateUrl:'graze.html'
				})
				.when('/graze-ext',{
                	templateUrl:'graze-ext.html'
            	})
			.when('/flex',{
                templateUrl:'flex-test.html',
				script:'js/flex.js'
            })
				.when('/int-flex',{
					templateUrl:'int-flex.html'
				})
						.when('/int-eco-wl',{
						templateUrl:'int-eco-wl.html'
					})
					.when('/int-star',{
						templateUrl:'int-starflex.html'
					})
					.when('/int-mini-star',{
						templateUrl:'int-mini-starflex.html'
					})
					.when('/int-fusion',{
						templateUrl:'int-fusion.html'
					})
					.when('/int-super-fusion',{
						templateUrl:'int-super-fusion.html'
					})
					.when('/int-edge',{
						templateUrl:'int-edge.html'
					})
					.when('/int-flat',{
						templateUrl:'int-flat.html'
					})
					.when('/int-power',{
						templateUrl:'int-power.html'
					})
					.when('/int-superflex',{
						templateUrl:'int-superflex.html'
					})
					.when('/int-x-flex',{
						templateUrl:'int-x-flex.html'
					})
				.when('/ext-flex',{
					templateUrl:'ext-flex.html'
				})
			.when('/super-neon',{
					templateUrl:'super-neon.html'
				})
			.when('/xtrusion-surf',{
                templateUrl:'xtrusion-surf.html'
            })
			.when('/12v',{
                templateUrl:'12v.html'
            })
			.when('/controls',{
                templateUrl:'controls.html'
            })
			.when('/technology',{
                templateUrl:'technology.html'
            })
			.when('/about',{
                templateUrl:'about.html'
            })
			.when('/projects',{
                templateUrl:'projects.html'
            })
					.when('/bonfire',{
                templateUrl:'slide-test-1.html'
				})	
			.when('/resources',{
                templateUrl:'resources.html'
            })
			.when('/reps',{
                templateUrl:'reps.html'
            })
			.when('/cove-mob',{
                templateUrl:'cove.html'
            })
			.when('/news',{
                templateUrl:'news.html'
            })
			.when('/awards',{
                templateUrl:'awards.html'
            })
			.when('/press',{
                templateUrl:'press.html'
            })
			.when('/contact',{
                templateUrl:'contact.html'
            })
		
    });	
 app.directive('modaFooter', function() {
    return {
      templateUrl: 'footer.html'
    };
  });
		
})();


