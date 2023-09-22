'use strict';

const handleBurger = () => {
	const burgerBtn = document.querySelector('#burger');
	const mobileMenu = document.querySelector('#mobile-menu');
	const body = document.body;

	burgerBtn.addEventListener('click', () => {
		burgerBtn.classList.toggle('active');
		mobileMenu.classList.toggle('hidden');
		body.classList.toggle('overflow-hidden');
		mobileMenu.classList.toggle('grid');
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth > 767.98) {
			mobileMenu.classList.add('hidden');
			mobileMenu.classList.remove('grid');
			burgerBtn.classList.remove('active');
			body.classList.remove('overflow-hidden');
		}
	});
};
handleBurger();

const handleTabs = () => {
	const filterButtons = document.querySelectorAll('.tab-trigger');
	const tabItems = document.querySelectorAll('.tab-item');

	filterButtons.forEach((button) => {
		button.addEventListener('click', () => {
			filterButtons.forEach((btn) => btn.classList.remove('active'));
			button.classList.add('active');
			const filterValue = button.getAttribute('data-filter');

			// Сначала скрываем все элементы tab-item
			tabItems.forEach((item) => {
				item.classList.add('hidden');
			});

			// Показываем только те, которые соответствуют фильтру
			const filteredItems = document.querySelectorAll(`.tab-item.${filterValue}`);
			filteredItems.forEach((item) => {
				item.classList.remove('hidden');
			});
		});
	});
};
handleTabs();

const handleScroll = () => {
	const header = document.querySelector('.wrapper');

	window.addEventListener('scroll', () => {
		if (window.scrollY > 100) {
			header.classList.add('scroll');
		} else {
			header.classList.remove('scroll');
		}
	});
};
handleScroll()
