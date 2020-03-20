/* ----------------------------
/*  Name: Simple Slider
    Author: 
    Version: 
/* -------------------------- */
var $scroller = $('.slides');
// assign click handler
$('.links a').on('click', function () {  
    $('.links a').each(function() {
        $(this).removeClass("targetedSlide")
        
    });
    $(this).addClass("targetedSlide");
    // get the partial id of the div to scroll to
    var divIdx = $(this).attr("id"); 
    divIdx = divIdx.slice(divIdx.length-1) ;
    divIdx = parseInt(divIdx);
    console.log(divIdx);
    
    divIdx = (divIdx * 1000) - 1000;          
    $scroller.scrollLeft(divIdx, 0);
});