import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './styles';
import template from './template';

@customElement('my-button')
export class MyButton extends LitElement {
	@property({ type: String }) variant = 'primary';

	static get styles() {
		return css`${unsafeCSS(styles)}`;
	}

	render() {
		return html`${template(this)}`;
	}
}
