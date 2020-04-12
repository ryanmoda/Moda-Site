var app = angular.module('sampleApp', []);
app.controller('SideCtrl', function($scope) {
  	alert("sup");
document.getElementById("over").classList.toggle("overlay");
	document.getElementById("over").style.height = "0px";
});