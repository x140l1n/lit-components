import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@components/button';

@customElement('my-app')
export class MyApp extends LitElement {
	render() {
		return html`
			<my-button>
				Click me!
			</my-button>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'my-app': MyApp;
	}
}
