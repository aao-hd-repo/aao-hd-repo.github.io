// Collection tabs
function openSeries(evt, seriesName) {
	var i, tabs, mainLinks, tabContents, gameLinks;

	// 1. Hides all series sub-menus (.tab)
	tabs = document.getElementsByClassName("tab");
	for (i = 0; i < tabs.length; i++) {
		tabs[i].style.display = "none";
	}

	// 2. Deactivates all main tab buttons (removes active class)
	mainLinks = document.getElementsByClassName("main-tablinks");
	for (i = 0; i < mainLinks.length; i++) {
		mainLinks[i].className = mainLinks[i].className.replace(" active", "");
	}

	// 3. Opens the clicked series sub-menu container
	var currentSeries = document.getElementById(seriesName);
	currentSeries.style.display = "flex";
	evt.currentTarget.className += " active";
	
	// 4.
	localStorage.setItem("lastActiveSeries", seriesName);

	// 5. Restores the saved game or clicks the first one if it's the first time
	var savedGameId = localStorage.getItem("lastActiveGame_" + seriesName);
	var gameButtonToClick = null;

	// 5.1. Looks for the specific button that opens the saved game ID
	if (savedGameId) {
		gameButtonToClick = currentSeries.querySelector(`[onclick*="${savedGameId}"]`);
	}

	// 5.2. Selects first tab if no save exists or button isn't found
	if (!gameButtonToClick) {
		gameButtonToClick = currentSeries.querySelector(".tablinks");
	}
	if (gameButtonToClick) {
		gameButtonToClick.click();
	}
}


// Game tabs
function openGame(evt, gameName) {
	var i, tabcontent, tablinks;

	// 1. Hides all game sections
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// 2. Deactivates all game buttons
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// 3. Shows current game and highlight its button
	document.getElementById(gameName).style.display = "block";
	evt.currentTarget.className += " active";

	// 4. Saves selected tab to localStorage
	var seriesName = evt.currentTarget.closest('.tab').id;
	localStorage.setItem("lastActiveGame_" + seriesName, gameName);
}


// Looks for a saved series on load. If nothing is saved, uses defaultOpen
var savedSeries = localStorage.getItem("lastActiveSeries");
var seriesButtonToClick = null;

if (savedSeries) {
	seriesButtonToClick = document.querySelector(`.main-tablinks[onclick*="${savedSeries}"]`);
}

if (seriesButtonToClick) {
	seriesButtonToClick.click();
} else {
	document.getElementById("defaultOpen").click();
}