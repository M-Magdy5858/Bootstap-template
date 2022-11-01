///============================================

//===== Change nav bar style when scrolling down :::
//------------------------------------------------------
let nav = document.querySelector('nav');

document.body.onscroll = function navScroll() {
	if (window.pageYOffset > 0) {
		nav.classList.replace('bg-transparent', 'scrolling');
	} else {
		nav.classList.replace('scrolling', 'bg-transparent');
	}
};
