// JavaScript Document
var navArr = ["cove-bar", "graze-bar", "flex-bar", "cntrl-bar"];


function drop() {
	var w = window.innerWidth;
	var h = String(document.documentElement.scrollHeight - 18) + 'px'
	var open = "345px";
	var openTab = "50vw";
	var openMob = "75vw";
	
	if (document.getElementById("sidenav-d").style.width == open) {
		document.getElementById("sidenav-d").style.width = "0px";
		document.getElementById("burg").classList.remove("is-active");
		document.getElementById("over").classList.toggle("overlay");
		document.getElementById("over").style.height = "0px";
		return;
	}
	if (document.getElementById("sidenav-mob").style.width == openTab || document.getElementById("sidenav-mob").style.width == openMob) {
		document.getElementById("sidenav-mob").style.width = "0px";
		document.getElementById("burg").classList.remove("is-active");
		document.getElementById("over").classList.toggle("overlay");
		document.getElementById("over").style.height = "0px";
		closeCollapse();
		return;
	}
	
	document.getElementById("burg").classList.add("is-active");
	document.getElementById("over").classList.toggle("overlay");
	document.getElementById("over").style.height = h; /*set dynamic height for overlay*/
	
	if (w > 1200) {
	document.getElementById("sidenav-d").style.width = open;

	}
	if (w <= 1200 && w > 425) {
	document.getElementById("sidenav-mob").style.width = openTab;	
	}
	if (w <= 425) {
	document.getElementById("sidenav-mob").style.width = openMob;
	}
}

var notSideBar = document.getElementById("over");
notSideBar.addEventListener("click", function() {
		drop();			
	});


//SIDEBAR COLLAPSABLE PANEL ================
/*
var acc = document.getElementsByClassName("collapsable");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
		panel.style.display = "none";
        } else {
			panel.style.display = "block";

        }
    });
}
*/


//SCROLL SPY ===================
$(document).on("click", ".spy-links", function(e) {
  e.preventDefault();
  var target = $($(this).attr('data-scroll'));
  if (target.length) {
	var scrollTo = target.offset().top - 170;
	$('body, html').animate({
	  scrollTop: scrollTo + 'px'
	}, 800);
  }
});


//HIDE SUB NAV BAR ON CLICK ===============
function hideBar(foo) {
  var re = RegExp(/^a-\S*/); /*a- followed by text*/
  var re1 = RegExp(/^b-\S*/);
  var re2 = RegExp(/^c-\S*/);
var re3 = RegExp(/^d-\S*/);
var re4 = RegExp(/^e-\S*/);
  if (re.test(foo)) {
	document.getElementById("cove-bar").classList.toggle("hide");
	setTimeout(function() {
	  document.getElementById("cove-bar").classList.toggle("hide");
	}, 500);
  }
	else if (re1.test(foo)) {
	 document.getElementById("graze-bar").classList.toggle("hide");
	setTimeout(function() {
	  document.getElementById("graze-bar").classList.toggle("hide");
	}, 500);

	}
	else if (re2.test(foo)) {
	 document.getElementById("flex-bar").classList.toggle("hide");
	setTimeout(function() {
	  document.getElementById("flex-bar").classList.toggle("hide");
	}, 500);

	}
//	else if (re3.test(foo)) {
//	 document.getElementById("xtrus-bar").classList.toggle("hide");
//	setTimeout(function() {
//	  document.getElementById("xtrus-bar").classList.toggle("hide");
//	}, 500);
//
//	}
//	else if (re4.test(foo)) {
//	 document.getElementById("power-bar").classList.toggle("hide");
//	setTimeout(function() {
//	  document.getElementById("power-bar").classList.toggle("hide");
//	}, 500);
	//}
	
	else if (re3.test(foo)) {
	 document.getElementById("cntrl-bar").classList.toggle("hide");
	setTimeout(function() {
	  document.getElementById("cntrl-bar").classList.toggle("hide");
	}, 500);		
	}
}

// CLOSE SIDE NAV
function closeSide() {
  document.getElementById("over").classList.remove("overlay");
  document.getElementById("over").style.height = "0px";
  document.getElementById("sidenav-mob").style.width = "0px";
  document.getElementById("sidenav-d").style.width = "0px";
  document.getElementById("burg").classList.remove("is-active");
  /*Close all nav panels*/
	closeCollapse();

}

function closeCollapse() {
var tab = document.getElementsByClassName("tab-content");//.style.maxHeight = "0";
$("input[name='tabs2']").prop("checked", false);
}

function navDrop(val) {
//alert("navDrop: " + val);
closeAct();
document.getElementById("navbar").style.backgroundColor = "black";
document.getElementById(val).style.display = "block";
document.getElementById(val).style.visibility = "visible";
document.getElementById(val).style.opacity = "1";	
}

function test() {
for (var i = 0; i < navArr.length; i++) {
	if (document.getElementById(navArr[i]).style.display == "block") { return navArr[i];}
}
return false;
}

$(".sub-bar li a").click(function(event) {
var obj = parseInt(event.target.id[0], 36) - 10;
closeAct(obj);
document.getElementById("navbar").removeAttribute("style");
});

function closeAct(el) {
$("#" + navArr[el]).click(function(e) {
        e.stopPropagation();
   });
for (var i = 0; i < navArr.length; i++) {
	if (document.getElementById(navArr[i]).style.display == "block") {
//		alert("close " + navArr[i]);
		document.getElementById(navArr[i]).style.display = "none";
		document.getElementById(navArr[i]).style.visibility = "hidden";
	}
}
}

function closeAll() {
for (var i = 0; i < navArr.length; i++) {
	if (document.getElementById(navArr[i]).style.display == "block") {
//		alert("close " + navArr[i]);
		document.getElementById(navArr[i]).style.display = "none";
		document.getElementById(navArr[i]).style.visibility = "hidden";
	}
}	
}


$(document).click(function(event) {
var el = test();
var target = $(event.target);	
if (!target.is("nav li a")) {
    if(!$(event.target).closest('#' + el).length) {
         if($('#' + el).is(":visible")) {
			document.getElementById("navbar").style.backgroundColor = "var(--main-bg-color-1)";
            $('#' + el).hide();
		 	$('#' + el).style.visibility = "hidden";
        }
    }  
}
});
