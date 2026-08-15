var nativeNav = document.getElementById("nav");

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
			<li><a href="https://aaonline.fr">Play the tutorial in AAO!</a></li>
			<br>
			<li><a href="https://github.com/aao-hd-repo/aao-hd-repo.github.io">See the website's code</a></li>
		</ul>
	`;
}
