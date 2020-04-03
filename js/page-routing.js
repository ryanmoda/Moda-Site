// Code goes here

(function () {

    var app = angular.module('modaApp',['ngRoute']);

    app.config(function ($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'index-slide-3-inc.html?1585599141'
             //   templateUrl:'slide-test-1.html'

			})
			// .when('/test',{
            //     templateUrl:'test.html'
            // })
            .when('/mini-cove',{
                templateUrl:'mini-cove.html?1585599141'
            })
			.when('/cove',{
                templateUrl:'moda-cove.html?1585599141'
            })
					.when('/cove-wl',{
						templateUrl:'cove-wl.html?1585599141',
					})
					.when('/cove-sc',{
						templateUrl:'cove-sc.html?1585599141',
					})
					.when('/cove-cc',{
						templateUrl:'cove-cc.html?1585599141',
					})
					.when('/cove-dw',{
						templateUrl:'cove-dw.html?1585599141',
					})
			.when('/cove-ext',{
                templateUrl:'cove-ext.html?1585599141'
            })
					.when('/cove-wl-ext',{
						templateUrl:'cove-wl-ext.html?1585599141'
					})
					.when('/cove-sc-ext',{
						templateUrl:'cove-sc-ext.html?1585599141'
					})
					.when('/cove-cc-ext',{
						templateUrl:'cove-cc-ext.html?1585599141'
					})
					.when('/cove-dw-ext',{
						templateUrl:'cove-dw-ext.html?1585599141'
					})

					.when('/mmc-wl',{
						templateUrl:'mmc-wl.html?1585671020',
					})
					.when('/mmc-sc',{
						templateUrl:'mmc-sc.html?1585247629'
					})
					.when('/mmc-gd',{
						templateUrl:'mmc-gd.html?1585247629'
					})
					.when('/mmc-cc',{
						templateUrl:'mmc-cc.html?1585599141'
					})
					.when('/mmc-dw',{
						templateUrl:'mmc-dw.html?1585599141'
					})
			.when('/mini-graze',{
                templateUrl:'mini-graze.html?1585599141'
            })
				.when('/mmg-sc',{
                templateUrl:'mmg-sc.html?1585599141'
            })
				.when('/mmg-wl',{
                templateUrl:'mmg-wl.html?1585599141'
            })
				.when('/mmg-sc',{
                templateUrl:'mmg-sc.html?1585599141'
            })
		    	.when('/mmg-gd',{
                templateUrl:'mmg-gd.html?1585599141'
            })
				.when('/mmg-dw',{
                templateUrl:'mmg-dw.html?1585599141'
            })
				.when('/graze',{
					templateUrl:'graze.html?1585599141'
				})
				.when('/graze-wl',{
						templateUrl:'graze-wl.html?1585599141',
					})
					.when('/graze-test',{
						templateUrl:'graze-dw-2.html?1585599141',
					})
					.when('/graze-wl-2',{
						templateUrl:'graze-wl-2.html?1585599141',
					})
					.when('/graze-sc-2',{
						templateUrl:'graze-sc-2.html?1585599141',
					})
					.when('/graze-sc',{
						templateUrl:'graze-sc.html?1585599141',
					})
					.when('/graze-cc',{
						templateUrl:'graze-cc.html?1585599141',
					})
					.when('/graze-dw',{
						templateUrl:'graze-dw.html?1585599141',
					})
				.when('/graze-ext',{
                	templateUrl:'graze-ext.html?1585599141'
            	})
					.when('/graze-wl-ext',{
						templateUrl:'graze-wl-ext.html?1585599141',
					})
					.when('/graze-sc-ext',{
						templateUrl:'graze-sc-ext.html?1585599141',
					})
					.when('/graze-cc-ext',{
						templateUrl:'graze-cc-ext.html?1585599141',
					})
					.when('/graze-dw-ext',{
						templateUrl:'graze-dw-ext.html?1585599141',
					})
			// .when('/flex',{
            //     templateUrl:'flex-test.html',
			// 	script:'js/flex.js'
            // })
				.when('/int-flex',{
					templateUrl:'int-flex.html?1585599141'
				})
						.when('/int-eco-wl',{
						templateUrl:'int-eco-wl.html?1585599141'
					})
					.when('/int-star',{
						templateUrl:'int-starflex-wl.html?1585599141'
					})
					.when('/int-mini-star', {
						templateUrl:'int-mini-star-wl.html?1585599141'
					})
					.when('/int-star-sc',{
						templateUrl:'int-starflex-sc.html?1585599141'
					})
					.when('/int-star-rgb',{
						templateUrl:'int-starflex-rgb.html?1585599141'
					})
					.when('/int-star-rgbw',{
						templateUrl:'int-star-rgbw.html?1585599141'
					})
					.when('/int-star-dw',{
						templateUrl:'int-starflex-dw.html?1585599141'
					})
					.when('/int-fusion',{
						templateUrl:'int-fusion.html?1585599141'
					})
					.when('/int-super-fusion',{
						templateUrl:'int-super-fusion.html?1585599141'
					})
					.when('/int-edge',{
						templateUrl:'int-edge.html?1585599141'
					})
					.when('/int-edge-rgb',{
						templateUrl:'int-edge-rgb.html?1585599141'
					})
					.when('/int-flat-sc',{
						templateUrl:'int-flat-sc.html?1585599141'
					})
					.when('/int-flat-cc',{
						templateUrl:'int-flat-cc.html?1585599141'
					})
					.when('/int-flat',{
						templateUrl:'int-flat.html?1585599141'
					})
					.when('/int-power',{
						templateUrl:'int-power.html?1585599141'
					})
					.when('/int-super-sc',{
						templateUrl:'int-superflex-sc.html?1585599141'
					})
					.when('/int-superflex',{
						templateUrl:'int-superflex.html?1585599141'
					})
					.when('/int-superflex-ho',{
						templateUrl:'int-superflex-ho.html?1585599141'
					})
					.when('/int-x-flex',{
						templateUrl:'int-x-flex.html?1585599141'
					})
				.when('/ext-flex',{
					templateUrl:'ext-flex.html?1585680840'
				})
					.when('/ext-linear-wl',{
					templateUrl:'ext-linear-wl.html?1585599141'
					})
					.when('/ext-linear-sc',{
					templateUrl:'ext-linear-sc.html?1585599141'
					})
					.when('/ext-aqua-wl',{
					templateUrl:'ext-aqua-wl.html?1585599141'
					})
					.when('/ext-mini-aqua-wl',{
					templateUrl:'ext-mini-aqua-wl.html?1585599141'
					})
					.when('/ext-aqua-edge-wl',{
					templateUrl:'ext-aqua-edge-wl.html?1585599141'
					})
					.when('/ext-super-aqua-wl',{
					templateUrl:'ext-super-aqua-wl.html?1585667267'
					})
					.when('/ext-aqua-sc',{
					templateUrl:'ext-aqua-sc.html?1585599141'
					})
					.when('/ext-super-aqua-sc',{
					templateUrl:'ext-super-aqua-sc.html?1585599141'
					})
					.when('/ext-linear-rgb',{
					templateUrl:'ext-linear-rgb.html?1585599141'
					})
					.when('/ext-aqua-rgbw',{
					templateUrl:'ext-aqua-rgbw.html?1585599141'
					})
					.when('/ext-aqua-rgb',{
					templateUrl:'ext-aqua-rgb.html?1585599141'
					})
					.when('/ext-aqua-edge-rgb',{
					templateUrl:'ext-aqua-edge-rgb.html?1585599141'
					})
					.when('/ext-aqua-dw',{
					templateUrl:'ext-aqua-dw.html?1585599141'
					})
			.when('/super-neon',{
					templateUrl:'super-neon.html?1585599141'
				})
					.when('/ext-super-neon-x-dome',{
					templateUrl:'ext-super-neon-x-dome.html?1585599141'
					})
					.when('/ext-super-neon-x-flat',{
					templateUrl:'ext-super-neon-x-flat.html?1585599141'
					})
					.when('/ext-super-neon-x-edge',{
					templateUrl:'ext-super-neon-x-edge.html?1585599141'
					})
					.when('/ext-super-neon-x-dome-sc',{
					templateUrl:'ext-super-neon-x-dome-sc.html?1585599141'
					})
					.when('/ext-super-neon-x-flat-sc',{
					templateUrl:'ext-super-neon-x-flat-sc.html?1585599141'
					})
					.when('/ext-super-neon-edge-sc',{
					templateUrl:'ext-super-neon-edge-sc.html?1585599141'
					})
					.when('/ext-super-neon-x-dome-rgb',{
					templateUrl:'ext-super-neon-x-dome-rgb.html?1585599141'
					})
					.when('/ext-super-neon-x-flat-rgb',{
					templateUrl:'ext-super-neon-x-flat-rgb.html?1585599141'
					})
			.when('/xtrusion',{
                templateUrl:'xtrusion.html?1585599141'
            })
			.when('/xtrusion-surf',{
                templateUrl:'xtrusion-surf.html?1585599141'
            })
			.when('/xtrusion-rec',{
                templateUrl:'xtrusion-rec.html?1585599141'
            })
			.when('/xtrusion-sus',{
                templateUrl:'xtrusion-sus.html?1585599141'
            })
			.when('/power',{
                templateUrl:'power.html?1585599141'
            })
			.when('/12v',{
                templateUrl:'12v.html?1585599141'
            })
			.when('/24v',{
                templateUrl:'24v.html?1585599141'
            })
			.when('/controls',{
                templateUrl:'controls.html?1585599141'
            })
			.when('/converters',{
                templateUrl:'converters.html?1585599141'
            })
			.when('/dmx-cntrl',{
                templateUrl:'dmx-cntrl.html?1585599141'
            })
					.when('/kandi-touch',{
						templateUrl:'kandi-touch.html?1585599141'
					})
					.when('/tpc',{
						templateUrl:'tpc.html?1585599141'
					})
					.when('/lpc',{
						templateUrl:'lpc.html?1585599141'
					})
					.when('/vlc',{
						templateUrl:'vlc.html?1585599141'
					})
					.when('/lpcx',{
						templateUrl:'lpcx.html?1585599141'
					})
			.when('/dmx-accs',{
                templateUrl:'dmx-accs.html?1585599141'
            })
			.when('/accessories',{
                templateUrl:'accessories.html?1585599141'
            })
					.when('/dmx-hub',{
						templateUrl:'dmx-wiring-hub.html?1585599141'
					})
			.when('/technology',{
                templateUrl:'technology.html?1585599141'
            })
			.when('/about',{
                templateUrl:'about.html?1585599141'
            })
			.when('/projects',{
                templateUrl:'projects.html?1585599141'
            })
					.when('/bonfire',{
                templateUrl:'bonfire.html?1585599141'
				})
				.when('/jaburritos',{
                templateUrl:'jaburritos.html?1585599141'
				})
				.when('/lingo-cafe',{
                templateUrl:'lingo-cafe.html?1585599141'
				})
				.when('/society-of-arts-and-crafts',{
                templateUrl:'society-of-arts-and-crafts.html?1585599141'
				})
				.when('/sierra-gold',{
                templateUrl:'sierra-gold.html?1585599141'
				})
				.when('/talde',{
                templateUrl:'talde.html?1585599141'
				})
				.when('/segafredo-zanetti',{
                templateUrl:'segafredo-zanetti.html?1585599141'
				})
				.when('/private-club',{
                templateUrl:'private-club.html?1585599141'
				})
				.when('/mellow-mushroom',{
                templateUrl:'mellow-mushroom.html?1585599141'
				})
				.when('/mcdonalds',{
                templateUrl:'mcdonalds.html?1585599141'
				})
				.when('/hyatt-house',{
                templateUrl:'hyatt-house.html?1585599141'
				})
				.when('/global-ucf',{
                templateUrl:'global-ucf.html?1585599141'
				})
			.when('/projects-2',{
                templateUrl:'projects-2.html?1585599141'
            })
				.when('/wh-fl',{
                templateUrl:'winter-garden-hospital.html?1585599141'
            	})
				.when('/fmc-fl',{
                templateUrl:'fish-chapel.html?1585599141'
            	})
				.when('/cse-fl',{
                templateUrl:'church-exchange.html?1585599141'
            	})
				.when('/alegeus-fl',{
                templateUrl:'alegeus.html?1585599141'
            	})
				.when('/tc-ny',{
                templateUrl:'tiffany-and-co.html?1585599141'
            	})
				.when('/pat-ny',{
                templateUrl:'patagonia.html?1585599141'
            	})
				.when('/ck-ny',{
                templateUrl:'city-kitchen.html?1585599141'
            	})
				.when('/sbg-fl',{
                templateUrl:'state-bar-grill.html?1585599141'
            	})
				.when('/bu-il',{
                templateUrl:'benedictine-university.html?1585599141'
            	})
				.when('/bm-tx',{
                templateUrl:'baybrook-mall.html?1585599141'
            	})
				.when('/cm-tx',{
                templateUrl:'cowgirl-museum.html?1585599141'
            	})
				.when('/gl-sh-il',{
                templateUrl:'global-showroom.html?1585599141'
            	})
			.when('/projects-3',{
                templateUrl:'projects-3.html?1585599141'
            })
				.when('/sidebar-grille',{
                templateUrl:'sidebar-grille.html?1585599141'
            	})
				.when('/fremont',{
                templateUrl:'fremont.html?1585599141'
            	})
				.when('/liquor-library',{
                templateUrl:'liquor-library.html?1585599141'
            	})
				.when('/red-dog',{
                templateUrl:'red-dog.html?1585599141'
            	})
				.when('/blue-man-group',{
                templateUrl:'blue-man-group.html?1585599141'
            	})
				.when('/dkny',{
                templateUrl:'dkny.html?1585599141'
            	})
				.when('/john-hancock',{
                templateUrl:'john-hancock.html?1585599141'
            	})
				.when('/monte-carlo',{
                templateUrl:'monte-carlo.html?1585599141'
            	})
				.when('/venetian',{
                templateUrl:'venetian.html?1585599141'
            	})
				.when('/ny-ny',{
                templateUrl:'ny-ny.html?1585599141'
            	})
				.when('/cyrus-one',{
                templateUrl:'cyrus-one.html?1585599141'
            	})
				.when('/residential',{
                templateUrl:'residential.html?1585599141'
            	})
				.when('/miron-construction',{
                templateUrl:'miron-construction.html?1585599141'
            	})
				.when('/bitexco-tower',{
                templateUrl:'bitexco-tower.html?1585599141'
            	})
			.when('/resources',{
                templateUrl:'resources.html?1585599141'
            })
			.when('/re-graze',{
                templateUrl:'graze-resources.html?1585599141'
            })
			.when('/re-flex',{
                templateUrl:'flex-resources.html?1585599141'
            })
			.when('/re-neon',{
                templateUrl:'neon-resources.html?1585599141'
            })
			.when('/re-xtrus',{
                templateUrl:'xtrus-resources.html?1585599141'
            })
			.when('/re-power',{
                templateUrl:'power-resources.html?1585599141'
            })
			.when('/re-controls',{
                templateUrl:'controls-resources.html?1585599141'
            })
			.when('/legacy',{
                templateUrl:'legacy.html?1585599141'
            })
				.when('/leg-ecove-wl',{
				templateUrl:'leg-ecove-wl.html?1585599141'
				})
				.when('/leg-ecove-dw',{
				templateUrl:'leg-ecove-dw.html?1585599141'
				})
				.when('/leg-ecove-sc',{
				templateUrl:'leg-ecove-sc.html?1585599141'
				})
				.when('/leg-ecove-cc',{
				templateUrl:'leg-ecove-cc.html?1585599141'
				})
				.when('/leg-cove-rs',{
				templateUrl:'leg-cove-rs.html?1585599141'
				})
				.when('/leg-zilva',{
				templateUrl:'leg-zilva.html?1585599141'
				})
				.when('/leg-mini-zilva',{
				templateUrl:'leg-mini-zilva.html?1585599141'
				})
				.when('/leg-zilva-cc',{
				templateUrl:'leg-zilva-cc.html?1585599141'
				})
				.when('/leg-egraze',{
				templateUrl:'leg-egraze.html?1585599141'
				})
				.when('/leg-egraze-sc',{
				templateUrl:'leg-egraze-sc.html?1585599141'
				})
				.when('/leg-graze-rs',{
				templateUrl:'leg-graze-rs.html?1585599141'
				})
			.when('/reps',{
                templateUrl:'reps.html?1585599141'
            })
			.when('/news',{
                templateUrl:'news.html?1585599141'
            })
			.when('/news-2',{
                templateUrl:'news-2.html?1585599141'
            })
			.when('/awards',{
                templateUrl:'awards.html?1585599141'
            })
			.when('/press',{
                templateUrl:'press.html?1585599141'
            })
			.when('/events',{
                templateUrl:'events.html?1585599141'
            })
			.when('/contact',{
                templateUrl:'contact.html?1585599141'
			})
			.when('/contact-us',{
				templateUrl:'contact-us.html?1585599141'
			})
			.when('/careers',{
                templateUrl:'careers.html?1585599141'
			})
			.when('/job-description',{
                templateUrl:'job-description2.html?1585599141'
			})
			.when('/job-listings',{
                templateUrl:'job-listings.html?1585599141'
			})
			.when('/all-products',{
                templateUrl:'all-products.html?1585599141'
            })
			.when('/product-configurator',{
                templateUrl:'product-configurator.html?1585599141'
            })
			.when('/place-order',{
                templateUrl:'place-order.html?1585599141'
			})
			.when('/order-submit',{
                templateUrl:'order-submit.html?1585599141'
			})
			.otherwise({
				controller: '404Controller',
				templateUrl: '404.html'
			});

    });
 app.directive('modaFooter', function() {
    return {
      templateUrl: 'footer.html?1585594112'
    };
  });
 app.directive('covewlModal', function() {
    return {
      templateUrl: 'covewl-modal.html'
    };
  });
 app.directive('covescModal', function() {
    return {
      templateUrl: 'covesc-modal.html'
    };
  });
 app.directive('coveccModal', function() {
    return {
      templateUrl: 'covecc-modal.html'
    };
  });
 app.directive('covedwModal', function() {
    return {
      templateUrl: 'covedw-modal.html'
    };
  });
//MINI COVE ================================
 app.directive('mmcwlModal', function() {
    return {
      templateUrl: 'mmcwl-modal.html'
    };
  });
 app.directive('mmcscModal', function() {
    return {
      templateUrl: 'mmcsc-modal.html'
    };
  });
 app.directive('mmcgdModal', function() {
    return {
      templateUrl: 'mmcgd-modal.html'
    };
  });
 app.directive('mmcccModal', function() {
    return {
      templateUrl: 'mmccc-modal.html'
    };
  });
 app.directive('mmcdwModal', function() {
    return {
      templateUrl: 'mmcdw-modal.html'
    };
  });
 app.directive('mmcwlResource', function() {
    return {
      templateUrl: 'Templates/mmc-wl-resources.html'
    };
  });
 app.directive('mmcscResource', function() {
    return {
      templateUrl: 'Templates/mmc-sc-resources.html'
    };
  });
 app.directive('mmcgdResource', function() {
    return {
      templateUrl: 'Templates/mmc-gd-resources.html'
    };
  });
 app.directive('mmcccResource', function() {
    return {
      templateUrl: 'Templates/mmc-cc-resources.html'
    };
  });
 app.directive('mmcdwResource', function() {
    return {
      templateUrl: 'Templates/mmc-dw-resources.html'
    };
  });
//COVE INTERIOR =================================
 app.directive('covewlResource', function() {
    return {
      templateUrl: 'Templates/cove-wl-resources.html'
    };
  });
//COVE EXTERIOR ================================
 app.directive('coveextwlModal', function() {
    return {
      templateUrl: 'coveextwl-modal.html'
    };
  });
 app.directive('coveextscModal', function() {
    return {
      templateUrl: 'coveextsc-modal.html'
    };
  });
 app.directive('coveextccModal', function() {
    return {
      templateUrl: 'coveextcc-modal.html'
    };
  });
 app.directive('coveextdwModal', function() {
    return {
      templateUrl: 'coveextdw-modal.html'
    };
  });
//MINI GRAZE =====================================
 app.directive('mmgwlModal', function() {
    return {
      templateUrl: 'mmgwl-modal.html'
    };
  });
 app.directive('mmgscModal', function() {
    return {
      templateUrl: 'mmgsc-modal.html'
    };
  });
 app.directive('mmggdModal', function() {
    return {
      templateUrl: 'mmggd-modal.html'
    };
  });
 app.directive('mmgdwModal', function() {
    return {
      templateUrl: 'mmgdw-modal.html'
    };
  });
 app.directive('mmgwlResource', function() {
    return {
      templateUrl: 'Templates/mmg-wl-resources.html'
    };
  });
 app.directive('mmgscResource', function() {
    return {
      templateUrl: 'Templates/mmg-sc-resources.html'
    };
  });
 app.directive('mmggdResource', function() {
    return {
      templateUrl: 'Templates/mmg-gd-resources.html'
    };
  });
 app.directive('mmgdwResource', function() {
    return {
      templateUrl: 'Templates/mmg-dw-resources.html'
    };
  });
//GRAZE INT =====================================
 app.directive('grazewlModal', function() {
    return {
      templateUrl: 'grazewl-modal.html'
    };
  });
 app.directive('grazescModal', function() {
    return {
      templateUrl: 'grazesc-modal.html'
    };
  });
 app.directive('grazeccModal', function() {
    return {
      templateUrl: 'grazecc-modal.html'
    };
  });
 app.directive('grazedwModal', function() {
    return {
      templateUrl: 'grazedw-modal.html'
    };
  });
 app.directive('grazewlResource', function() {
    return {
      templateUrl: 'Templates/graze-wl-resources.html'
    };
  });
 app.directive('grazescResource', function() {
    return {
      templateUrl: 'Templates/graze-sc-resources.html'
    };
  });
 app.directive('grazeccResource', function() {
    return {
      templateUrl: 'Templates/graze-cc-resources.html'
    };
  });
 app.directive('grazedwResource', function() {
    return {
      templateUrl: 'Templates/graze-dw-resources.html'
    };
  });
//GRAZE EXT =====================================
 app.directive('grazeextwlModal', function() {
    return {
      templateUrl: 'grazeextwl-modal.html'
    };
  });
 app.directive('grazeextscModal', function() {
    return {
      templateUrl: 'grazeextsc-modal.html'
    };
  });
 app.directive('grazeextccModal', function() {
    return {
      templateUrl: 'grazeextcc-modal.html'
    };
  });
 app.directive('grazeextdwModal', function() {
    return {
      templateUrl: 'grazeextdw-modal.html'
    };
  });
 app.directive('grazeextwlResource', function() {
    return {
      templateUrl: 'Templates/grazeext-wl-resources.html'
    };
  });
 app.directive('grazeextscResource', function() {
    return {
      templateUrl: 'Templates/grazeext-sc-resources.html'
    };
  });
 app.directive('grazeextccResource', function() {
    return {
      templateUrl: 'Templates/grazeext-cc-resources.html'
    };
  });
 app.directive('grazeextdwResource', function() {
    return {
      templateUrl: 'Templates/grazeext-dw-resources.html'
    };
  });
//INT FLEX ================================
 app.directive('intflexwlModal', function() {
    return {
      templateUrl: 'intflexwl-modal.html'
    };
  });
 app.directive('intflexscModal', function() {
    return {
      templateUrl: 'intflexsc-modal.html'
    };
  });
 app.directive('intflexccModal', function() {
    return {
      templateUrl: 'intflexcc-modal.html'
    };
  });
//EXT FLEX ================================
 app.directive('extflexwlModal', function() {
    return {
      templateUrl: 'extflexwl-modal.html'
    };
  });
 app.directive('extflexscModal', function() {
    return {
      templateUrl: 'extflexsc-modal.html'
    };
  });
 app.directive('extflexccModal', function() {
    return {
      templateUrl: 'extflexcc-modal.html'
    };
  });
//SUPER NEON ================================
 app.directive('snwlModal', function() {
    return {
      templateUrl: 'snwl-modal.html'
    };
  });
 app.directive('snscModal', function() {
    return {
      templateUrl: 'snsc-modal.html'
    };
  });
 app.directive('snccModal', function() {
    return {
      templateUrl: 'sncc-modal.html'
    };
  });
// CONTROLS ===================================
 app.directive('controlsModal', function() {
    return {
      templateUrl: 'controls-modal.html'
    };
  });
// LEGACY ===================================
 app.directive('legacyModal', function() {
    return {
      templateUrl: 'legacy-modal.html'
    };
  });

  app.controller('404Controller', function($scope, $location) {
    $scope.path = $location.path();
    $scope.back = function() {
        history.back();
    };
});

})();
// SCROLL TO TOP
// app.directive('scrollTop', function() {
//    return {
//      templateUrl: 'scroll-top.html'
//    };
//  });
