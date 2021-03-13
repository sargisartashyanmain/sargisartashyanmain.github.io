const burgerMenu = document.querySelector('.burger_menu');

burgerMenu.onclick = function() {
	burgerMenu.classList.toggle('_active');
	const body = document.querySelector('body');
	body.classList.toggle('block');

	const adaptiveMenu = document.querySelector('.adapt_menu');
	adaptiveMenu.classList.toggle('_active')
}