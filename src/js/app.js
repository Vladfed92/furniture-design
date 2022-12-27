import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import Splide from '@splidejs/splide';
//    BURGER JQERY    //

$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.burger,.burger__item,.navigation,.menu__navigation').toggleClass('active');
	});

	if ($('.splide-introduce').length > 0) {
		new Splide('.splide-introduce', {
			type: 'loop',
			perPage: 1,
			pagination: false,
		}).mount();
	};

	if ($('.splide-reviews').length > 0) {
		new Splide('.splide-reviews', {
			type: 'loop',
			perPage: 1,
			pagination: false,
		}).mount();
	}

	if ($('.splide-goods').length > 0) {
		new Splide('.splide-goods', {
			type: 'loop',
			perPage: 4,
			pagination: false,
			perMove: 1,
		}).mount();
	}


	if ($('.splide-blog-item').length > 0) {
		new Splide('.splide-blog-item', {
			type: 'loop',
			perPage: 2,
			pagination: false,
		}).mount();
	}
});




// SPLIDE SLIDER //















