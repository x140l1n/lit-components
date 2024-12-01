import { describe, expect, beforeEach, it } from 'vitest';
import { userEvent } from '@vitest/browser/context';

import './';

describe('<my-button />', () => {
	beforeEach(() => {
		document.body.innerHTML = '<my-button>Click Me!</my-button>';
	});

	it('should render a button', () => {
		const button = document.querySelector('my-button');
		expect(button).not.toBeNull();
	});

	it('should have a shadow root', () => {
		const button = document.querySelector('my-button');
		expect(button?.shadowRoot).not.toBeNull();
	});

	it('should have a default text', () => {
		const button = document.querySelector('my-button');
		expect(button?.textContent).toBe('Click Me!');
	});
});

describe('<my-button variant="secondary" />', () => {
	beforeEach(() => {
		document.body.innerHTML =
			'<my-button variant="secondary">Click Me!</my-button>';
	});

	it('should have a secondary class', () => {
		const button = document.querySelector('my-button');
		const buttonRoot = button?.renderRoot?.querySelector('button');

		expect(buttonRoot?.classList.contains('secondary')).toBe(true);
	});
});

describe('<my-button hover />', async () => {
	beforeEach(() => {
		document.body.innerHTML = '<my-button>Click Me!</my-button>';
	});

	it('should change brightness to 90% on hover', async () => {
		const button = document.querySelector('my-button');
		const buttonRoot = button?.renderRoot?.querySelector('button') as Element;

		await userEvent.hover(buttonRoot);

        const styles = getComputedStyle(buttonRoot);

		expect(styles.filter).toBe('brightness(0.9)');
	});
});
