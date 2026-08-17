//////////////////////////////////////////////////////////////////////////////////////////
// For hamburger menu, taken from https://codepen.io/mranenko/pen/wevamj
//////////////////////////////////////////////////////////////////////////////////////////
function loadHamburger() {
	var hamburger = {
		nav: document.querySelector('#nav'),
		navToggle: document.querySelector('.nav-toggle'),

		initialize() {
			if (this.navToggle) {
				this.navToggle.addEventListener('click', () => { this.toggle(); });
			}
		},

		toggle() {
			this.navToggle?.classList.toggle('expanded');
			this.nav?.classList.toggle('expanded');
		},
	};
	hamburger.initialize();
}

loadHamburger();