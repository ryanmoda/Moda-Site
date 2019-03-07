// Code goes here

(function () {

    var app = angular.module('modaApp',['ngRoute']);
    
    app.config(function ($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'index-slide-2.html'
             //   templateUrl:'slide-test-1.html'

            })
            .when('/mini-cove',{
                templateUrl:'mini-cove.html'
            })
			.when('/cove',{
                templateUrl:'cove.html'
            })
					.when('/cove-wl',{
						templateUrl:'cove-wl.html',
					})
					.when('/cove-sc',{
						templateUrl:'cove-sc.html',
					})
					.when('/cove-cc',{
						templateUrl:'cove-cc.html',
					})
					.when('/cove-dw',{
						templateUrl:'cove-dw.html',
					})
			.when('/cove-ext',{
                templateUrl:'cove-ext.html'
            })
					.when('/cove-wl-ext',{
						templateUrl:'cove-wl-ext.html'
					})
					.when('/cove-sc-ext',{
						templateUrl:'cove-sc-ext.html'
					})
					.when('/cove-cc-ext',{
						templateUrl:'cove-cc-ext.html'
					})
					.when('/cove-dw-ext',{
						templateUrl:'cove-dw-ext.html'
					})
				
					.when('/mmc-wl',{
						templateUrl:'mmc-wl.html',
					})
					.when('/mmc-sc',{
						templateUrl:'mmc-sc.html'
					})
					.when('/mmc-gd',{
						templateUrl:'mmc-gd.html'
					})
					.when('/mmc-cc',{
						templateUrl:'mmc-cc.html'
					})
					.when('/mmc-dw',{
						templateUrl:'mmc-dw.html'
					})
			.when('/mini-graze',{
                templateUrl:'mini-graze.html'
            })
				.when('/mmg-sc',{
                templateUrl:'mmg-sc.html'
            })
				.when('/mmg-wl',{
                templateUrl:'mmg-wl.html'
            })
				.when('/mmg-sc',{
                templateUrl:'mmg-sc.html'
            })
		    	.when('/mmg-gd',{
                templateUrl:'mmg-gd.html'
            })
				.when('/mmg-cc',{
                templateUrl:'mmg-cc.html'
            })
				.when('/mmg-dw',{
                templateUrl:'mmg-dw.html'
            })
				.when('/graze',{
					templateUrl:'graze.html'
				})
				.when('/graze-wl',{
						templateUrl:'graze-wl.html',
					})
					.when('/graze-sc',{
						templateUrl:'graze-sc.html',
					})
					.when('/graze-cc',{
						templateUrl:'graze-cc.html',
					})
					.when('/graze-dw',{
						templateUrl:'graze-dw.html',
					})
				.when('/graze-ext',{
                	templateUrl:'graze-ext.html'
            	})
					.when('/graze-wl-ext',{
						templateUrl:'graze-wl-ext.html',
					})
					.when('/graze-sc-ext',{
						templateUrl:'graze-sc-ext.html',
					})
					.when('/graze-cc-ext',{
						templateUrl:'graze-cc-ext.html',
					})
					.when('/graze-dw-ext',{
						templateUrl:'graze-dw-ext.html',
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
						templateUrl:'int-starflex-wl.html'
					})
					.when('/int-mini-star', {
						templateUrl:'int-mini-star-wl.html'
					})
					.when('/int-star-sc',{
						templateUrl:'int-starflex-sc.html'
					})
					.when('/int-star-rgb',{
						templateUrl:'int-starflex-rgb.html'
					})
					.when('/int-star-rgbw',{
						templateUrl:'int-star-rgbw.html'
					})
					.when('/int-star-dw',{
						templateUrl:'int-starflex-dw.html'
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
					.when('/int-edge-rgb',{
						templateUrl:'int-edge-rgb.html'
					})
					.when('/int-flat-sc',{
						templateUrl:'int-flat-sc.html'
					})
					.when('/int-flat-cc',{
						templateUrl:'int-flat-cc.html'
					})
					.when('/int-flat',{
						templateUrl:'int-flat.html'
					})
					.when('/int-power',{
						templateUrl:'int-power.html'
					})
					.when('/int-super-sc',{
						templateUrl:'int-superflex-sc.html'
					})
					.when('/int-superflex',{
						templateUrl:'int-superflex.html'
					})
					.when('/int-superflex-ho',{
						templateUrl:'int-superflex-ho.html'
					})
					.when('/int-x-flex',{
						templateUrl:'int-x-flex.html'
					})
				.when('/ext-flex',{
					templateUrl:'ext-flex.html'
				})
					.when('/ext-linear-wl',{
					templateUrl:'ext-linear-wl.html'
					})
					.when('/ext-linear-sc',{
					templateUrl:'ext-linear-sc.html'
					})
					.when('/ext-aqua-wl',{
					templateUrl:'ext-aqua-wl.html'
					})
					.when('/ext-mini-aqua-wl',{
					templateUrl:'ext-mini-aqua-wl.html'
					})
					.when('/ext-aqua-edge-wl',{
					templateUrl:'ext-aqua-edge-wl.html'
					})
					.when('/ext-super-aqua-wl',{
					templateUrl:'ext-super-aqua-wl.html'
					})
					.when('/ext-aqua-sc',{
					templateUrl:'ext-aqua-sc.html'
					})
					.when('/ext-super-aqua-sc',{
					templateUrl:'ext-super-aqua-sc.html'
					})
					.when('/ext-linear-rgb',{
					templateUrl:'ext-linear-rgb.html'
					})
					.when('/ext-aqua-rgbw',{
					templateUrl:'ext-aqua-rgbw.html'
					})
					.when('/ext-aqua-rgb',{
					templateUrl:'ext-aqua-rgb.html'
					})
					.when('/ext-aqua-edge-rgb',{
					templateUrl:'ext-aqua-edge-rgb.html'
					})
					.when('/ext-aqua-dw',{
					templateUrl:'ext-aqua-dw.html'
					})
			.when('/super-neon',{
					templateUrl:'super-neon.html'
				})
					.when('/ext-super-neon-x-dome',{
					templateUrl:'ext-super-neon-x-dome.html'
					})
					.when('/ext-super-neon-x-flat',{
					templateUrl:'ext-super-neon-x-flat.html'
					})
					.when('/ext-super-neon-x-edge',{
					templateUrl:'ext-super-neon-x-edge.html'
					})
					.when('/ext-super-neon-x-dome-sc',{
					templateUrl:'ext-super-neon-x-dome-sc.html'
					})
					.when('/ext-super-neon-x-flat-sc',{
					templateUrl:'ext-super-neon-x-flat-sc.html'
					})
					.when('/ext-super-neon-edge-sc',{
					templateUrl:'ext-super-neon-edge-sc.html'
					})
					.when('/ext-super-neon-x-dome-rgb',{
					templateUrl:'ext-super-neon-x-dome-rgb.html'
					})
					.when('/ext-super-neon-x-flat-rgb',{
					templateUrl:'ext-super-neon-x-flat-rgb.html'
					})
			.when('/xtrusion',{
                templateUrl:'xtrusion.html'
            })
			.when('/xtrusion-surf',{
                templateUrl:'xtrusion-surf.html'
            })
			.when('/xtrusion-rec',{
                templateUrl:'xtrusion-rec.html'
            })
			.when('/xtrusion-sus',{
                templateUrl:'xtrusion-sus.html'
            })
			.when('/power',{
                templateUrl:'power.html'
            })
			.when('/12v',{
                templateUrl:'12v.html'
            })
			.when('/24v',{
                templateUrl:'24v.html'
            })
			.when('/controls',{
                templateUrl:'controls.html'
            })
			.when('/converters',{
                templateUrl:'converters.html'
            })
			.when('/dmx-cntrl',{
                templateUrl:'dmx-cntrl.html'
            })
					.when('/kandi-touch',{
						templateUrl:'kandi-touch.html'
					})
					.when('/tpc',{
						templateUrl:'tpc.html'
					})
					.when('/lpc',{
						templateUrl:'lpc.html'
					})
					.when('/vlc',{
						templateUrl:'vlc.html'
					})
					.when('/lpcx',{
						templateUrl:'lpcx.html'
					})
			.when('/dmx-accs',{
                templateUrl:'dmx-accs.html'
            })
			.when('/accessories',{
                templateUrl:'accessories.html'
            })
					.when('/dmx-hub',{
						templateUrl:'dmx-wiring-hub.html'
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
                templateUrl:'bonfire.html'
				})	
				.when('/jaburritos',{
                templateUrl:'jaburritos.html'
				})
				.when('/lingo-cafe',{
                templateUrl:'lingo-cafe.html'
				})
				.when('/society-of-arts-and-crafts',{
                templateUrl:'society-of-arts-and-crafts.html'
				})
				.when('/sierra-gold',{
                templateUrl:'sierra-gold.html'
				})
				.when('/talde',{
                templateUrl:'talde.html'
				})
				.when('/segafredo-zanetti',{
                templateUrl:'segafredo-zanetti.html'
				})
				.when('/private-club',{
                templateUrl:'private-club.html'
				})
				.when('/mellow-mushroom',{
                templateUrl:'mellow-mushroom.html'
				})
				.when('/mcdonalds',{
                templateUrl:'mcdonalds.html'
				})
				.when('/hyatt-house',{
                templateUrl:'hyatt-house.html'
				})
				.when('/global-ucf',{
                templateUrl:'global-ucf.html'
				})
			.when('/projects-2',{
                templateUrl:'projects-2.html'
            })
				.when('/wh-fl',{
                templateUrl:'winter-garden-hospital.html'
            	})
				.when('/fmc-fl',{
                templateUrl:'fish-chapel.html'
            	})
				.when('/cse-fl',{
                templateUrl:'church-exchange.html'
            	})
				.when('/alegeus-fl',{
                templateUrl:'alegeus.html'
            	})
				.when('/tc-ny',{
                templateUrl:'tiffany-and-co.html'
            	})
				.when('/pat-ny',{
                templateUrl:'patagonia.html'
            	})
				.when('/ck-ny',{
                templateUrl:'city-kitchen.html'
            	})
				.when('/sbg-fl',{
                templateUrl:'state-bar-grill.html'
            	})
				.when('/bu-il',{
                templateUrl:'benedictine-university.html'
            	})	
				.when('/bm-tx',{
                templateUrl:'baybrook-mall.html'
            	})
				.when('/cm-tx',{
                templateUrl:'cowgirl-museum.html'
            	})
				.when('/gl-sh-il',{
                templateUrl:'global-showroom.html'
            	})
			.when('/projects-3',{
                templateUrl:'projects-3.html'
            })
				.when('/sidebar-grille',{
                templateUrl:'sidebar-grille.html'
            	})
				.when('/fremont',{
                templateUrl:'fremont.html'
            	})
				.when('/liquor-library',{
                templateUrl:'liquor-library.html'
            	})
				.when('/red-dog',{
                templateUrl:'red-dog.html'
            	})
				.when('/blue-man-group',{
                templateUrl:'blue-man-group.html'
            	})
				.when('/dkny',{
                templateUrl:'dkny.html'
            	})
				.when('/john-hancock',{
                templateUrl:'john-hancock.html'
            	})
				.when('/monte-carlo',{
                templateUrl:'monte-carlo.html'
            	})
				.when('/venetian',{
                templateUrl:'venetian.html'
            	})
				.when('/ny-ny',{
                templateUrl:'ny-ny.html'
            	})
				.when('/cyrus-one',{
                templateUrl:'cyrus-one.html'
            	})
				.when('/residential',{
                templateUrl:'residential.html'
            	})
				.when('/miron-construction',{
                templateUrl:'miron-construction.html'
            	})
				.when('/bitexco-tower',{
                templateUrl:'bitexco-tower.html'
            	})
			.when('/resources',{
                templateUrl:'resources.html'
            })
			.when('/re-graze',{
                templateUrl:'graze-resources.html'
            })
			.when('/re-flex',{
                templateUrl:'flex-resources.html'
            })
			.when('/re-neon',{
                templateUrl:'neon-resources.html'
            })
			.when('/re-xtrus',{
                templateUrl:'xtrus-resources.html'
            })
			.when('/re-power',{
                templateUrl:'power-resources.html'
            })
			.when('/re-controls',{
                templateUrl:'controls-resources.html'
            })
			.when('/legacy',{
                templateUrl:'legacy.html'
            })
				.when('/leg-ecove-wl',{
				templateUrl:'leg-ecove-wl.html'
				})
				.when('/leg-ecove-dw',{
				templateUrl:'leg-ecove-dw.html'
				})
				.when('/leg-ecove-sc',{
				templateUrl:'leg-ecove-sc.html'
				})
				.when('/leg-ecove-cc',{
				templateUrl:'leg-ecove-cc.html'
				})
				.when('/leg-cove-rs',{
				templateUrl:'leg-cove-rs.html'
				})
				.when('/leg-zilva',{
				templateUrl:'leg-zilva.html'
				})
				.when('/leg-mini-zilva',{
				templateUrl:'leg-mini-zilva.html'
				})
				.when('/leg-zilva-cc',{
				templateUrl:'leg-zilva-cc.html'
				})
				.when('/leg-egraze',{
				templateUrl:'leg-egraze.html'
				})
				.when('/leg-egraze-sc',{
				templateUrl:'leg-egraze-sc.html'
				})
				.when('/leg-graze-rs',{
				templateUrl:'leg-graze-rs.html'
				})
			.when('/reps',{
                templateUrl:'reps.html'
            })
			.when('/news',{
                templateUrl:'news.html'
            })
			.when('/news-2',{
                templateUrl:'news-2.html'
            })
			.when('/awards',{
                templateUrl:'awards.html'
            })
			.when('/press',{
                templateUrl:'press.html'
            })
			.when('/events',{
                templateUrl:'events.html'
            })
			.when('/contact',{
                templateUrl:'contact.html'
            })
			.when('/all-products',{
                templateUrl:'all-products.html'
            })
		
    });	
 app.directive('modaFooter', function() {
    return {
      templateUrl: 'footer.html'
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
})();
// SCROLL TO TOP
// app.directive('scrollTop', function() {
//    return {
//      templateUrl: 'scroll-top.html'
//    };
//  });


