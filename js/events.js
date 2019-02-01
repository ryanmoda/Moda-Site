$(document).ready(function(){
	 $('.slider-for').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
//  variableWidth: true,		 
  adaptiveHeight: true
});
//$('.slider-nav').slick({
//  slidesToShow: 4,
//  slidesToScroll: 1,
//  asNavFor: '.slider-for',
//  dots: false,
//  centerMode: true,
//  focusOnSelect: true
//});
//	
	
});

var ctArr = ["1800K", "2200K", "2700K", "3000K", "3500K", "4000K", "6500K"];
var dwArr = ["1800K", "2200K", "2700K", "3000K", "3500K", "6500K"];
var gdArr = ["1800K", "2200K", "2700K", "3500K"];
var grazeGDArr = ["1800K", "2200K"];
var converters = ["0-10V", "DMX"];
$(".slider").slick({
    autoplay: false,
    variableWidth: true,		 	
    dots: true,
    customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
  	var j = ctArr[i];
    i++;
    return '<a>'+j+'</a>';
            },
    responsive: [{ 
        breakpoint: 500,
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2
        } 
    }]
});
$(".gdSlider").slick({
    autoplay: false,
    variableWidth: true,		 	
    dots: true,
    customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
  	var j = gdArr[i];
    i++;
    return '<a>'+j+'</a>';
            },
    responsive: [{ 
        breakpoint: 500,
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2
        } 
    }]
});

$(".dwSlider").slick({
    autoplay: false,
    variableWidth: true,		 	
    dots: true,
    customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
  	var j = dwArr[i];
    i++;
    return '<a>'+j+'</a>';
            },
    responsive: [{ 
        breakpoint: 500,
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2
        } 
    }]
});

$(".grazegdSlider").slick({
    autoplay: false,
    variableWidth: true,		 	
    dots: true,
    customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
  	var j = grazeGDArr[i];
    i++;
    return '<a>'+j+'</a>';
            },
    responsive: [{ 
        breakpoint: 500,
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2
        } 
    }]
});

$(".convSlider").slick({
    autoplay: false,
    variableWidth: true,		 	
    dots: true,
    customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();
  	var j = converters[i];
    i++;
    return '<a>'+j+'</a>';
            },
    responsive: [{ 
        breakpoint: 500,
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2
        } 
    }]
});