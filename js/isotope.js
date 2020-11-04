//$(window).load(function(){
//    // All images, css style sheets and external resources are loaded!
//    alert('All resources have loaded');
//});
$(document).ready(function() {
$('.js-provs').css('display','none');
$('.js-test').css('display','none')
	$("#container").isotope({
            filter: '*',
        });
	// $("#container").isotope({
  //           filter: '*'
  //       });
});
//localStorage.setItem('visited', 'true');
var visited = localStorage.getItem('visited');

if (visited === null || visited === "false") {
  localStorage.setItem('visited', 'true');
location.reload();
}

window.onunload = function() {
  //localStorage.setItem("visited", "false");
  
}


// location.reload();
//createItems();
function mapFilter(el) {
	if (el == "resetStates") { //CAN
		console.log("states");
		$('#states').val('').trigger('change');
		$('#test').val('').trigger('change');
		changeHeader("CANADA");
	}
	if (el == "resetProvs") { //USA
		console.log("provs");
		$('#provs').val('').trigger('change');
		$('#test').val('').trigger('change');
		changeHeader("UNITED STATES");
	}
	if (el == "resetTest") {
		console.log("international");
		$('#states').val('').trigger('change');
		$('#provs').val('').trigger('change');
		changeHeader("INTERNATIONAL");
  }
}

var $container = $('#container').isotope({
  itemSelector: '.item',
});


var $output = $('#output');
// filter with selects and checkboxes
var $selects = $('#form-ui select');
var $checkboxes = $('#form-ui input');

$selects.add( $checkboxes ).change( function() {
  // map input values to an array
  var exclusives = [];
  var inclusives = [];
  // exclusive filters from selects
  $selects.each( function( i, elem ) {
    if ( elem.value ) {
      exclusives.push( elem.value );
    }
  });
  // inclusive filters from checkboxes
  $checkboxes.each( function( i, elem ) {
    // if checkbox, use value if checked
    if ( elem.checked ) {
      inclusives.push( elem.value );
    }
  });

  // combine exclusive and inclusive filters

  // first combine exclusives
  exclusives = exclusives.join('');
  var filterValue;
  if ( inclusives.length ) {
    // map inclusives with exclusives for
    filterValue = $.map( inclusives, function( value ) {
      return value + exclusives;
    });
    filterValue = filterValue.join(', ');
  } else {
    filterValue = exclusives;
  }

if (exclusives.includes(".CAN")) {
$('.js-states').css('display','none');
$('.js-test').css('display','none');
$('.js-provs').css('display','inline');
}
if (exclusives.includes(".US")) {
$('.js-states').css('display','inline');
$('.js-provs').css('display','none');
$('.js-test').css('display','none');
}
if (exclusives.includes(".INT")) {
$('.js-test').css('display','inline');
$('.js-states').css('display','none');
$('.js-provs').css('display','none');
}

  $output.text( filterValue );
  $container.isotope({ filter: filterValue })
	if ( exclusives.includes("CAN")) {document.getElementById("resetStates").click();}
	if ( exclusives.includes("US")) {document.getElementById("resetProvs").click();}
	if ( exclusives.includes("INT")) {document.getElementById("resetTest").click();}

});


function changeHeader(txt){
	 document.getElementById("local-header").innerHTML = txt;
}


	

  // loop over colors, sizes, prices
  // create one item for each
//  var $item = [];
/*
           $item[4] = $('<div />', {
          'class': 'item ' + 'AK' + ' US'
        });
        $item[4].append( '<p>Alaska Pro-Sell Agents</p><p>Anchorage</p><p>14800 Golden View Drive</p><p>Anchorage, AK 99516</p><p>Tel: (907) 677 7555</p><p>Fax: (907) 677 7509</p><p>www.alaskaprosell.com</p>');

            $item[5] = $('<div />', {
          'class': 'item ' + 'AK ' + 'US'
        });
        $item[5].append( '<p>Seatac Lighting</p><p>Seattle</p><p>4439 S. 134th Place Bld. E,</p><p>Tukwila, WA 98168</p><p>Tel: (206) 575 6865</p><p>Fax: (206) 575 8013</p><p>www.alaskaprosell.com</p>'); 
 
  $item[6] = $('<div />', {
    'class': 'item ' + 'AZ' + ' US'
  });
        $item[6].append( '<p>RC Lurie CO. INC.</p><p>Phoenix</p><p>1122 N. 7th St.</p><p>Phoenix, AZ 85006</p><p>Tel: (602) 258 2400</p><p>Fax: (602) 252 5018</p><p>www.rclurie.com</p>'); 
  
   $item[7] = $('<div />', {
    'class': 'item ' + 'AZ' + ' US'
  });
        $item[7].append( '<p>RC Lurie CO. INC.</p><p>Tucson</p><p>1024 South Plumber</p><p>Tucson, AZ 85719</p><p>Tel: (520) 647 2700</p><p>Fax: (520) 623 0702</p><p>www.rclurie.com</p>'); 
  
    $item[8] = $('<div />', {
    'class': 'item ' + 'AR' + ' US' 
  });
        $item[8].append( '<p>Malmstrom White</p><p>Litle Rock</p><p>11617 Kanis Road</p><p>Little Rock, AR 72211</p><p>Tel: (501) 224 2775</p><p>Fax: (501) 224 4000</p><p>www.malstromwhite.com</p>');
  
    $item[9] = $('<div />', {
    'class': 'item ' + 'AR' + ' US'
  });
        $item[9].append( '<p>Malmstrom White</p><p>Fayetteville</p><p>2804 Main Drive, Suite B</p><p>Fayetteville, AR 72704</p><p>Tel: (479) 301 2158</p><p>Fax: (501) 224 4000</p><p>www.malstromwhite.com</p>');

     $item[10] = $('<div />', {
    'class': 'item ' + 'CA' + ' US'
  });
        $item[10].append( '<p>Performance Lighting</p><p>Irvine</p><p>5 Jenner, Suite 130</p><p>Irvine, CA 92618</p><p>Tel: (949) 878 9000</p><p>Fax: (949) 878 9001</p><p>www.performanceltg.com</p>');
     $item[11] = $('<div />', {
    'class': 'item ' + 'CA' + ' US'
  });
        $item[11].append( '<p>The Lighting Element</p><p>San Diego</p><p>16885 West Bernardo Dr., Suite 380</p><p>San Deigo, CA 92127</p><p>Tel: (858) 322 6000</p><p>www.thelightingelement.com</p>'); 
  
      $item[12] = $('<div />', {
    'class': 'item ' + 'CA' + ' US'
  });
        $item[12].append( '<p>CJS Lighting</p><p>Roseville</p><p>290 Derek Pl,</p><p>Roseville, CA 95678</p><p>Tel: (916) 774 6888</p><p>www.cjslighting.com</p>');
  
       $item[13] = $('<div />', {
    'class': 'item ' + 'CA' + ' US'
  });
        $item[13].append( '<p>Mar Vista Sales Inc.</p><p>Ventura</p><p>1650 Palma Drive, Suite 108</p><p>Ventura, CA 93003</p><p>Tel: (805) 642 0953</p><p>Fax: (805) 642 0953</p><p>www.marvistasales.com</p>');
  
        $item[14] = $('<div />', {
    'class': 'item ' + 'CA' + ' US'
  });
        $item[14].append( '<p>Archetype Lighting Sales</p><p>San Francisco</p><p>375 Potrero Avenue, Suite 4</p><p>San Francisco, CA 94103</p><p>Tel: (415) 355 9030</p><p>Fax: (415) 355 9029</p><p>www.archetypelighting.com</p>');
        // add to items

 for (var k=0; k < $item.length; k ++) { 
        $items = $items ? $items.add( $item[k] ) : $item[k];
  $items.appendTo( $('#container') );
 }
}*/
