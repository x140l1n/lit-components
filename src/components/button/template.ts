import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import type { MyButton } from './index';

export default (props: MyButton) => {
	const classes = {
		button: true,
		'button--primary': props.variant === 'primary',
		'button--secondary': props.variant === 'secondary'
	};

	return html`
        <button class=${classMap(classes)}>
            <slot></slot>
        </button>
    `;
};
