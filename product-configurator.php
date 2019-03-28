<link href="css/new-navbar.css" rel="stylesheet" type="text/css">
<link href="css/readMore.css" rel="stylesheet" type="text/css">
<link href="css/resources.css" rel="stylesheet" type="text/css">
<link href="css/events.css" rel="stylesheet" type="text/css">
<link href="css/resources.css" rel="stylesheet" type="text/css">
<link href="css/slick-theme.css" rel="stylesheet" type="text/css">
<link href="css/mmc-wl.css" rel="stylesheet" type="text/css">
<!--<script src="js/scrollSpy.js"></script>-->

<style>
	.grid-container--prod {
    grid-template-columns: repeat(auto-fit, 246px);
}
	.grid-container {
    display: grid;
}
</style>
<script>
$(document).ready(function(){
    $(this).scrollTop(0);
});
ga('set', 'page', '/product-configurator.html');
ga('send', 'pageview');
</script>

<div id="product-builder" style="padding-top: 110px; margin-bottom: 50px;">
<div class="midContent radio-toolbar">
<div id="productType" class="margin3">
<div class="row">
<div class="col-sm-3">
	<h1 class="buildHdr">Product Family</h1>
	<p class="validationText">Required</p>
	</div>
<div class="col-sm-9">	
<div class="grid-container grid-container--prod"><div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="productRadio" id="minicove" value="MMC">
  <label class="form-check-label" for="minicove">
    Mini Cove
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="productRadio" id="minigraze" value="MMG">
  <label class="form-check-label" for="minigraze">
    Mini Graze
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="productRadio" id="cove" value="MC">
  <label class="form-check-label" for="cove">
	Cove
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="productRadio" id="graze" value="MG">
  <label class="form-check-label" for="graze">
	Graze
	</label>
</div></div></div></div>
</div>	
	
	</div>
	
<div id="locationType" class="margin3">
<div class="row">
<div class="col-sm-3">
	<h1 class="buildHdr">Product Location</h1>
	<p class="validationText">Required</p>
	</div>
	
<div class="col-sm-9"><div class="grid-container grid-container--prod"><div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="locationRadio" id="interior" value="I">
  <label class="form-check-label" for="interior">
    Interior
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="locationRadio" id="exterior" value="E">
  <label class="form-check-label" for="exterior">
    Exterior
  </label>
</div></div></div></div>
</div>	
	
	</div>
	
<div class="row margin3">
<div class="col-sm-3">
	<h1 class="buildHdr">Length</h1>
	<p class="validationText">Required</p>
	</div>
<div class="col-sm-9"><div class="grid-container grid-container--prod"><div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="lengthRadio" id="6in" value="6">
  <label class="form-check-label" for="6in">
    6in 
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="lengthRadio" id="1ft" value="1">
  <label class="form-check-label" for="1ft">
    1ft 
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="lengthRadio" id="4ft" value="4">
  <label class="form-check-label" for="4ft">
    4ft
  </label>
</div></div></div></div>
</div>
	
<div id="lightType" class="margin3">
<div class="row">
<div class="col-sm-3">
	<h1 class="buildHdr">Type of Light</h1>
	<p class="validationText">Required</p>
	</div>
<div class="col-sm-9"><div class="grid-container grid-container--prod"><div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="lightRadio" id="whiteLight" value="WL">
  <label class="form-check-label" for="whiteLight">
    White Light 
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="lightRadio" id="staticColor" value="SC">
  <label class="form-check-label" for="staticColor">
    Static Color
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="lightRadio" id="glowDim" value="GD">
  <label class="form-check-label" for="glowDim">
	Glowdim
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="lightRadio" id="colorChanging" value="CC">
  <label class="form-check-label" for="colorChanging">
	Color Changing
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="lightRadio" id="dynamicWhite" value="DW">
  <label class="form-check-label" for="dynamicWhite">
	Dynamic Whites
	</label>
</div></div></div></div>
</div>	
	
	</div>	
	
<div id="wlType" class="margin3">
<div class="row">
<div class="col-sm-3 margin3">
	<h1 class="buildHdr" style="padding-bottom: 10px;">Source of Light</h1>
	<p>White Light</p>
	<p class="validationText" style="margin-top: 0px;">Required</p>
	</div>

<div class="col-sm-9"><div class="grid-container grid-container--prod"><div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="wlRadio" id="18k" value="18K">
  <label class="form-check-label" for="18k">
    1800K 
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="wlRadio" id="22k" value="22K">
  <label class="form-check-label" for="22k">
    2200K
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="wlRadio" id="27k" value="27K">
  <label class="form-check-label" for="27k">
	2700K
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="wlRadio" id="30k" value="30K">
  <label class="form-check-label" for="30k">
	3000K
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="wlRadio" id="35k" value="35K">
  <label class="form-check-label" for="35k">
	3500K
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="wlRadio" id="40k" value="40K">
  <label class="form-check-label" for="40k">
	4000K
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="wlRadio" id="65k" value="65K">
  <label class="form-check-label" for="65k">
	6500K
	</label>
</div></div></div></div>
</div>	
	</div>
	
<div id="scType" class="margin3">
<div class="row">
<div class="col-sm-3" style="margin-bottom: 160px;">
	<h1 class="buildHdr" style="padding-bottom: 10px;">Source of Light</h1>
	<p>Static Color</p>
	<p class="validationText" style="margin-top: 0px;">Required</p>
	</div>

<div class="col-sm-9"><div class="grid-container grid-container--prod"><div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="scRadio" id="red" value="R">
  <label class="form-check-label" for="red">
    Red 
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="scRadio" id="darkOrange" value="DO">
  <label class="form-check-label" for="darkOrange">
    Dark Orange
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="scRadio" id="orange" value="O">
  <label class="form-check-label" for="orange">
	Orange
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="scRadio" id="amber" value="A">
  <label class="form-check-label" for="amber">
	Amber
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="scRadio" id="goldenYellow" value="GY">
  <label class="form-check-label" for="goldenYellow">
	Golden Yellow
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="scRadio" id="yellow" value="Y">
  <label class="form-check-label" for="yellow">
	Yellow
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="scRadio" id="lightGreen" value="LG">
  <label class="form-check-label" for="lightGreen">
	Light Green
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="scRadio" id="green" value="G">
  <label class="form-check-label" for="green">
	Green
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="scRadio" id="turquoise" value="T">
  <label class="form-check-label" for="turquoise">
	Turquoise
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="scRadio" id="iceBlue" value="IB">
  <label class="form-check-label" for="iceBlue">
	Ice Blue
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="scRadio" id="cyan" value="C">
  <label class="form-check-label" for="cyan">
	Cyan
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="scRadio" id="blue" value="B">
  <label class="form-check-label" for="blue">
	Blue
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="scRadio" id="darkBlue" value="DB">
  <label class="form-check-label" for="darkBlue">
	Dark Blue
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="scRadio" id="violet" value="V">
  <label class="form-check-label" for="violet">
	Violet
	</label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="scRadio" id="pink" value="P">
  <label class="form-check-label" for="pink">
	Pink
	</label>
</div></div></div></div>
</div>	
	</div>
	
<div id="gdType" class="margin3">
<div class="row">
<div class="col-sm-3 margin3">
	<h1 class="buildHdr" style="padding-bottom: 10px;">Source of Light</h1>
	<p>Glowdim</p>
	<p class="validationText" style="margin-top: 0px;">Required</p>
	</div>

<div class="col-sm-9"><div class="grid-container grid-container--prod"><div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="gdRadio" id="27-18" value="GD2718">
  <label class="form-check-label" for="27-18">
    2700K - 1800K 
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="gdRadio" id="35-22" value="GD3522">
  <label class="form-check-label" for="35-22">
    3500K - 2200K
  </label>
</div></div>
</div></div>
</div>	
	</div>	

<div id="ccType" class="margin3">
<div class="row">
<div class="col-sm-3 margin3">
	<h1 class="buildHdr" style="padding-bottom: 10px;">Source of Light</h1>
	<p>Color Changing</p>
	<p class="validationText" style="margin-top: 0px;">Required</p>
	</div>

<div class="col-sm-9"><div class="grid-container grid-container--prod"><div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="ccRadio" id="rgb" value="RGB">
  <label class="form-check-label" for="rgb">
    RGB
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="ccRadio" id="rgbw27" value="RGB27">
  <label class="form-check-label" for="rgbw27">
    RGBW (2700K)
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="ccRadio" id="rgbw30" value="RGB30">
  <label class="form-check-label" for="rgbw30">
    RGBW (3000K)
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="ccRadio" id="rgbw35" value="RGB35">
  <label class="form-check-label" for="rgbw35">
    RGBW (3500K)
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="ccRadio" id="rgbw40" value="RGB40">
  <label class="form-check-label" for="rgbw40">
    RGBW (4000K)
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="ccRadio" id="rgba" value="RGBA">
  <label class="form-check-label" for="rgba">
    RGBA
  </label>
</div></div>
</div></div>
</div>	
	</div>

<div id="dwType" class="margin3">
<div class="row">
<div class="col-sm-3 margin3">
	<h1 class="buildHdr" style="padding-bottom: 10px;">Source of Light</h1>
	<p>Dynamic Whites</p>
	<p class="validationText" style="margin-top: 0px;">Required</p>
	</div>

<div class="col-sm-9"><div class="grid-container grid-container--prod"><div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="dwRadio" id="dynw" value="DW">
  <label class="form-check-label" for="dynw">
    Dynamic White <br> (2200K - 6500K)
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="dwRadio" id="dww" value="DWW">
  <label class="form-check-label" for="dww">
    Dynamic Warm <br> (1800K - 3000K)
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="dwRadio" id="dc" value="DC">
  <label class="form-check-label" for="dc">
    Dynamic Cool <br> (3500K - 6500K)
  </label>
</div></div>
</div></div>
</div>	
	</div>	

<div id="dimmingType" class="margin3">
<div class="row">
<div class="col-sm-3">
	<h1 class="buildHdr">Dimming Options</h1>
	<p class="validationText">Required</p>
	</div>
<div class="col-sm-9"><div class="grid-container grid-container--prod"><div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="dimmingRadio" id="elv" value="E">
  <label class="form-check-label" for="elv">
    ELV
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="dimmingRadio" id="010v" value="0">
  <label class="form-check-label" for="010v">
    0-10V
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="dimmingRadio" id="dmx" value="D">
  <label class="form-check-label" for="dmx">
    DMX
  </label>
</div></div></div></div>
</div>	
	
	</div>	
<div id="outputType" class="margin3">
<div class="row">
<div class="col-sm-3">
	<h1 class="buildHdr">Output Options</h1>
	<p class="validationText">Required</p>
	</div>
<div class="col-sm-9"><div class="grid-container grid-container--prod"><div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="outputRadio" id="lo" value="LO">
  <label class="form-check-label" for="lo">
    Low Output
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="outputRadio" id="so" value="SO">
  <label class="form-check-label" for="so">
    Standard Output
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="outputRadio" id="sop" value="SOP">
  <label class="form-check-label" for="sop">
    Standard Output Plus
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="outputRadio" id="ho" value="HO">
  <label class="form-check-label" for="ho">
    High Output
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="outputRadio" id="hop" value="HOP">
  <label class="form-check-label" for="hop">
    High Output Plus
  </label>
</div></div></div></div>
</div>	
	
	</div>
	
<div id="opticsType" class="margin3">
<div class="row">
<div class="col-sm-3" style="margin-bottom: 140px;">
	<h1 class="buildHdr">Optic Options</h1>
	<p class="validationText">Required</p>
	</div>
<div class="col-sm-9"><div class="grid-container grid-container--prod"><div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="opticRadio" id="6x" value="6">
  <label class="form-check-label" for="6x">
    6º x 6º
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="opticRadio" id="10x" value="10">
  <label class="form-check-label" for="10x">
    10º x 10º
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="opticRadio" id="25x" value="25">
  <label class="form-check-label" for="25x">
    25º x 25º
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="opticRadio" id="40x" value="40">
  <label class="form-check-label" for="40x">
    40º x 40º
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="opticRadio" id="1040x" value="140">
  <label class="form-check-label" for="1040x">
    10º x 40º
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="opticRadio" id="3060x" value="360">
  <label class="form-check-label" for="3060x">
    30º x 60º
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="opticRadio" id="365x" value="365">
  <label class="form-check-label" for="365x">
    30º x 60º x 5º
  </label>
</div></div>
<div class="grid-element"><div class="form-check">
  <input class="form-check-input" type="radio" name="opticRadio" id="310x" value="310">
  <label class="form-check-label" for="310x">
    30º x 100º
  </label>
</div></div></div></div>
</div>	
	
	</div>
	
	<div class="row"><div class="col-sm-3"></div>
		<div class="col-sm-3"><button id="sku" class="skuButton">Generate SKU</button></div>
		<div class="col-sm-3"><button id="clear" class="skuButton">Clear Selection</button></div>
	</div>
	
	</div>
</div>


<script src="js/productBuilder.js"></script>
<script src="js/logo.js"></script>

