import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './button.styles';
import template from './button.template';

import type { IButtonProps, TVariant, TSizes } from './button.d';

@customElement('my-button')
export class MyButton extends LitElement implements IButtonProps {
	@property()
	variant: TVariant = 'primary';

	@property()
	size: TSizes = 'default';

	static get styles() {
		return css`${unsafeCSS(styles)}`;
	}

	render() {
		return html`${template(this)}`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'my-button': MyButton;
	}
}
