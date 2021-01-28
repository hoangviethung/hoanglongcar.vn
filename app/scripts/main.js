import { HTTP } from './services/http';

HTTP.get('https://api.github.com/users?per_page=5').subscribe((res) => {});

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

document.addEventListener('DOMContentLoaded', () => {
	initHeroBanner();
	initSliderCategoryProduct();
	initSliderPartner();
});
