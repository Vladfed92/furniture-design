import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import Splide from '@splidejs/splide';
//    BURGER JQERY    //

$(document).ready(function () {
	$('.burger').click(function (event) {
		$('.burger,.burger__item,.navigation').toggleClass('active');
	});

	new Splide('.splide-introduce', {
		type: 'loop',
		perPage: 1,
		pagination: false,
	}).mount();

	new Splide('.splide-reviews', {
		type: 'loop',
		perPage: 1,
		pagination: false,
	}).mount();


	new Splide('.splide-goods', {
		type: 'loop',
		perPage: 4,
		pagination: false,
	}).mount();
});

// SPLIDE SLIDER //















