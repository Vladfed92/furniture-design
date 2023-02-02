import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import Splide from '@splidejs/splide';
//    BURGER JQERY    //

$(document).ready(function () {

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

// connected photo sliders for shop-goods.htm pages.
document.addEventListener('DOMContentLoaded', function () {
	var main = new Splide('#main-carousel', {
		type: 'fade',
		rewind: true,
		pagination: false,
		arrows: false,
	});

	const thumbnails = new Splide('#thumbnail-carousel', {
		fixedWidth: 200,
		gap: 4,
		rewind: true,
		pagination: false,
		arrows: false,
		isNavigation: true,

	})
	main.sync(thumbnails);
	main.mount();
	thumbnails.mount();
});

// variables for togle 'actve' on burger
const classesForActivationBurger = document.querySelectorAll('.burger, .navigation, .menu__navigation');
const burger = document.querySelector('.burger');
// variables for togle 'actve' on module window
const moduleHaveNoPage = document.querySelectorAll('.have-no-page');
const moduleWindowhaveNoPage = document.querySelector('.modal-window');
// variables for togle 'actve' on Filter
const classesForActivationFilter = document.querySelectorAll('.filter-icon, .shop__goods-filter');
const filter = document.querySelector('.filter-icon')
// variables for remove .active class
const closingTriggers = document.querySelectorAll('.criss-cross, .close-message-button');
// variables for togle 'actve' on dandruff
const dandruff = document.querySelector('.dandruff')
const headerSearch = document.querySelector('.header-search')
// variables for togle 'actve' on dandruff
const cart = document.querySelector('.cart-img')
const cartActive = document.querySelector('.cart')

// add new class 'active' function
const addNewClass = (element) => {
	element.classList.toggle('active');
};
// remove 'active' class function
const removeClass = (element) => {
	element.classList.remove('active')
}
//togle class 'active' to 'burger' element
burger.addEventListener('click', function () {
	classesForActivationBurger.forEach(addNewClass)
});
//togle class 'active' to module window
moduleHaveNoPage.forEach(element => {
	element.addEventListener('click', function () {
		addNewClass(moduleWindowhaveNoPage)
	})
});
// collect all classes to remove module window
if (closingTriggers.length > 0) {
	closingTriggers.forEach(element => {
		element.addEventListener('click', function () {
			removeClass(moduleWindowhaveNoPage)
		})
	})
}

if (classesForActivationFilter.length > 0)
	filter.addEventListener('click', function () {
		classesForActivationFilter.forEach(addNewClass)
	})


dandruff.addEventListener('click', function () {
	addNewClass(headerSearch)
});
cart.addEventListener('click', function () {
	addNewClass(cartActive)
});

// range for filter in shop-goods
const rangeInput = document.querySelectorAll(".range-input input"),
	priceInput = document.querySelectorAll(".price-input input"),
	range = document.querySelector(".slide .progress");
let priceGap = 10;
if (rangeInput.length > 0) {
	priceInput.forEach(input => {
		input.addEventListener("input", e => {
			let minPrice = parseInt(priceInput[0].value),
				maxPrice = parseInt(priceInput[1].value);

			if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
				if (e.target.className === "input-min") {
					rangeInput[0].value = minPrice;
					range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
				} else {
					rangeInput[1].value = maxPrice;
					range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
				}
			}
		});
	});
	rangeInput.forEach(input => {
		input.addEventListener("input", e => {
			let minVal = parseInt(rangeInput[0].value),
				maxVal = parseInt(rangeInput[1].value);

			if ((maxVal - minVal) < priceGap) {
				if (e.target.className === "range-min") {
					rangeInput[0].value = maxVal - priceGap
				} else {
					rangeInput[1].value = minVal + priceGap;
				}
			} else {
				priceInput[0].value = minVal;
				priceInput[1].value = maxVal;
				range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
				range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
			}
		});
	});
}

// counter for shop-goods 

const subtractQuontity = document.querySelector('.left-arrow');
const addQuontity = document.querySelector('.right-arrow');
const counterBox = document.querySelector('.counter');
let count = 1;

const updateCounter = () => {
	counterBox.innerHTML = count;
}
subtractQuontity.addEventListener('click', function () {
	if (count > 0) { count--; }
	updateCounter()
});

addQuontity.addEventListener('click', function () {
	count++;
	updateCounter()
})