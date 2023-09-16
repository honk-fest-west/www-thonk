const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			title: ['Berlin Sans FB Bold', 'cursive'],
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.trueGray,
			'base-50': 'rgb(var(--color-base-50) / <alpha-value>)',
			'base-100': 'rgb(var(--color-base-100) / <alpha-value>)',
			'base-200': 'rgb(var(--color-base-200) / <alpha-value>)',
			'base-300': 'rgb(var(--color-base-300) / <alpha-value>)',
			'base-400': 'rgb(var(--color-base-400) / <alpha-value>)',
			'base-500': 'rgb(var(--color-base-500) / <alpha-value>)',
			'base-600': 'rgb(var(--color-base-600) / <alpha-value>)',
			'base-700': 'rgb(var(--color-base-700) / <alpha-value>)',
			'base-800': 'rgb(var(--color-base-800) / <alpha-value>)',
			'base-900': 'rgb(var(--color-base-900) / <alpha-value>)',
			'base-950': 'rgb(var(--color-base-950) / <alpha-value>)',

			'primary-50': 'rgb(var(--color-primary-50) / <alpha-value>)',
			'primary-100': 'rgb(var(--color-primary-100) / <alpha-value>)',
			'primary-200': 'rgb(var(--color-primary-200) / <alpha-value>)',
			'primary-300': 'rgb(var(--color-primary-300) / <alpha-value>)',
			'primary-400': 'rgb(var(--color-primary-400) / <alpha-value>)',
			'primary-500': 'rgb(var(--color-primary-500) / <alpha-value>)',
			'primary-600': 'rgb(var(--color-primary-600) / <alpha-value>)',
			'primary-700': 'rgb(var(--color-primary-700) / <alpha-value>)',
			'primary-800': 'rgb(var(--color-primary-800) / <alpha-value>)',
			'primary-900': 'rgb(var(--color-primary-900) / <alpha-value>)',
			'primary-950': 'rgb(var(--color-primary-950) / <alpha-value>)',

			'secondary-50': 'rgb(var(--color-secondary-50) / <alpha-value>)',
			'secondary-100': 'rgb(var(--color-secondary-100) / <alpha-value>)',
			'secondary-200': 'rgb(var(--color-secondary-200) / <alpha-value>)',
			'secondary-300': 'rgb(var(--color-secondary-300) / <alpha-value>)',
			'secondary-400': 'rgb(var(--color-secondary-400) / <alpha-value>)',
			'secondary-500': 'rgb(var(--color-secondary-500) / <alpha-value>)',
			'secondary-600': 'rgb(var(--color-secondary-600) / <alpha-value>)',
			'secondary-700': 'rgb(var(--color-secondary-700) / <alpha-value>)',
			'secondary-800': 'rgb(var(--color-secondary-800) / <alpha-value>)',
			'secondary-900': 'rgb(var(--color-secondary-900) / <alpha-value>)',
			'secondary-950': 'rgb(var(--color-secondary-950) / <alpha-value>)',

			'tertiary-50': 'rgb(var(--color-tertiary-50) / <alpha-value>)',
			'tertiary-100': 'rgb(var(--color-tertiary-100) / <alpha-value>)',
			'tertiary-200': 'rgb(var(--color-tertiary-200) / <alpha-value>)',
			'tertiary-300': 'rgb(var(--color-tertiary-300) / <alpha-value>)',
			'tertiary-400': 'rgb(var(--color-tertiary-400) / <alpha-value>)',
			'tertiary-500': 'rgb(var(--color-tertiary-500) / <alpha-value>)',
			'tertiary-600': 'rgb(var(--color-tertiary-600) / <alpha-value>)',
			'tertiary-700': 'rgb(var(--color-tertiary-700) / <alpha-value>)',
			'tertiary-800': 'rgb(var(--color-tertiary-800) / <alpha-value>)',
			'tertiary-900': 'rgb(var(--color-tertiary-900) / <alpha-value>)',
			'tertiary-950': 'rgb(var(--color-tertiary-950) / <alpha-value>)'
		}
	},
	plugins: [],
}
