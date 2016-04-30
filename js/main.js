$(window).load(function() {
	// preload
  'use strict';
	$('body').removeClass('preload');
});

$(document).ready(function($) {
	// external links
	$('a[rel="external"]').attr('target', '_blank');

	// waypoints
	var sticky = new Waypoint.Sticky({
	  element: $('#do-more')[0]
	});

	$('#waypoint-2').waypoint(function() {
	  $('#do-more').toggleClass('fade-out')
	});

	var sticky = new Waypoint.Sticky({
	  element: $('#painless')[0]
	});

	$('.feature-list').waypoint(function() {
		$('.feature').addClass('fadeInUp')
	}, {
		offset: '60%'
	});

	// vivus
	new Vivus('logo-outline', {
	  start: 'inViewport',
		type: 'delayed',
		duration: 300,
		pathTimingFunction: Vivus.LINEAR,
		animTimingFunction: Vivus.EASE
	});

	// smooth scroll
	$('body').on('click', 'a[href*="#"]:not([href="#"])', function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
	});
});

