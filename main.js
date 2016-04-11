$(window).load(function() {
	// preload
  'use strict';
	$('body').removeClass('preload');
});

$(document).ready(function($) {
	// external links
	$('a[rel="external"]').attr('target', '_blank');
});