let menuBtn = document.querySelector('.nav-panel-mobile-btn');
let menu = document.querySelector('.nav-panel-mobile');

export const mobileBtn = menuBtn.addEventListener('click', function() {
	if (window.getComputedStyle(menuBtn).display === 'none') {
		menuBtn.classList.remove('active');
		menu.classList.remove('active');
	} else {
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	}
});