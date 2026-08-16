// ==UserScript==
// @name			AAO HD UI
// @namespace		AAOHDUI
// @version			2026-08-11
// @description		A bunch of UI changes to AAO to give it feel reminiscent of DD / SoJ instead of the DS-era feel it normally has.
// @author			Eyacorkett
// @match			*://www.aaonline.fr/player.php*
// @match			*://aaonline.fr/player.php*
// @icon			https://aao-hd-repo.github.io/Scripts/AAO%20HD%20UI/Icon.png
// @grant			none
// ==/UserScript==

(function() {
	'use strict';

	// 1. Replaces Bottom Screen image of the courtroom with a higher quality version
	const background = document.querySelector('#screen-bottom');
	if (background) {
		background.style.backgroundImage = "url('https://aao-hd-repo.github.io/Scripts/AAO%20HD%20UI/HD%20BG%202.svg')";
	}


	// 2. Replaces Bottom Screen Arrows
	const arrowcenter = document.querySelector(`img[src="img/player/proceed.gif"]`);
	if (arrowcenter) {
		arrowcenter.src = "https://aao-hd-repo.github.io/Scripts/AAO%20HD%20UI/Proceed.svg";
	}

	const arrowskip = document.querySelector(`img[src="img/player/skip.gif"]`);
	if (arrowskip) {
		arrowskip.src = "https://aao-hd-repo.github.io/Scripts/AAO%20HD%20UI/Skip.svg";
	}

	const arrowcrossskip = document.querySelector(`img[src="img/player/statement_skip_forwards.gif"]`);
	if (arrowcrossskip) {
		arrowcrossskip.src = "https://aao-hd-repo.github.io/Scripts/AAO%20HD%20UI/Statement%20Skip.svg";
	}

	const arrowforward = document.querySelector(`img[src="img/player/statement_forwards.gif"]`);
	if (arrowforward) {
		arrowforward.src = "https://aao-hd-repo.github.io/Scripts/AAO%20HD%20UI/Statement%20Forwards.svg";
	}

	const arrowbackward = document.querySelector(`img[src="img/player/statement_backwards.gif"]`);
	if (arrowbackward) {
		arrowbackward.src = "https://aao-hd-repo.github.io/Scripts/AAO%20HD%20UI/Statement%20Backwards.svg";
	}


	// 3. Replaces sans-serif font elements with Kozuka Gothic Pro (Regular); this includes text from TimeAxis' Backlog script if it's installed
	// 4. Edits Textbox css data to make it more closely resemble the DD / SoJ textbox
	// 5. Edits Nametag css data to make it more closely resemble the DD / SoJ Nametag
	const fontUrl = "https://aao-hd-repo.github.io/Scripts/AAO%20HD%20UI/KozGoPro-Regular.otf";
	const style = document.createElement('style');
	style.innerHTML = `
		@font-face {
			font-family: 'DDSoJFont';
			src: url('${fontUrl}') format('opentype');
			font-weight: normal;
			font-style: normal;
		}
		div.textbox .dialogue, div.textbox .name, .backlog-header, .backlog-container {
			font-family: 'DDSoJFont', sans-serif !important;
			letter-spacing: 0.075em;
			word-spacing: 0.175em;
		}

		div.textbox .dialogue {
			width: 246.5px;
			padding: 3px 1px 3px 7px;
			border: 1px solid #FFF;
			border-radius: 4px 4px 4px 4px;
			background: rgba(0, 0, 0, 0.3);
		}
		div.textbox:has(.name:not(:empty)) .dialogue {
			border-top-left-radius: 0px;
		}
		div.textbox {
			filter: drop-shadow(0px -1px 2px rgba(0, 0, 0, 0.9)) drop-shadow(-1px 1px 2px rgba(0, 0, 0, 0.9));
		}


		div.textbox .name {
			z-index: 999;
			transform: translateY(-1.125px);
			width: max-content;
			height: 9.8px;
			font-size: 8px;
			white-space: nowrap;
			color: #FFF;
			border: none;
			padding: 2px 20px 2px 7px;
			background: #FFF;
			border-radius: 4px 0 0 0;
			clip-path: polygon(0% 0%, calc(100% - 14px) 0%, 100% 100%, 0% 100%);
		}
		div.textbox .name::before {
			content: "";
			position: absolute;
			top: 0.75px;
			left: 0.75px;
			right: 0.75px;
			bottom: 0;
			z-index: -1;
			background: #4422CD;
			border-radius: 3px 0 0 0;
			clip-path: polygon(0% 0%, calc(100% - 14px) 0%, calc(100% - 0.85px) 100%, 0% 100%);
		}

			.backlog-content {
			height: 144px;
		}

		.backlog-name {
			border: 1px solid #FFF;
			padding: 2px 3px;
		}

		[id|=screen] .bs-button {
			border: 2px solid #FFF;
		}

		[id|=screen] .buttonbar-top .bs-button.topleft {
			border-right: 2px solid;
			border-bottom: 2px solid;
		}

		[id|=screen] .buttonbar-top .bs-button.topright {
			border-left: 2px solid;
			border-bottom: 2px solid;
		}
	`;

	document.documentElement.appendChild(style);

})();
