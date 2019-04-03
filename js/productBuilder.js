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
	
	var newSKU;
	var cookieArr;
	var products;

	
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
		$("input[id='exterior']").prop('disabled', false);
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
		$("input[id='exterior']").prop('disabled', true); $("input[id='exterior']").prop('checked', false);

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
	
$("#sku").click(function () {
var prodVal = product.filter(":checked").val();
var locVal = location.filter(":checked").val();
var outVal = output.filter(":checked").val();
var wlVal = wlRadio.filter(":checked").val();
var scVal = scRadio.filter(":checked").val();
var gdVal = gdRadio.filter(":checked").val();
var ccVal = ccRadio.filter(":checked").val();
var dwVal = dwRadio.filter(":checked").val();
var lightVal = light.filter(":checked").val();
var typeRe = /^(?:[^-]*\-){4}([^-]*)/g;
var sourceVal;
var lengthVal = prodLength.filter(":checked").val();
var dimVal = dimming.filter(":checked").val();	
var opticVal = opticRadio.filter(":checked").val();

	
	if (isValidated()) {
		
	
	
	var oldSKU = "";
	oldSKU += prodVal;
	oldSKU += locVal;
	oldSKU += "-";
	oldSKU += outVal;
	oldSKU += "-S1-S-";
	
	oldSKU += wlVal;
	oldSKU += scVal;
	oldSKU += gdVal;
	oldSKU += ccVal;
	oldSKU += dwVal;
	
	
	
	oldSKU += "-";
	oldSKU += lengthVal;
	
	oldSKU += "-";
	oldSKU += dimVal;	
		
	if ( opticVal != null ) {
	oldSKU += "-";
	oldSKU += opticVal;
	}
	
	oldSKU = oldSKU.replace("undefined", ""); oldSKU = oldSKU.replace("undefined", ""); oldSKU = oldSKU.replace("undefined", ""); oldSKU = oldSKU.replace("undefined", "");oldSKU.replace("undefined", "");
	sourceVal = typeRe.exec(oldSKU);
	skuConverter(prodVal, locVal, lengthVal, lightVal, sourceVal[1], dimVal, outVal);
//	alert(lightVal + " " + sourceVal[1]);
	
	}
	
	});

$("#clear").click(function () {
		var optic = ["6x", "10x", "25x", "40x", "1040x", "3060x", "365x", "310x"];
		var output = ["lo", "so", "sop", "ho", "hop"];
		var dimOptions = ["elv", "010v", "dmx"];
		var lightOptions = ["whiteLight", "staticColor", "glowDim", "colorChanging", "dynamicWhite"];
		var lengthOptions = ["6in", "1ft", "4ft"];


		var radioNames = ["productRadio", "locationRadio", "lengthRadio", "lightRadio", "wlRadio", "scRadio", "gdRadio", "ccRadio", "dwRadio", "dimmingRadio", "outputRadio", "opticRadio"];
	for (var i = 0; i < radioNames.length; i++) {
		$("input[type='radio'][name=" + radioNames[i] + "]").prop('checked', false);
	}
		for (var j = 0; j < optic.length; j++) {
		$("input[id=" + optic[j] + "]").prop('disabled', false);
	}
	for (var k = 0; k < output.length; k++) {
		$("input[id=" + output[k] + "]").prop('disabled', false);
	}
	for (var l = 0; l < dimOptions.length; l++) {
		$("input[id=" + dimOptions[l] + "]").prop('disabled', false);
	}
	for (var m = 0; m < lightOptions.length; m++) {
		$("input[id=" + lightOptions[m] + "]").prop('disabled', false);
	}
	for (var n = 0; n < lengthOptions.length; n++) {
		$("input[id=" + lengthOptions[n] + "]").prop('disabled', false);
	}
$("#opticsType").hide();
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
	if ((minigraze.is(":checked") || graze.is(":checked")) &&  (typeof opticRadio.filter(":checked").val() === "undefined")) {
		$(".validationText:eq(11)").show();
		allSelected = false;
	}
	return allSelected;
}	

function hideValidation(val) {
	$(".validationText:eq(" + val + ")").hide();
}
	
function skuConverter(pr, loc, le, li, src, dim, out) {
	var skuArray = {
		"MMC": {
			"I": {
				"WL": {
					"E": {
						"SO": {
							"6": {
								"18K": "090-0001",
								"22K": "090-0003",
								"27K": "090-0005",
								"30K": "090-0006",
								"35K": "090-0008",
								"40K": "090-0009",
								"65K": "090-0014",
							},
							"1": {
								"18K": "090-1001",
								"22K": "090-1003",
								"27K": "090-1005",
								"30K": "090-1006",
								"35K": "090-1008",
								"40K": "090-1009",
								"65K": "090-1014",
							},
							"4": {
								"18K": "090-3001",
								"22K": "090-3003",
								"27K": "090-3005",
								"30K": "090-3006",
								"35K": "090-3008",
								"40K": "090-3009",
								"65K": "090-3014",
							}
						},
						"HO": {
							"1": {
								"18K": "090-1201",
								"22K": "090-1203",
								"27K": "090-1205",
								"30K": "090-1206",
								"35K": "090-1208",
								"40K": "090-1209",
								"65K": "090-1214",
							},
							"4": {
								"18K": "090-3201",
								"22K": "090-3203",
								"27K": "090-3205",
								"30K": "090-3206",
								"35K": "090-3208",
								"40K": "090-3209",
								"65K": "090-3214",
							}
						}
						
					},
					"0": {
						"SO": {
							"1": {
								"18K": "095-1001",
								"22K": "095-1003",
								"27K": "095-1005",
								"30K": "095-1006",
								"35K": "095-1008",
								"40K": "095-1009",
								"65K": "095-1014",
							},
							"4": {
								"18K": "095-3001",
								"22K": "095-3003",
								"27K": "095-3005",
								"30K": "095-3006",
								"35K": "095-3008",
								"40K": "095-3009",
								"65K": "095-3014",
							}
						},
						"HO": {
							"1": {
								"18K": "095-1201",
								"22K": "095-1203",
								"27K": "095-1205",
								"30K": "095-1206",
								"35K": "095-1208",
								"40K": "095-1209",
								"65K": "095-1214",
							},
							"4": {
								"18K": "095-3201",
								"22K": "095-3203",
								"27K": "095-3205",
								"30K": "095-3206",
								"35K": "095-3208",
								"40K": "095-3209",
								"65K": "095-3214",
							}
							
						}
						
					}
				},
				"SC": {
					"E": {
						"SO": {
							"6": {
								"R": "091-0000",
								"G": "091-0001",
								"B": "091-0002",
								"A": "091-0003",
								"Y": "091-0004",
								"P": "091-0005",
								"C": "091-0006",
								"V": "091-0007",
								"T": "091-0008",
								"IB": "091-0009",
								"LG": "091-0010",
								"GY": "091-0011",
								"DB": "091-0012",
								"DO": "091-0013"
							},
							"1": {
								"R": "091-1000",
								"G": "091-1001",
								"B": "091-1002",
								"A": "091-1003",
								"Y": "091-1004",
								"P": "091-1005",
								"C": "091-1006",
								"V": "091-1007",
								"T": "091-1008",
								"IB": "091-1009",
								"LG": "091-1010",
								"GY": "091-1011",
								"DB": "091-1012",
								"DO": "091-1013"	
							},
							"4": {
								"R": "091-3000",
								"G": "091-3001",
								"B": "091-3002",
								"A": "091-3003",
								"Y": "091-3004",
								"P": "091-3005",
								"C": "091-3006",
								"V": "091-3007",
								"T": "091-3008",
								"IB": "091-3009",
								"LG": "091-3010",
								"GY": "091-3011",
								"DB": "091-3012",
								"DO": "091-3013"
							}
						},
						"HO": {
							"1": {
								"R": "091-1200",
								"G": "091-1201",
								"B": "091-1202",
								"A": "091-1203",
								"Y": "091-1204",
								"P": "091-1205",
								"C": "091-1206",
								"V": "091-1207",
								"T": "091-1208",
								"IB": "091-1209",
								"LG": "091-1210",
								"GY": "091-1211",
								"DB": "091-1212",
								"DO": "091-1213"
							},
							"4": {
								"R": "091-3200",
								"G": "091-3201",
								"B": "091-3202",
								"A": "091-3203",
								"Y": "091-3204",
								"P": "091-3205",
								"C": "091-3206",
								"V": "091-3207",
								"T": "091-3208",
								"IB": "091-3209",
								"LG": "091-3210",
								"GY": "091-3211",
								"DB": "091-3212",
								"DO": "091-3213"
							}
						}
					},
					"0": {
						"SO": {
							"1": {
								"R": "096-1000",
								"G": "096-1001",
								"B": "096-1002",
								"A": "096-1003",
								"Y": "096-1004",
								"P": "096-1005",
								"C": "096-1006",
								"V": "096-1007",
								"T": "096-1008",
								"IB": "096-1009",
								"LG": "096-1010",
								"GY": "096-1011",
								"DB": "096-1012",
								"DO": "096-1013"
							},
							"4": {
								"R": "096-3000",
								"G": "096-3001",
								"B": "096-3002",
								"A": "096-3003",
								"Y": "096-3004",
								"P": "096-3005",
								"C": "096-3006",
								"V": "096-3007",
								"T": "096-3008",
								"IB": "096-3009",
								"LG": "096-3010",
								"GY": "096-3011",
								"DB": "096-3012",
								"DO": "096-3013"
							}
						},
						"HO": {
							"1": {
								"R": "096-1200",
								"G": "096-1201",
								"B": "096-1202",
								"A": "096-1203",
								"Y": "096-1204",
								"P": "096-1205",
								"C": "096-1206",
								"V": "096-1207",
								"T": "096-1208",
								"IB": "096-1209",
								"LG": "096-1210",
								"GY": "096-1211",
								"DB": "096-1212",
								"DO": "096-1213"
							},
							"4": {
								"R": "096-3200",
								"G": "096-3201",
								"B": "096-3202",
								"A": "096-3203",
								"Y": "096-3204",
								"P": "096-3205",
								"C": "096-3206",
								"V": "096-3207",
								"T": "096-3208",
								"IB": "096-3209",
								"LG": "096-3210",
								"GY": "096-3211",
								"DB": "096-3212",
								"DO": "096-3213"
							}
						}
					}
				},
				"GD": {
					"0": {
						"SO": {
							"1": {
								"GD2718": "097-1002",
								"GD3522": "097-1025"
							},
							"4": {
								"GD2718": "097-3002",
								"GD3522": "097-3025"
							}
						}
					}
				},
				"CC": {
					"D": {
						"SO": {
							"1": {
								"RGB": "105-1000",
								"RGB27": "105-1205",
								"RGB30": "105-1206",
								"RGB35": "105-1208",
								"RGB40": "105-1209",
								"RGBA": "105-1603"
							},
							"4": {
								"RGB": "105-3000",
								"RGB27": "105-3205",
								"RGB30": "105-3206",
								"RGB35": "105-3208",
								"RGB40": "105-3209",
								"RGBA": "105-3603"	
							}
						}
					}
				},
				"DW": {
					"D": {
						"SO": {
							"1": {
								"DW": "106-1003",
								"DWW": "106-1201",
								"DC": "106-1401"
							},
							"4": {
								"DW": "106-3003",
								"DWW": "106-3201",
								"DC": "106-3401"
							}
						}
					}
				},
			}
		},
		"MMG" : {}	
	}
newSKU = skuArray[pr][loc][li][dim][out][le][src];

	
$.ajax({
    type: "POST",
    url: 'php/productSku.php',
    dataType: 'text',
    data: { sku: newSKU },
	success: function(data) {
		var index = data.indexOf(" images");
		var prodName = data.substr(0, index);
		var imgUrl = data.substr(index+1);
		products = JSON.parse(localStorage.getItem('product_data'));
		if (products === null) { //no data stored in localStorage
			products = [];
		}
		alert("prodName: " + prodName + "\nimg url: " + imgUrl);
		cookieArr = {"sku": newSKU, "product": prodName, "img": imgUrl, "quantity": 1};

		products.push(cookieArr);
		
		localStorage.setItem('product_data', JSON.stringify(products));
		window.location.href = "#/place-order";
	}
});

}	
	
})

function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  } else {
   expires = "";
  }
  document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
}

