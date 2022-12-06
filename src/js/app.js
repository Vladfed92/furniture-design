import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

//    BURGER JQERY    //

$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.burger,.burger__item,.navigation').toggleClass('active');
	});
});

	// SPLIDE SLIDER //

import Splide from '@splidejs/splide';

new Splide('.splide-introduce', '.splide-reviews', {
	type: 'loop',
	perPage: 1,
	pagination: false,

	}).mount();

new Splide('.splide-reviews', {
	type: 'loop',
	perPage: 1,
	pagination: false,

}).mount();

