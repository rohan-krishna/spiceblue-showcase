/*
	
	homebrew.js for spiceblue-showcase. Depends jQuery.

*/
$(document).ready(function() {

	var container = $('#rh-container'),
		menu = $('#menu-9'),
		button = $('#rh-button');
	$(document.body).click(function(e) {
		if(container.hasClass('rh-menu-open')) {
			container.removeClass('rh-menu-open');
		}
	});
	menu.click(function(e) {
		e.stopPropagation();
	});
	button.click(function(e) {
		e.stopPropagation();
		container.addClass('rh-effect-sb rh-menu-open');
	});

});