$(document).ready(function () {
			var contentHeight = $('.container').height() + 60 + 80;
			$('.spacer').css({'height': 'calc(100vh - ' + contentHeight + 'px'});
		});