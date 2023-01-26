import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import Splide from '@splidejs/splide';
//    BURGER JQERY    //

$(document).ready(function () {
	// реніше робота бургера була забеспечена додаванням класу 'active' за допомогою jqery, наразі сам зробив таку маніпуляцію на чистому JS
	/*	$('.burger').click(function (event) {
			$('.burger,.burger__item,.navigation,.menu__navigation').toggleClass('active');
		});
		$('.filter-icon').click(function (event) {
			$('.shop__goods-filter,.filter-icon').toggleClass('active');
		});
	*/

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


// Функція додавання класу active по будь якому маркеру (classesForActivation)

const classesForActivation = ['.burger', '.navigation', '.menu__navigation'];
const domActiveation = [];
const burger = document.querySelector('.burger');

classesForActivation.forEach(key => {
	const elementsColection = document.querySelectorAll(key)
	elementsColection.forEach(element => {
		domActiveation.push(element)
	})
});

const addNewClass = (element) => {
	element.classList.toggle('active');
};

burger.addEventListener('click', function () {
	domActiveation.forEach(addNewClass)
})

/*
const funcActivation = (element) => {
	element.onclick = () => {
		addNewClass(element);
	};
}
*/

/*
addNewClass(this) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Функція додавання класу по маркеру ".js-toggle-active"
/*
const addNewClass = (element) => {
	element.parentElement.classList.toggle('active');
};

const funcActivation = (element) => {
	element.onclick = () => {
		addNewClass(element)
	}
}

document.querySelectorAll('.js-toggle-active').forEach(funcActivation)
*/
























