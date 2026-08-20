const STATUS_CONFIG = {
	'Complete': '#017100',
	'Needs Updating': '#D75F02',
	'Not Created': '#111'
};


const CLEAN_BASE_URL = `${window.location.origin}${window.location.pathname.replace(/\/$/, '')}`;

class CharAnim extends HTMLTableRowElement {
	connectedCallback() {
		const anim = this.getAttribute('anim') || '';
		const status = this.getAttribute('status') || '';
		const type = this.getAttribute('type') || '';
		const creator = this.getAttribute('creator') || '';

		const url = this.getAttribute('url') || '';
		const finalUrl = `${CLEAN_BASE_URL}/${url}.svg`;

		const bgColor = STATUS_CONFIG[status] || 'transparent';
		const isNotCreated = status === 'Not Created';


		let prependHtml = '';
		if (this.hasAttribute('first-row')) {
			const pose = this.getAttribute('pose') || '';
	
			const rowspan = this.getAttribute('rowspan');
			const rowspanAttr = rowspan ? ` rowspan="${rowspan}"` : '';
			
			const img = isNotCreated ? '../../Placeholder.svg' : (this.getAttribute('img') || `${url}.svg`);
			const styleAttr = isNotCreated ? ' style="background-color: #111"' : '';

			prependHtml = `
				<td${styleAttr}${rowspanAttr}>${pose}</td>
				<td${styleAttr}${rowspanAttr}><img src="${img}" alt="${pose}"></td>
			`;
		}

		if (isNotCreated) {
			this.innerHTML = `
				${prependHtml}
				<td style="background-color: #111">${anim}</td>
				<td style="background-color: #111">Not Created</td>
				<td colspan="3" style="background-color: #111"></td>
			`;
			return;
		}

		this.innerHTML = `
			${prependHtml}
			<td>${anim}</td>
			<td style="background-color: ${bgColor}">${status}</td>
			<td>${type}</td>
			<td><button class="copyBtn" data-url="${finalUrl}">Copy URL</button></td>
			<td>${creator}</td>
		`;

		this.querySelector('.copyBtn')?.addEventListener('click', (e) => {
			if (typeof copyUrl === 'function') {
				copyUrl(finalUrl, e.target);
			}
		});
	}
}

customElements.define('char-anim', CharAnim, { extends: 'tr' });
