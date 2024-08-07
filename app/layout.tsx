'use client'
import './globals.scss';

import { usePathname } from 'next/navigation';

import Background from '@components/Background';
import Header from '@components/Header';
import Footer from '@components/Footer';

import { metadata, viewport } from '@lib/meta';
import { raleway, poiret_one } from '@lib/fonts'


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
	const pathname = usePathname();
	return (
		<html lang="en" className={`${raleway.className} ${poiret_one.className}`}>
			<body className='animate-gradient'>
				<Background />
				{pathname !== '/game/lifecounter' && <Header/>}
				<main className="flex min-h-screen flex-col items-center justify-center px-10  pt-24 font-sans">
					{children}
				</main>
				{pathname !== '/game/lifecounter' && <Footer/>}
			</body>
		</html>
	);
}
