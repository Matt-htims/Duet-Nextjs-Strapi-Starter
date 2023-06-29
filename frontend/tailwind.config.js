/** @type {import('tailwindcss').Config} */

// Colors
const black = '#000000';
const white = '#FFFFFF';
const dark = '#27187E';
const light = '#F1F2F6';
const gray = '#BEC1D7';
const primary = '#758BFD';
const secondary = '#AEB8FE';
const accent = '#FF8600';
const cta = '#FF8600';

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black,
			white,
			dark,
			light,
			gray,
			primary,
			secondary,
			accent,
			cta,
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
