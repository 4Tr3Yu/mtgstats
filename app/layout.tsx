import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';

import Background from './components/Background';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: 'MTGStats',
	description: 'Life counter, game tracker stats and more coming soon...',
	generator: 'Next.js',
	manifest: '/manifest.json',
	keywords: ['MTG', 'Magic The Gathering', 'Stats', 'Lifecounter'],
	themeColor: [{media:'(prefers-color-scheme: dark)', color:'#fff'}],
	authors: [
		{
			name: 'Jorge "Atre" Aguirre',
			url: 'https://www.atre.dev'
		}
	],
	viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
	icons: [
		{  rel: 'favicon', url: 'favicon.ico' },
        { rel: 'favicon-16x16', url: 'favicon-16x16.png' },
		{ rel: 'favicon-32x32', url: 'favicon-32x32.png' },
        { rel: 'android-chrome-512x512', url: 'android-chrome-512x512.png' },
		{
                        url: './apple-touch-icon.png',
			rel: './apple-touch-icon.png',
        },
        {
                        url: './android-chrome-192x192.png',
			rel: './android-chrome-192x192.png',
        }

	]
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
	return (
		<html lang="en">
			<body className="animate-gradient">
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
