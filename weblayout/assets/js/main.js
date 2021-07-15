$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();


	$('#MyNav').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	});
	
	
	$('#smarttab').smartTab({
		theme: 'bspills',
		orientation: 'vertical',
		justified: true,
		transition: {
			animation: 'slide-swing',
			speed: '400',
		},
	});
	

	$('.video-link').magnificPopup({
		type:'iframe',
		iframe: {
		markup: '<div class="mfp-iframe-scaler">'+
				'<div class="mfp-close"></div>'+
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
				 '</div>', 
		patterns: {
		youtube: {
				  index: 'youtube.com/', 
				  id: 'v=', 
				  src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
				}
		},
			srcAction: 'iframe_src',
		}
	});
	
	
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots:false,
				
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
			
		$( ".owl-prev").html('<i class="fas fa-long-arrow-alt-left"></i>');
		$( ".owl-next").html('<i class="fas fa-long-arrow-alt-right"></i>');
		
}(jQuery));

