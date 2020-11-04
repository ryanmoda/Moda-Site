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
	if (el == "resetItems") { //CAN
		console.log("items");
		$('#items').val('').trigger('change');
		$('#test').val('').trigger('change');
		changeHeader("Products");
	}
	if (el == "resetProvs") { //USA
		console.log("provs");
		$('#provs').val('').trigger('change');
		$('#test').val('').trigger('change');
		changeHeader("Products");
	}
	if (el == "resetTest") {
		console.log("international");
		$('#items').val('').trigger('change');
		$('#provs').val('').trigger('change');
		changeHeader("Products");
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

if (exclusives.includes(".LIN")) {
$('.js-provs').css('display','inline');
$('.js-items').css('display','none');
$('.js-test').css('display','none');
}

if (exclusives.includes(".POW")) {
$('.js-items').css('display','inline');
$('.js-provs').css('display','none');
$('.js-test').css('display','none');
}
if (exclusives.includes(".TP")) {
$('.js-test').css('display','inline');
$('.js-items').css('display','none');
$('.js-provs').css('display','none');
}

  $output.text( filterValue );
  $container.isotope({ filter: filterValue })
	if ( exclusives.includes(".LIN")) {document.getElementById("resetItems").click();}
	if ( exclusives.includes(".POW")) {document.getElementById("resetProvs").click();}
	if ( exclusives.includes(".TL")) {document.getElementById("resetTest").click();}

});


function changeHeader(txt){
	 document.getElementById("local-header").innerHTML = txt;
}
