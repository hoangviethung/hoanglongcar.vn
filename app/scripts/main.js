import Tab from './libraries/tabs';

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
	const overlay = document.querySelector('#overlay');
	itemsNavigationMobile[itemsNavigationMobile.length - 1].addEventListener(
		'click',
		(e) => {
			navigation.classList.add('show');
			body.classList.add('no-scroll');
			overlay.classList.add('active');
		},
	);
	if (btnClose) {
		btnClose.addEventListener('click', (e) => {
			navigation.classList.remove('show');
			body.classList.remove('no-scroll');
			overlay.classList.remove('active');
		});
	}
	if (overlay) {
		overlay.addEventListener('click', (e) => {
			navigation.classList.remove('show');
			body.classList.remove('no-scroll');
			overlay.classList.remove('active');
		});
	}
};

const moveNavOutHeader = (responsive) => {
	const nav = document.querySelector('.navigation');
	const body = document.querySelector('body');
	const header = document.querySelector('header .nav-config-mobile');
	if (window.innerWidth < responsive) {
		if (nav && body) {
			body.append(nav);
		}
	} else {
		if (nav && header) {
			header.appendChild(nav);
		}
	}
};

const showFilterMobile = () => {
	const btn = document.querySelector('.collection-bar .filter-button');
	const asdie = document.querySelector('.aside-menu-products');
	const body = document.querySelector('body');
	const btnClose = document.querySelector('.aside-menu-products .btn-close');
	const overlay = document.querySelector('#overlay');
	if (btn) {
		btn.addEventListener('click', (e) => {
			asdie.classList.add('active');
			body.classList.add('no-scroll');
			overlay.classList.add('active');
		});
		if (btnClose) {
			btnClose.addEventListener('click', (e) => {
				asdie.classList.remove('active');
				body.classList.remove('no-scroll');
				overlay.classList.remove('active');
			});
		}
		if (overlay) {
			overlay.addEventListener('click', (e) => {
				asdie.classList.remove('active');
				body.classList.remove('no-scroll');
				overlay.classList.remove('active');
			});
		}
	}
};

const initHeroBanner = () => {
	let slider = new Swiper('.hero-banner .swiper-container');
};

const initSliderCategoryProduct = () => {
	let sliderThumb = new Swiper(
		'.index-categories-product .slider-thumb .swiper-container',
		{
			slidesPerView: 2,
			navigation: {
				nextEl:
					'.index-categories-product .button-navigation-slider.next',
				prevEl:
					'.index-categories-product .button-navigation-slider.prev',
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
			navigation: {
				nextEl:
					'.index-categories-product .button-navigation-slider.next',
				prevEl:
					'.index-categories-product .button-navigation-slider.prev',
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

const initSliderOurTeam = () => {
	let slider = new Swiper('.slider-our-team .swiper-container', {
		slidesPerView: 1,
		speed: 1000,
		spaceBetween: 20,
		autoplay: {
			delay: 4000,
		},
		navigation: {
			nextEl: '.slider-our-team .button-navigation-slider.next',
			prevEl: '.slider-our-team .button-navigation-slider.prev',
		},
		breakpoints: {
			600: {
				slidesPerView: 3,
			},
			1025: {
				slidesPerView: 4,
			},
		},
	});
};

const initSliderVideoGallery = () => {
	let slider = new Swiper('.slider-video-gallery .swiper-container', {
		slidesPerView: 1,
		speed: 1000,
		spaceBetween: 20,
		autoplay: {
			delay: 4000,
		},
		navigation: {
			nextEl: '.slider-video-gallery .button-navigation-slider.next',
			prevEl: '.slider-video-gallery .button-navigation-slider.prev',
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

const initSliderProductDetail = () => {
	let sliderThumb = new Swiper(
		'.slider-product-detail .slider-thumb .swiper-container',
		{
			slidesPerView: 2,
			spaceBetween: 16,
			speed: 1000,
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
		'.slider-product-detail .slider-active .swiper-container',
		{
			effect: 'fade',
			speed: 1000,
			autoplay: {
				delay: 3000,
			},
			thumbs: {
				swiper: sliderThumb,
			},
		},
	);
};

const initSliderProductOther = () => {
	let slider = new Swiper('.other-products .swiper-container', {
		speed: 1000,
		slidesPerView: 1,
		autoplay: {
			delay: 3000,
		},
		navigation: {
			nextEl: '.other-products .button-navigation-slider.next',
			prevEl: '.other-products .button-navigation-slider.prev',
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			1025: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
		},
	});
};

const initSliderProductReview = () => {
	let slider = new Swiper('.product-detail-review .swiper-container', {
		speed: 1000,
		slidesPerView: 1,
		simulateTouch: false,
		autoplay: {
			delay: 3000,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 24,
			},
			1440: {
				slidesPerView: 3,
				spaceBetween: 24,
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

const initializeMasonryJs = () => {
	var elements = document.querySelectorAll('.grid-masonry');
	elements.forEach((item) => {
		var msnry = new Masonry(item, {
			itemSelector: '.grid-masonry-item',
			isAnimated: true,
			animationOptions: {
				duration: 700,
				easing: 'linear',
				queue: false,
			},
		});
	});
};

const initializeFancyAppJs = () => {
	$('[data-fancybox]').fancybox({
		// Options will go here
		thumbs: {
			autoStart: true,
		},
		transitionEffect: 'zoom-in-out',
		// Duration in ms for transition animation
		transitionDuration: 366,
	});
};

const scrollToGalleryProductDetail = () => {
	const btn = document.querySelector('.btn-scroll-to-gallery');
	const sectionScrollTo = document.querySelector('.product-detail-gallery');
	if (btn) {
		btn.addEventListener('click', (e) => {
			sectionScrollTo.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'nearest',
			});
		});
	}
};

const qualityInput = () => {
	const items = document.querySelectorAll('.quality-product-input');
	items.forEach((item) => {
		const plus = item.querySelector('.btn-plus');
		const minus = item.querySelector('.btn-minus');
		const input = item.querySelector('input');
		let currentValue = input.getAttribute('value');
		plus.addEventListener('click', (e) => {
			currentValue++;
			if (currentValue > 5) {
				plus.classList.add('disabled');
			} else {
				plus.classList.remove('disabled');
				input.setAttribute('value', currentValue);
			}
			updateCartTotal();
		});
		minus.addEventListener('click', (e) => {
			currentValue--;
			if (currentValue < 1) {
				minus.classList.add('disabled');
			} else {
				minus.classList.remove('disabled');
				input.setAttribute('value', currentValue);
			}
			updateCartTotal();
		});
	});
};

const deleteRowTableCart = () => {
	const buttonsDelete = document.querySelectorAll('.table-cart .btn-delete');
	buttonsDelete.forEach((item) => {
		item.addEventListener('click', (e) => {
			item.parentElement.parentElement.remove();
			updateCartTotal();
		});
	});
};

const ajaxFilterProducts = () => {
	const itemsFilter = $(
		'.aside-menu-products .filter-wrapper .checkbox__custom input',
	);
	// DANH SÁCH SẢN PHẨM BAM ĐẦU (CHƯA FILTER)
	const listProductCurrent = $('.list-product');
	itemsFilter.each(function (index, item) {
		$(item).on('click', function (e) {
			const url = $(this).attr('data-url');
			$.ajax({
				type: 'GET',
				url: url,
				beforeSend: function () {
					// THÊM LOADING CHO DANH SÁCH SẢN PHẨM
					listProductCurrent.addClass('loading');
				},
				success: function (res) {
					// DATA TỪ URL REQUEST SAU ĐÓ TÌM ĐOẠN HTML CẦN LẤY
					const data = $(res).find('.list-product .item-product');
					// DÁN VÀO HTML HIỆN TẠI
					listProductCurrent.html(data);
				},
				complete: function () {
					// XÓA LOADING CHO DANH SÁCH SẢN PHẨM
					listProductCurrent.removeClass('loading');
				},
			});
		});
	});
};

const rowCartTotal = () => {
	const rowsCart = document.querySelectorAll('.row-cart-item-product');
	rowsCart.forEach((row) => {
		const unit = parseInt(row.querySelector('.unit').textContent);
		const quality = parseInt(
			row.querySelector('.quality-product-input input').value,
		);
		const rowTotal = parseInt(unit * quality);
		row.querySelector('.row-total').textContent = rowTotal;
	});
};

const tempCartTotal = () => {
	rowCartTotal();
	let sum = 0;
	const itemsRowTotal = document.querySelectorAll(
		'.row-cart-item-product .row-total',
	);
	itemsRowTotal.forEach((item) => {
		sum += parseInt(item.textContent);
	});
	return sum;
};

const cartTotal = () => {
	const cartTotal = document.querySelector('.cart-total');
	if (cartTotal) {
		const temp = parseInt(
			(document.querySelector('.temp').textContent = tempCartTotal()),
		);
		const service = parseInt(
			cartTotal.querySelector('.service').textContent,
		);
		const tax = parseInt(cartTotal.querySelector('.tax').textContent);
		const discount = parseInt(
			cartTotal.querySelector('.discount').textContent,
		);
		let total = cartTotal.querySelector('.total');
		total.textContent = temp - (service + tax + discount);
	} else {
		console.log('Cart Total is not defind');
	}
};

const updateCartTotal = () => {
	const isCart = document.querySelector('.cart');
	if (isCart) {
		tempCartTotal();
		cartTotal();
	}
};

window.addEventListener('load', (e) => {
	initializeMasonryJs();
	initializeWowJs();
	initializeFancyAppJs();
	initHeroBanner();
	initSliderCategoryProduct();
	initSliderPartner();
	initSliderNews();
	initSliderOurTeam();
	initSliderVideoGallery();
	initSliderProductDetail();
	initSliderProductOther();
	initSliderProductReview();
	showNaviationMobile();
	showFilterMobile();
	moveNavOutHeader(1024);
	scrollToGalleryProductDetail();
	qualityInput();
	deleteRowTableCart();
	ajaxFilterProducts();
	cartTotal();
	const ProductDetail = new Tab('.tabs-product-detail .tab-container');
});

window.addEventListener('scroll', (e) => {
	fixedHeaderWhenScroll();
});

window.addEventListener('resize', () => {
	moveNavOutHeader(1024);
});
