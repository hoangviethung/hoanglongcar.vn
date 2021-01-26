import { HTTP } from './services/http';

HTTP.get('https://api.github.com/users?per_page=5').subscribe((res) => {});

const initHeroBanner = () => {
	let heroBanner = new Swiper('.hero-banner .swiper-container');
};

document.addEventListener('DOMContentLoaded', () => {
	initHeroBanner();
});
