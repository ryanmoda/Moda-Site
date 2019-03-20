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
	
	var product = $("input[name='productRadio']");
	var location = $("input[name='locationRadio']");
	var prodLength = $("input[name='lengthRadio']");
	var light = $("input[name='lightRadio']");
	var wlRadio = $("input[name='wlRadio']");
	var scRadio = $("input[name='scRadio']");
	var gdRadio = $("input[name='gdRadio']");
	var ccRadio = $("input[name='ccRadio']");
	var dwRadio = $("input[name='dwRadio']");
	var opticRadio = $("input[name='opticRadio']");
	var dimming = $("input[name='dimmingRadio']");
	var output = $("input[name='outputRadio']");
	
hideSources();
$('input[type=radio][name=productRadio]').change(function() {
hideValidation(0);
productSelect();
dimmingSelect();
outputSelect();
opticSelect();

});
$('input[type=radio][name=locationRadio]').change(function() {
hideValidation(1);
outputSelect();
});
	
$('input[type=radio][name=lengthRadio]').change(function() {
hideValidation(2);
});
	
$('input[type=radio][name=lightRadio]').change(function() {
dimmingSelect();
outputSelect();
opticSelect();
hideValidation(3);
if ($("input[name='lightRadio']").is(":checked")) {
var radioValue = $("input[name='lightRadio']:checked").attr('id');
deselectGroup(radioValue);
}
});

$('input[type=radio][name=wlRadio]').change(function() {
hideValidation(4);
});
$('input[type=radio][name=scRadio]').change(function() {
hideValidation(5);
});
$('input[type=radio][name=gdRadio]').change(function() {
hideValidation(6);
});
$('input[type=radio][name=ccRadio]').change(function() {
hideValidation(7);
});
$('input[type=radio][name=dwRadio]').change(function() {
hideValidation(8);
});

$('input[type=radio][name=dimmingRadio]').change(function() {
hideValidation(9);
});
$('input[type=radio][name=outputRadio]').change(function() {
hideValidation(10);
});
$('input[type=radio][name=opticRadio]').change(function() {
hideValidation(11);
});
	
function hideSources() {
var divNames = ["wlType", "scType", "gdType", "ccType", "dwType", "opticsType"];
var required = "validationText";

for ( var j = 0; j < $('.validationText').length; j++ ) {	
$("." + required + ":eq(" + j + ")").hide();	
}
	
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
		case "whiteLight":
			current = "wlRadio"; div = "wlType"; 
			break;
		case "staticColor":
			current = "scRadio"; div = "scType";
			break;
		case "glowDim":
			current = "gdRadio"; div = "gdType";
			break;
		case "colorChanging":
			current = "ccRadio"; div = "ccType";
			break;
		case "dynamicWhite":
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
	
$("#skuButton").click(function () {
//	var radios = [ wlRadio, scRadio, gdRadio, ccRadio, dwRadio];
//	for (var i = 0; i < radios.length; i++) {
//		if ( radios[i].filter(":checked").val() == null ) {
//			radios[i].filter(":checked").val() = "";
//		}
//	}
	
	if (isValidated()) {
		
	
	
	var oldSKU = "";
	oldSKU += product.filter(":checked").val();
	oldSKU += location.filter(":checked").val();
	oldSKU += "-";
	oldSKU += output.filter(":checked").val();
	oldSKU += "-S1-S-";
	
	oldSKU += wlRadio.filter(":checked").val();
	oldSKU += scRadio.filter(":checked").val();
	oldSKU += gdRadio.filter(":checked").val();
	oldSKU += ccRadio.filter(":checked").val();
	oldSKU += dwRadio.filter(":checked").val();
	
	
	
	oldSKU += "-";
	oldSKU += prodLength.filter(":checked").val();
	
	if ( opticRadio.filter(":checked").val() != null ) {
	oldSKU += "-";
	oldSKU += opticRadio.filter(":checked").val();
	}
	
	oldSKU = oldSKU.replace("undefined", ""); oldSKU = oldSKU.replace("undefined", ""); oldSKU = oldSKU.replace("undefined", ""); oldSKU = oldSKU.replace("undefined", "");oldSKU.replace("undefined", "");
	alert(oldSKU);
	}
	
	});
	
function isValidated() {
	var allSelected = true;
	if (typeof product.filter(":checked").val() === "undefined") {
		$(".validationText:eq(0)").show();
		allSelected = false;
	}
	if (typeof location.filter(":checked").val() === "undefined") {
		$(".validationText:eq(1)").show();
		allSelected = false;
	}
	if (typeof prodLength.filter(":checked").val() === "undefined") {
		$(".validationText:eq(2)").show();
		allSelected = false;
	}
	if (typeof light.filter(":checked").val() === "undefined") {
		$(".validationText:eq(3)").show();
		allSelected = false;
	}
	if ((wl.is(":checked")) && (typeof wlRadio.filter(":checked").val() === "undefined")) {
		$(".validationText:eq(4)").show();
		allSelected = false;	
	}
	if ((sc.is(":checked")) && (typeof scRadio.filter(":checked").val() === "undefined")) {
		$(".validationText:eq(5)").show();
		allSelected = false;	
	}
	if ((gd.is(":checked")) && (typeof gdRadio.filter(":checked").val() === "undefined")) {
		$(".validationText:eq(6)").show();
		allSelected = false;	
	}
	if ((cc.is(":checked")) && (typeof ccRadio.filter(":checked").val() === "undefined")) {		
		$(".validationText:eq(7)").show();
		allSelected = false;	
	}
	if ((dw.is(":checked")) && (typeof dwRadio.filter(":checked").val() === "undefined")) {
		$(".validationText:eq(8)").show();
		allSelected = false;	
	}
	if (typeof dimming.filter(":checked").val() === "undefined") {
		$(".validationText:eq(9)").show();
		allSelected = false;
	}
	if (typeof output.filter(":checked").val() === "undefined") {
		$(".validationText:eq(10)").show();
		allSelected = false;
	}
	if ((minigraze.is(":checked") || graze.is(":checked")) && typeof opticRadio.filter(":checked").val() === "undefined") {
		$(".validationText:eq(11)").show();
		allSelected = false;
	}
	return allSelected;
}	

function hideValidation(val) {
	$(".validationText:eq(" + val + ")").hide();
}
	
})

