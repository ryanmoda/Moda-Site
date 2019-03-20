$(document).ready(function(){
	var cove = $("input[id='cove']");
	var graze = $("input[id='graze']");
	var minicove = $("input[id='minicove']");
	var minigraze = $("input[id='minigraze']");
	var interior = $("input[id='interior']");
	var exterior = $("input[id='exterior']");
	var wl = $("input[id='whiteLight']");
	var sc = $("input[id='staticColor']");
	var gd = $("input[id='glowDim']");
	var cc = $("input[id='colorChanging']");
	var dw = $("input[id='dynamicWhite']");	
	
hideSources();
$('input[type=radio][name=productRadio]').change(function() {
productSelect();
dimmingSelect();
outputSelect();
opticSelect();

});
$('input[type=radio][name=locationRadio]').change(function() {
outputSelect();

});
	
$('input[type=radio][name=lightRadio]').change(function() {
dimmingSelect();
outputSelect();
opticSelect();
if ($("input[name='lightRadio']").is(":checked")) {
var radioValue = $("input[name='lightRadio']:checked").val();
deselectGroup(radioValue);
}
});


function hideSources() {
var divNames = ["wlType", "scType", "gdType", "ccType", "dwType", "opticsType"];
for (var i = 0; i < divNames.length; i++) {
	$("#" + divNames[i] + "").hide();
}
}	
	
function productSelect() {
	if ($("input[id='cove']").is(":checked") || $("input[id='graze']").is(":checked")) {
		$("input[id='6in']").prop('disabled', true);
		$("input[id='6in']").prop('checked', false);
		$("input[id='glowDim']").prop('disabled', true);
		$("input[id='glowDim']").prop('checked', false);
	}
	if ($("input[id='minigraze']").is(":checked")) {
		$("input[id='colorChanging']").prop('disabled', true);
		$("input[id='colorChanging']").prop('checked', false);
	}
		if (!$("input[id='minigraze']").is(":checked")) {
		$("input[id='colorChanging']").prop('disabled', false);
	}
	if ($("input[id='minicove']").is(":checked") || $("input[id='minigraze']").is(":checked")) {
		$("input[id='6in']").prop('disabled', false);
		$("input[id='glowDim']").prop('disabled', false);
	}
}
	
function dimmingSelect() {
	var dimming = ["elv", "010v", "dmx"];
	
	for (var i = 0; i < dimming.length; i++) {
		$("input[id=" + dimming[i] + "]").prop('disabled', false);
		$("input[id=" + dimming[i] + "]").prop('checked', false);
	}

if ( (minicove.is(":checked") || minigraze.is(":checked")) && (wl.is(":checked") || sc.is(":checked")) ) {	
	$("input[id='dmx']").prop('disabled', true); $("input[id='dmx']").prop('checked', false);
}	
if ( (minicove.is(":checked") || minigraze.is(":checked")) && gd.is(":checked") ) {
	$("input[id='elv']").prop('disabled', true); $("input[id='elv']").prop('checked', false);
	$("input[id='dmx']").prop('disabled', true); $("input[id='dmx']").prop('checked', false);
	
}
if ( (cove.is(":checked") || graze.is(":checked")) && (wl.is(":checked") || sc.is(":checked")) ) {
	$("input[id='010v']").prop('disabled', true); $("input[id='010v']").prop('checked', false);
	$("input[id='dmx']").prop('disabled', true); $("input[id='dmx']").prop('checked', false);	
}
if ( (cove.is(":checked") || graze.is(":checked") || minicove.is(":checked") || minigraze.is(":checked")) && (cc.is(":checked") || dw.is(":checked")) ) {
	$("input[id='elv']").prop('disabled', true); $("input[id='elv']").prop('checked', false);
	$("input[id='010v']").prop('disabled', true); $("input[id='010v']").prop('checked', false);	
}

}
	
function outputSelect() {
	var output = ["lo", "so", "sop", "ho", "hop"];
	for (var i = 0; i < output.length; i++) {
		$("input[id=" + output[i] + "]").prop('disabled', false);
		$("input[id=" + output[i] + "]").prop('checked', false);
	}

if ( (minicove.is(":checked") && wl.is(":checked")) || (minicove.is(":checked") && sc.is(":checked")) || (minigraze.is(":checked") && wl.is(":checked")) || (minigraze.is(":checked") && sc.is(":checked")) ) {
	$("input[id='lo']").prop('disabled', true); $("input[id='lo']").prop('checked', false);
	$("input[id='sop']").prop('disabled', true); $("input[id='sop']").prop('checked', false);
	$("input[id='hop']").prop('disabled', true); $("input[id='hop']").prop('checked', false);
}
if ( (minicove.is(":checked") && gd.is(":checked")) || (minicove.is(":checked") && cc.is(":checked")) || (minicove.is(":checked") && dw.is(":checked")) || (minigraze.is(":checked") && gd.is(":checked")) || (minigraze.is(":checked") && dw.is(":checked")) ) {
	$("input[id='lo']").prop('disabled', true); $("input[id='lo']").prop('checked', false);
	$("input[id='sop']").prop('disabled', true); $("input[id='sop']").prop('checked', false);
	$("input[id='ho']").prop('disabled', true); $("input[id='ho']").prop('checked', false);	
	$("input[id='hop']").prop('disabled', true); $("input[id='hop']").prop('checked', false);	
}
if ( (cove.is(":checked") && cc.is(":checked")) || (graze.is(":checked") && cc.is(":checked")) ) {
	$("input[id='lo']").prop('disabled', true); $("input[id='lo']").prop('checked', false);
	$("input[id='so']").prop('disabled', true); $("input[id='so']").prop('checked', false);
	$("input[id='sop']").prop('disabled', true); $("input[id='sop']").prop('checked', false);
	$("input[id='hop']").prop('disabled', true); $("input[id='hop']").prop('checked', false);
}

if ( (cove.is(":checked") && sc.is(":checked")) || (graze.is(":checked") && sc.is(":checked")) ) {
	$("input[id='lo']").prop('disabled', true); $("input[id='lo']").prop('checked', false);
	$("input[id='so']").prop('disabled', true); $("input[id='so']").prop('checked', false);
	$("input[id='sop']").prop('disabled', true); $("input[id='sop']").prop('checked', false);
}
//if ( (cove.is(":checked") && wl.is(":checked")) || (cove.is(":checked") && dw.is(":checked")) || (graze.is(":checked") && wl.is(":checked")) || (graze.is(":checked") && dw.is(":checked")) ) {
//
//}
if ( (cove.is(":checked") && dw.is(":checked") && exterior.is(":checked")) || (graze.is(":checked") && dw.is(":checked") && exterior.is(":checked")) ) {
	$("input[id='lo']").prop('disabled', true); $("input[id='lo']").prop('checked', false);
	$("input[id='sop']").prop('disabled', true); $("input[id='sop']").prop('checked', false);
}
}
	
function opticSelect() {
	var optic = ["6x", "10x", "25x", "40x", "1040x", "3060x", "365x", "310x"];
		for (var i = 0; i < optic.length; i++) {
		$("input[id=" + optic[i] + "]").prop('disabled', false);
		$("input[id=" + optic[i] + "]").prop('checked', false);
	}
if ( minicove.is(":checked") || cove.is(":checked") ) {
	$("#opticsType").hide();
}
if ( minigraze.is(":checked") || graze.is(":checked") ) {
	$("#opticsType").show();
}
if ( minigraze.is(":checked") ) {
		for (var j = 0; j < optic.length; j++) {
		if (optic[j] != "310x") {
		$("input[id=" + optic[j] + "]").prop('disabled', true);	$("input[id=" + optic[j] + "]").prop('checked', false);
	}}
}	
	
}	
	
function deselectGroup(el) {
	var radioNames = ["wlRadio", "scRadio", "gdRadio", "ccRadio", "dwRadio"];
	var divNames = ["wlType", "scType", "gdType", "ccType", "dwType"];
	var current;
	var div;
	switch (el) {
		case "whitelight":
			current = "wlRadio"; div = "wlType";
			break;
		case "staticcolor":
			current = "scRadio"; div = "scType";
			break;
		case "glowdim":
			current = "gdRadio"; div = "gdType";
			break;
		case "colorchanging":
			current = "ccRadio"; div = "ccType";
			break;
		case "dynamicwhite":
			current = "dwRadio"; div = "dwType";
			break;
	}
for (var i = 0; i < radioNames.length; i++) {
if (current != radioNames[i]) {	
$("input[type='radio'][name=" + radioNames[i] + "]").prop('checked', false);
$("#" + divNames[i] + "").hide();
$("#" + div).show();
}
}
}	
	
})

