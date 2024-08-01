import type { Metadata, Viewport } from 'next';
import { Inter, Poiret_One, Raleway } from 'next/font/google';
import './globals.scss';

import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

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

const poiret_one = Poiret_One({
	weight: ['400'],
	subsets: ['latin']
})
const raleway = Raleway({
	weight: ['400', '100', '300', '700', '900', '500'],
	subsets: ['latin']
})

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
	return (
		<html lang="en">
			<body className={`${raleway.className} ${poiret_one.className} animate-gradient`}>
				<Background />
				<main className="flex min-h-screen flex-col items-center justify-center px-10  pt-24">
					<Header/>
					{children}
					<Footer/>
				</main>
			</body>
		</html>
	);
}
