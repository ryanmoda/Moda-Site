/* ----------------------------
/*  Name: Simple Slider
    Author: 
    Version: 
/* -------------------------- */
var $scroller = $('.slides');
// assign click handler
$('.links a').on('click', function () { 
    var docWidth = $(document).width();
    var factor; 
    $('.links a').each(function() {
        $(this).removeClass("targetedSlide")
        
    });
    factor = (docWidth > 1050) ? 1000 : 350;
    
    $(this).addClass("targetedSlide");
    // get the partial id of the div to scroll to
    var divIdx = $(this).attr("id"); 
    divIdx = divIdx.slice(divIdx.length-1) ;
    divIdx = parseInt(divIdx);    
    divIdx = (divIdx * factor) - factor;     
    //alert("scrollLeft: " + divIdx);     
    $scroller.scrollLeft(divIdx, 0);
});