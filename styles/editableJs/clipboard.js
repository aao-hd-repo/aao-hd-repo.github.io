// Button to paste a link to the clipboard - Thanks Trybien
function copyUrl(url, button) {
	if (navigator.clipboard && window.isSecureContext) {
		navigator.clipboard.writeText(url)
			.then(() => flashCopied(button));
	} else {
		const textArea = document.createElement("textarea");
		textArea.value = url;
		document.body.appendChild(textArea);
		textArea.select();
		document.execCommand("copy");
		document.body.removeChild(textArea);
		flashCopied(button);
	}
}

function flashCopied(button) {
	const original = button.textContent;
	button.textContent = "Copied!";
	button.disabled = true;
	setTimeout(() => {
		button.textContent = original;
		button.disabled = false;
	}, 1200);
}