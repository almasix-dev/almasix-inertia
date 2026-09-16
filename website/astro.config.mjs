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
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/almasix-dev/almasix-inertia' },
			],
			editLink: {
				baseUrl: 'https://github.com/almasix-dev/almasix-inertia/edit/main/website/',
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
				{
					tag: 'meta',
					attrs: { property: 'og:image', content: 'https://inertia.almasix.com/og.png' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:width', content: '1200' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:height', content: '630' },
				},
				{
					tag: 'meta',
					attrs: { property: 'og:image:alt', content: 'Almasix Inertia — Almasix' },
				},
				{
					tag: 'meta',
					attrs: { name: 'twitter:image', content: 'https://inertia.almasix.com/og.png' },
				},
				{
					tag: 'meta',
					attrs: { name: 'theme-color', content: '#F1511B' },
				},
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"WebSite\", \"@id\": \"https://inertia.almasix.com/#website\", \"url\": \"https://inertia.almasix.com/\", \"name\": \"Almasix Inertia\", \"description\": \"Server-side Inertia.js adapter for Almasix \\u2014 Vue, React, Svelte clients, SSR, and prop helpers.\", \"publisher\": {\"@id\": \"https://almasix.com/#organization\"}, \"inLanguage\": \"en\"}, {\"@type\": \"SoftwareApplication\", \"@id\": \"https://inertia.almasix.com/#software\", \"name\": \"Almasix Inertia\", \"applicationCategory\": \"DeveloperApplication\", \"url\": \"https://inertia.almasix.com/\", \"isPartOf\": {\"@id\": \"https://almasix.com/#software\"}, \"publisher\": {\"@id\": \"https://almasix.com/#organization\"}}]}",
				},

			],
			sidebar: [
				{ label: 'Home', slug: 'index' },
				{
					label: 'Inertia',
					items: [
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
