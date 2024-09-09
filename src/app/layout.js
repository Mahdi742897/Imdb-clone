import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import { Suspense } from 'react';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB clone",
  description: "this is movie database website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="transition-colors duration-[400ms]">
          <ThemeProvider attribute="class">
            <Header />
            <Suspense fallback={<div>Loading search results...</div>}>
              <Navbar />
            </Suspense>
            <SearchBox />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
