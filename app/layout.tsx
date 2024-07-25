import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "./components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
              <Background />
              <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden h-screen">
                  <header className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
                    <div className="container">
                      <h1 className="text-2xl">MTGStats</h1>
                    </div>
                  </header>
              
              
                  <footer className="fixed bottom-0 left-0 flex h-32 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
                    <a
                      className="pointer-events-none flex place-items-center gap-2 p-8"
                      href="https://www.atre.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      made with 💓 by <strong>Atre</strong>
                    </a>
                  </footer>
                  {children}
            </main>
        </body>
    </html>
  );
}
