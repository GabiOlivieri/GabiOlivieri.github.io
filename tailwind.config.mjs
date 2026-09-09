/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Open Sans Variable"', 'Open Sans', 'system-ui', 'sans-serif'],
				mono: ['"Fira Code Variable"', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
			colors: {
				// Semantic monochrome tokens driven by CSS variables (see Layout.astro).
				paper: 'rgb(var(--paper) / <alpha-value>)',
				surface: 'rgb(var(--surface) / <alpha-value>)',
				ink: 'rgb(var(--ink) / <alpha-value>)',
				muted: 'rgb(var(--muted) / <alpha-value>)',
				faint: 'rgb(var(--faint) / <alpha-value>)',
				line: 'rgb(var(--line) / <alpha-value>)',
			},
			letterSpacing: {
				code: '0.02em',
			},
		},
	},
	plugins: [],
}
