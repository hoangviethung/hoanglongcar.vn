// import { HTTP } from './services/http';

// HTTP.get('https://api.github.com/users?per_page=5').subscribe((res) => {});

const fixedHeaderWhenScroll = () => {
	const header = document.querySelector('header');
	if (window.pageYOffset > header.offsetHeight) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
};

const showNaviationMobile = () => {
	const itemsNavigationMobile = document.querySelectorAll(
		'.navigation-mobile ul li',
	);
	const navigation = document.querySelector('.navigation');
	const body = document.querySelector('body');
	const btnClose = document.querySelector('.navigation .btn-close');
	itemsNavigationMobile[itemsNavigationMobile.length - 1].addEventListener(
		'click',
		(e) => {
			navigation.classList.add('show');
			body.classList.add('no-scroll');
		},
	);
	btnClose.addEventListener('click', (e) => {
		navigation.classList.remove('show');
		body.classList.remove('no-scroll');
	});
};

const initHeroBanner = () => {
	let slider = new Swiper('.hero-banner .swiper-container');
};

const initSliderCategoryProduct = () => {
	let sliderThumb = new Swiper(
		'.index-categories-product .slider-thumb .swiper-container',
		{
			slidesPerView: 2,
			autoplay: {
				delay: 3000,
			},
			breakpoints: {
				1025: {
					slidesPerView: 4,
				},
			},
		},
	);
	let sliderActive = new Swiper(
		'.index-categories-product .slider-active .swiper-container',
		{
			effect: 'fade',
			simulateTouch: false,
			autoplay: {
				delay: 3000,
			},
			thumbs: {
				swiper: sliderThumb,
			},
		},
	);
};

const initSliderPartner = () => {
	let slider = new Swiper('.slider-partners .swiper-container', {
		slidesPerView: 2,
		loop: true,
		speed: 2000,
		spaceBetween: 10,
		autoplay: {
			delay: 2000,
		},
		breakpoints: {
			575: {
				spaceBetween: 24,
			},
			768: {
				slidesPerView: 3,
			},
			1025: {
				slidesPerView: 5,
				spaceBetween: 44,
			},
			1440: {
				slidesPerView: 5,
				spaceBetween: 80,
			},
		},
	});
};

const initSliderNews = () => {
	let slider = new Swiper('.slider-news .swiper-container', {
		slidesPerView: 1,
		speed: 1000,
		spaceBetween: 20,
		autoplay: {
			delay: 4000,
		},
		navigation: {
			nextEl: '.slider-news .button-navigation-slider.next',
			prevEl: '.slider-news .button-navigation-slider.prev',
		},
		breakpoints: {
			600: {
				slidesPerView: 2,
			},
			1025: {
				slidesPerView: 3,
			},
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
	initSliderNews();
	showNaviationMobile();
});

window.addEventListener('scroll', (e) => {
	fixedHeaderWhenScroll();
});
