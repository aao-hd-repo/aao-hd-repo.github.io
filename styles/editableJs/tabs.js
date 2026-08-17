//////////////////////////////////////////////////////////////////////////////////////////
// Creates a unique localStorage key bound to the current page URL path
//////////////////////////////////////////////////////////////////////////////////////////
const getPageKey = (baseKey) => `${baseKey}_${window.location.pathname}`;


//////////////////////////////////////////////////////////////////////////////////////////
// Collection tabs
//////////////////////////////////////////////////////////////////////////////////////////
function openSeries(evt, seriesName) {
	document.querySelectorAll(".tab").forEach(tab => tab.style.display = "none");
	document.querySelectorAll(".main-tablinks").forEach(link => link.classList.remove("active"));

	const currentSeries = document.getElementById(seriesName);
	if (currentSeries) {
		currentSeries.style.display = "flex";
	}
	evt?.currentTarget?.classList.add("active");

	localStorage.setItem(getPageKey("lastActiveSeries"), seriesName);

	// Restores sub-game history specific to this page
	const savedGameId = localStorage.getItem(getPageKey(`lastActiveGame_${seriesName}`));
	const gameButtonToClick = (savedGameId && currentSeries?.querySelector(`[onclick*="${CSS.escape(savedGameId)}"]`)) 
		|| currentSeries?.querySelector(".tablinks");

	gameButtonToClick?.click();
}


//////////////////////////////////////////////////////////////////////////////////////////
// Game tabs
//////////////////////////////////////////////////////////////////////////////////////////
function openGame(evt, gameName) {
	document.querySelectorAll(".tabcontent").forEach(content => content.style.display = "none");
	document.querySelectorAll(".tablinks").forEach(link => link.classList.remove("active"));

	const currentGame = document.getElementById(gameName);
	if (currentGame) {
		currentGame.style.display = "block";
	}

	if (evt?.currentTarget) {
		evt.currentTarget.classList.add("active");
		const parentTab = evt.currentTarget.closest(".tab");
		if (parentTab) {
			localStorage.setItem(getPageKey(`lastActiveGame_${parentTab.id}`), gameName);
		}
	}
}


//////////////////////////////////////////////////////////////////////////////////////////
// History restoration on load
//////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
	const savedSeries = localStorage.getItem(getPageKey("lastActiveSeries"));
	let btnToClick = null;

	if (savedSeries) {
		btnToClick = Array.from(document.querySelectorAll(".main-tablinks")).find(btn => {
			const onclickText = btn.getAttribute("onclick") || "";
			const match = onclickText.match(/openSeries\s*\([^,]+,\s*['"`](.*?)['"`]\)/);
			return match && match[1] === savedSeries;
		});
	}

	btnToClick ||= document.getElementById("defaultOpen") || document.querySelector(".main-tablinks");
	btnToClick?.click();
});
