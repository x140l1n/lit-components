import { html } from 'lit';
import type { MyButton } from '.';

export default (props: MyButton) => {
	const getClassNames = (...args: string[]) => ['button', ...args].filter(Boolean).join(' ');

	return html`
        <button class=${getClassNames(props.variant, props.size)}>
            <slot></slot>
        </button>
    `;
};
