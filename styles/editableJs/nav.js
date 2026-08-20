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


//////////////////////////////////////////////////////////////////////////////////////////
// Navigation text
//////////////////////////////////////////////////////////////////////////////////////////
const nativeNav = document.getElementById("nav");

if (nativeNav) {
	nativeNav.innerHTML = `
		<h2 class="navigation-text">Navigation</h2>
		<div class="nav-item">
			<ul>
				<li><a href="/">Main Page</a></li>
				<hr>
				<li><a href="/Characters/">Character Repository</a></li>
				<hr>
				<li><a href="/Backgrounds/">Background Repository</a></li>
				<hr>
				<li><a href="/Evidence/">Evidence Repository</a></li>
				<hr>
				<li><a href="/DS/">DS-resolution Asset Repo</a></li>
				<hr>
				<li><a href="/Scripts/">AAO Website Scripts</a></li>
			</ul>
		</div>
		<div class="nav-item">
			<ul>
				<li><a href="/Tutorial/">Read the tutorial here!</a></li>
				<hr>
				<li><a href="https://aaonline.fr/player.php?trial_id=150704" target="_blank" rel="noopener noreferrer">Play the tutorial in AAO!</a></li>
				<hr>
				<li><a href="https://www.aaonline.fr/player.php?trial_id=150701" target="_blank" rel="noopener noreferrer">Play a short demo here!</a></li>
			</ul>
		</div>
		<div class="nav-item">
			<ul>
				<li><a href="https://github.com/aao-hd-repo/aao-hd-repo.github.io" target="_blank" rel="noopener noreferrer">See this website's code</a></li>
				<hr>
				<li><a href="/AAO Tutorial Assets/">AAO Tutorial Assets</a></li>
			</ul>
		</div>
	`;

	const activeLink = nativeNav.querySelector(`a[href="${window.location.pathname}"]`);
	
	if (activeLink) {
		activeLink.classList.add("current-page");
	}
}