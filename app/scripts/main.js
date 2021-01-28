import { HTTP } from './services/http';

HTTP.get('https://api.github.com/users?per_page=5').subscribe((res) => {});

const fixedHeaderWhenScroll = () => {
	const header = document.querySelector('header');
	if (window.pageYOffset > header.offsetHeight) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
};

const initHeroBanner = () => {
	let slider = new Swiper('.hero-banner .swiper-container');
};

const initSliderCategoryProduct = () => {
	let sliderThumb = new Swiper(
		'.index-categories-product .slider-thumb .swiper-container',
		{
			slidesPerView: 4,
		},
	);
	let sliderActive = new Swiper(
		'.index-categories-product .slider-active .swiper-container',
		{
			effect: 'fade',
			simulateTouch: false,
			thumbs: {
				swiper: sliderThumb,
			},
		},
	);
};

const initSliderPartner = () => {
	let slider = new Swiper('.slider-partners .swiper-container', {
		slidesPerView: 5,
		loop: true,
		speed: 2000,
		spaceBetween: 80,
		autoplay: {
			delay: 2000,
		},
	});
};

const initializeWowJs = () => {
	var wow = new WOW({
		boxClass: 'wow', // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset: 0, // distance to the element when triggering the animation (default is 0)
		mobile: true, // trigger animations on mobile devices (default is true)
		live: true, // act on asynchronously loaded content (default is true)
		callback: function (box) {
			// the callback is fired every time an animation is started
			// the argument that is passed in is the DOM node being animated
		},
		scrollContainer: null, // optional scroll container selector, otherwise use window,
		resetAnimation: true, // reset animation on end (default is true)
	});
	wow.init();
};

document.addEventListener('DOMContentLoaded', (e) => {
	initializeWowJs();
	initHeroBanner();
	initSliderCategoryProduct();
	initSliderPartner();
});

window.addEventListener('scroll', (e) => {
	fixedHeaderWhenScroll();
});
