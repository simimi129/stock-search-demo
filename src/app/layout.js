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
        className={`${geistSans.variable} ${geistMono.variable} flex h-screen w-full flex-col items-center bg-white antialiased`}
      >
        <nav className="flex w-full max-w-[1000px] items-center justify-between bg-white p-6 text-black">
          <h1 className="text-lg sm:text-2xl">Stock Search App</h1>
          <div className="flex gap-1 sm:gap-6">
            <NavLink href="/">Stock Search</NavLink>
            <NavLink href="/favourites">Favourite Stocks</NavLink>
          </div>
        </nav>
        <main className="flex h-full w-full max-w-[1000px] justify-center p-2 text-black">
          {children}
        </main>
      </body>
    </html>
  );
}
