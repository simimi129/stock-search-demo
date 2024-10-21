import localFont from "next/font/local";
import "./globals.css";
import NavLink from "./components/NavLink";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Stock Search App",
  description: "Stock search demo app for a job takehome assignment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen bg-white flex flex-col items-center w-full`}>
        <nav className="flex p-6 justify-between bg-white text-black items-center max-w-[1000px] w-full">
          <h1 className="text-lg sm:text-2xl">Stock Search App</h1>
          <div className="flex gap-1 sm:gap-6">
            <NavLink href="/">Stock Search</NavLink>
            <NavLink href="/favourites">Favourite Stocks</NavLink>
          </div>
        </nav>
        <main className="text-black p-2 h-full w-full max-w-[1000px]">
          {children}
        </main>
      </body>
    </html>
  );
}
