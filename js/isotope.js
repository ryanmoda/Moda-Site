//$(window).load(function(){
//    // All images, css style sheets and external resources are loaded!
//    alert('All resources have loaded');
//});
$(document).ready(function() {
$('.js-provs').css('display','none');
$('.js-test').css('display','none')
	$("#container").isotope({
            filter: '*'
        });
	// $("#container").isotope({
  //           filter: '*'
  //       });
});
//createItems();

var visited = localStorage.getItem('visited');

if (visited === null || visited === "false") {
  localStorage.setItem('visited', 'true');
location.reload();
}

window.onunload = function() {
  //localStorage.setItem("visited", "false");

}




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
  itemSelector: '.item'
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


	

