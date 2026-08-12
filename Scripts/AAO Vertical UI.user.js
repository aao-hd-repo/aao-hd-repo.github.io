// ==UserScript==
// @name			AAO Vertical UI
// @namespace		http://tampermonkey.net/
// @version			2026-08-11
// @description		VERTICAL AND RED!!!! thanks Eyacorkett for allowing me to borrow hd script thanks
// @author			betboxer
// @match			*://www.aaonline.fr/player.php*
// @match			*://aaonline.fr/player.php*
// @icon			https://file.garden/aDY02JoWpRDHJHK4/Ace%20Attorney%20Online/UI/Icon.png
// @grant			none
// ==/UserScript==

(function() {
	'use strict';
	const style = document.createElement('style');
	style.innerHTML = `
		div.textbox .name
    {
      position: absolute;
      left: auto;
      bottom: 0;
      z-index: 1;

      height:16px;
      min-width:44px;
      padding:0 2px;
      overflow: hidden;

      border:2px ridge rgba(136,136,136,0.75);
      border-radius:3px;

      background:rgba(255,0,0,0.8);

      white-space:nowrap;
      font-size:12px;
      line-height: 14px;
      color:white;
    }

    div.textbox .dialogue
    {
      width:80px; min-height:184px;
      right:0;
      padding:2px 2px 2px 6px;

      border:2px ridge rgba(136,136,136,0.75);
      border-radius:3px;

      resize:none;
      background:rgba(0,0,0,0.75);

      font:12px aaDialogueText, sans-serif;
      text-align:start;
      white-space: pre-wrap;
      line-height:16px;
      color:white;
    }

    .display_engine_text div.textbox.bottom
    {
      bottom: 0;
    }

    div.textbox.bottom .name
    {
      bottom: 0;
      right: 0;
      top: auto;
    }

    div.textbox.bottom .dialogue
    {
      margin-top: 0px;
      margin-left: 64%;
    }

    div.textbox.top .dialogue
    {
      margin-bottom: 0px;
    }

    .display_engine_characters
    {
	    position: relative;
	    height: 100%;
	    width: 100%;
    }

    .display_engine_screen > .viewport
    {
      position: relative;
      overflow: hidden;
      left: -40px;
    }

    [id|=screen] {
      background: red;
      box-shadow: 0 0 3px black;
    }

	`;

	document.documentElement.appendChild(style);

})();
