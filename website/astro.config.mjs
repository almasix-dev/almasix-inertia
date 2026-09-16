// @ts-check
import { readFileSync } from 'node:fs';

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://inertia.almasix.com',
	base: '/',
	devToolbar: { enabled: false },
	integrations: [
		starlight({
			title: 'Inertia',
			description:
				'Server-side Inertia.js adapter for Almasix — official Vue, React, and Svelte clients, SSR, and prop helpers.',
			logo: {
				light: './src/assets/almasix-banner-light.svg',
				dark: './src/assets/almasix-banner-dark.svg',
				alt: 'Almasix',
				replacesTitle: true,
			},
			favicon: '/favicon.svg',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/almasix-dev/inertia' },
			],
			editLink: {
				baseUrl: 'https://github.com/almasix-dev/inertia/edit/main/website/',
			},
			customCss: ['./src/styles/custom.css'],
			components: {
				Header: './src/components/Header.astro',
				PageFrame: './src/components/PageFrame.astro',
				SiteTitle: './src/components/SiteTitle.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			expressiveCode: {
				themes: ['one-dark-pro'],
				useStarlightDarkModeSwitch: false,
				useStarlightUiThemeColors: false,
				emitExternalStylesheet: false,
				styleOverrides: {
					borderRadius: '0.85rem',
					borderWidth: '1px',
					codeFontFamily: "'JetBrains Mono', ui-monospace, monospace",
					codeFontSize: '0.9rem',
					codeBackground: '#282c34',
					codeForeground: '#abb2bf',
					frames: {
						shadowColor: 'rgba(0, 0, 0, 0.4)',
						editorBackground: '#282c34',
						terminalBackground: '#282c34',
					},
				},
			},
			head: [
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: true,
					},
				},
				{
					tag: 'script',
					content: readFileSync('./src/scripts/sidebar-accordion.js', 'utf8'),
				},
			],
			sidebar: [
				{
					label: 'Inertia',
					items: [
						{ label: 'Introduction', slug: 'index' },
						{ label: 'Installation', slug: 'installation' },
						{ label: 'Rendering', slug: 'rendering' },
						{ label: 'Shared props', slug: 'shared-props' },
						{ label: 'Prop helpers', slug: 'prop-helpers' },
						{ label: 'SSR', slug: 'ssr' },
					],
				},
			],
		}),
	],
});
