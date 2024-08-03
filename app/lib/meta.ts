import { Viewport, Metadata } from "next";

export const viewport: Viewport = {
	themeColor: [{media:'(prefers-color-scheme: dark)', color:'#fff'}],
	minimumScale:1,
	initialScale:1,
	width: 'device-width',
	viewportFit: 'cover',
};

export const metadata: Metadata = {
	title: 'MTGStats',
	description: 'Life counter, game tracker stats and more coming soon...',
	generator: 'Next.js',
	manifest: '/manifest.json',
	keywords: ['MTG', 'Magic The Gathering', 'Stats', 'Lifecounter'],
	authors: [
		{
			name: 'Jorge "Atre" Aguirre',
			url: 'https://www.atre.dev'
		}
	],
	icons: [
		{  rel: 'favicon', url: 'favicon.ico' },
        { rel: 'favicon-16x16', url: 'favicon-16x16.png' },
		{ rel: 'favicon-32x32', url: 'favicon-32x32.png' },
        { rel: 'android-chrome-512x512', url: 'android-chrome-512x512.png' },
		{ rel: 'apple-touch-icon', url: 'apple-touch-icon.png' },
        { rel: 'android-chrome-192x192', url: 'android-chrome-192x192.png' }
	]
};