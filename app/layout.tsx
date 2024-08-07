"use client";
import "./globals.scss";

import { usePathname } from "next/navigation";

import Background from "@components/Background";
import Footer from "@components/Footer";
import Header from "@components/Header";

import { poiret_one, raleway } from "@lib/fonts";

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const pathname = usePathname();
	return (
		<html lang="en" className={`${raleway.className} ${poiret_one.className}`}>
			<body className="animate-gradient">
				<Background />
				{pathname !== "/game/lifecounter" && <Header />}
				<main className="flex min-h-screen flex-col items-center justify-center px-10  pt-24 font-sans">
					{children}
				</main>
				{pathname !== "/game/lifecounter" && <Footer />}
			</body>
		</html>
	);
}
