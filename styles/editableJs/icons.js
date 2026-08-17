//////////////////////////////////////////////////////////////////////////////////////////
// Character icon element
//////////////////////////////////////////////////////////////////////////////////////////
class GameCharacter extends HTMLElement {
	connectedCallback() {
		const game = this.getAttribute('game');
		const name = this.getAttribute('name');
		const type = this.getAttribute('type');
		const img = this.getAttribute('img');
		const img2 = this.getAttribute('img2');

		const baseDir = img ? img : game;
		const nameDir = img2 ? img2 : name;
		const imageUrl = `${baseDir}/${nameDir}/Profile.png`;

		if (type === 'icon') {
			this.innerHTML = `
				<div class="character-card">
					<img src="${imageUrl}" alt="${name}" width="125" height="125">
					<p><b>${name}</b></p>
					<button class="copyBtn" onclick="copyUrl('https://aao-hd-repo.github.io/Characters/${game}/${name}/Profile.png', this)">Copy URL</button>
				</div>
			`;
		} else {
			this.innerHTML = `
				<div class="character-card">
					<a href="${game}/${name}">
						<img src="${imageUrl}" alt="${name}" width="125" height="125">
						<p><b>${name}</b></p>
					</a>
				</div>
			`;
		}
	}
}
customElements.define('game-character', GameCharacter);


//////////////////////////////////////////////////////////////////////////////////////////
// Background icon element
//////////////////////////////////////////////////////////////////////////////////////////
class GamePlace extends HTMLElement {
	connectedCallback() {
		const game = this.getAttribute('game');
		const place = this.getAttribute('place');
		const imageUrl = `${game}/${place}.svg`;

		this.innerHTML = `
			<div class="place-card">
				<img src="${imageUrl}" alt="${place}" height="192">
				<p><b>${place}</b></p>
				<button class="copyBtn">Copy URL</button>
			</div>
		`;

		const targetUrl = `https://aao-hd-repo.github.io/Backgrounds/${game}/${place}.svg`;
		const btn = this.querySelector('.copyBtn');

		btn.addEventListener('click', (event) => {
			copyUrl(targetUrl, event.target);
		});
	}
}
customElements.define('game-place', GamePlace);


//////////////////////////////////////////////////////////////////////////////////////////
// Courtroom icon element
//////////////////////////////////////////////////////////////////////////////////////////
class GameCourt extends HTMLElement {
	connectedCallback() {
		const place = this.getAttribute('place');
		const name = this.getAttribute('name');
		const imageUrlBG = `Courtrooms/${place} BG.svg`;
		const imageUrlFG = `Courtrooms/${place} FG.svg`;

		this.innerHTML = `
			<div class="court-card">
				<div class="court-image">
					<img src="${imageUrlBG}" alt="${name}" height="192" class="bg">
					<img src="${imageUrlFG}" alt="${name}" height="192" class="fg">
				</div>
				<p><b>${name}</b></p>
				<button class="copyBgBtn">Copy BG URL</button>
				<button class="copyFgBtn">Copy FG URL</button>
			</div>
		`;

		const targetUrlBG = `https://aao-hd-repo.github.io/Backgrounds/Courtrooms/${place} BG.svg`;
		const targetUrlFG = `https://aao-hd-repo.github.io/Backgrounds/Courtrooms/${place} FG.svg`;

		const bgBtn = this.querySelector('.copyBgBtn');
		const fgBtn = this.querySelector('.copyFgBtn');

		bgBtn.addEventListener('click', (event) => {
			copyUrl(targetUrlBG, event.target);
		});
		fgBtn.addEventListener('click', (event) => {
			copyUrl(targetUrlFG, event.target);
		});
	}
}
customElements.define('game-court', GameCourt);


//////////////////////////////////////////////////////////////////////////////////////////
// Evidence icon element
//////////////////////////////////////////////////////////////////////////////////////////
class GameEvidence extends HTMLElement {
	connectedCallback() {
		const game = this.getAttribute('game');
		const name = this.getAttribute('name');
		const imageUrl = `${game}/${name}.png`;

		this.innerHTML = `
			<div class="character-card">
				<img src="${imageUrl}" alt="${name}" height="125">
				<p><b>${name}</b></p>
				<button class="copyBtn">Copy URL</button>
			</div>
		`;

		const targetUrl = `https://aao-hd-repo.github.io/Evidence/${game}/${name}.png`;
		const btn = this.querySelector('.copyBtn');

		btn.addEventListener('click', (event) => {
			copyUrl(targetUrl, event.target);
		});
	}
}
customElements.define('game-evidence', GameEvidence);


//////////////////////////////////////////////////////////////////////////////////////////
// DS Character icon element
//////////////////////////////////////////////////////////////////////////////////////////
class DSGameCharacter extends HTMLElement {
	connectedCallback() {
		const game = this.getAttribute('game');
		const name = this.getAttribute('name');
		const type = this.getAttribute('type');
		const imageUrl = `Characters/${game}/${name}/Profile.png`;

		if (type === 'icon') {
			this.innerHTML = `
				<div class="character-card">
					<img src="${imageUrl}" alt="${name}" width="125" height="125" style="image-rendering: pixelated">
					<p><b>${name}</b></p>
					<button class="copyBtn" onclick="copyUrl('https://aao-hd-repo.github.io/DS/Characters/${game}/${name}/Profile.png', this)">Copy URL</button>
				</div>
			`;
		} else {
			this.innerHTML = `
				<div class="character-card">
					<a href="Characters/${game}/${name}">
						<img src="${imageUrl}" alt="${name}" width="125 height="125" style="image-rendering: pixelated">
						<p><b>${name}</b></p>
					</a>
				</div>
			`;
		}
	}
}
customElements.define('ds-game-character', DSGameCharacter);


//////////////////////////////////////////////////////////////////////////////////////////
// DS Place icon element
//////////////////////////////////////////////////////////////////////////////////////////
class DSGamePlace extends HTMLElement {
	connectedCallback() {
		const game = this.getAttribute('game');
		const place = this.getAttribute('place');
		const imageUrl = `Backgrounds/${game}/${place}.png`;

		this.innerHTML = `
			<div class="place-card">
				<img src="${imageUrl}" alt="${place}" height="192" style="image-rendering: pixelated">
				<p><b>${place}</b></p>
				<button class="copyBtn">Copy URL</button>
			</div>
		`;

		const targetUrl = `https://aao-hd-repo.github.io/DS/Backgrounds/${game}/${place}.png`;
		const btn = this.querySelector('.copyBtn');

		btn.addEventListener('click', (event) => {
			copyUrl(targetUrl, event.target);
		});
	}
}
customElements.define('ds-game-place', DSGamePlace);