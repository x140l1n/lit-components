import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@/components/button';

@customElement('my-app')
export class MyApp extends LitElement {
	@state()
	_count = 0 as number;
	
	render() {
		return html`
			<p>Count: ${this._count}</p>
			<my-button variant="primary" size="default" @click=${() => this._count++}>
				Click me!
			</my-button>
			<my-button variant="secondary" size="large" @click=${() => this._count++}>
				Click me!
			</my-button>
			<my-button variant="secondary" size="small" @click=${() => this._count++}>
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
