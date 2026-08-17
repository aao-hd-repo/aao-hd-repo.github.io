const nativeNav = document.getElementById("nav");

if (nativeNav) {
	nativeNav.innerHTML = `
		<h2>Navigation</h2>
		<br>
		<ul>
			<li><a href="/Characters/">Character Repository</a></li>
			<hr>
			<li><a href="/Backgrounds/">Background Repository</a></li>
			<hr>
			<li><a href="/Evidence/">Evidence Repository</a></li>
			<hr>
			<li><a href="/DS/">DS-resolution Asset Repo</a></li>
			<hr>
			<li><a href="/Scripts/">AAO Website Scripts</a></li>
			<br>
			<li><a href="https://aaonline.fr/player.php?trial_id=150704" target="_blank" rel="noopener noreferrer">Play the tutorial in AAO!</a></li>
			<hr>
			<li><a href="https://www.aaonline.fr/player.php?trial_id=150701" target="_blank" rel="noopener noreferrer">Play a short demo here!</a></li>
			<hr>
			<li><a href="https://github.com/aao-hd-repo/aao-hd-repo.github.io" target="_blank" rel="noopener noreferrer">See this website's code</a></li>
		</ul>
	`;

	const activeLink = nativeNav.querySelector(`a[href="${window.location.pathname}"]`);
	
	if (activeLink) {
		activeLink.classList.add("current-page");
	}
}