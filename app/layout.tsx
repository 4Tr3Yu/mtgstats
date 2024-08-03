import './globals.scss';

import Background from '@components/Background';
import Header from '@components/Header';
import Footer from '@components/Footer';

import { metadata, viewport } from '@lib/meta';
import { raleway, poiret_one } from '@lib/fonts'

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
	return (
		<html lang="en" className={`${raleway.className} ${poiret_one.className}`}>
			<body className='animate-gradient'>
				<Background />
				<main className="flex min-h-screen flex-col items-center justify-center px-10  pt-24 font-sans">
					<Header/>
					{children}
					<Footer/>
				</main>
			</body>
		</html>
	);
}
