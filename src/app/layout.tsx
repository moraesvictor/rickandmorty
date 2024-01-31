import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Sidemenu } from "./components/Sidemenu/Sidemenu";
import clsx from "clsx";
import { MainHeader } from "./components/MainHeader/MainHeader";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: '400' })

export const metadata: Metadata = {
  title: "Ricky and Morty Explorer",
  description: "Ricky and Morty Explorer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, poppins.className, "overflow-hidden")}>
        <Providers>
          <div className="w-full flex-none md:w-64">
            <Sidemenu />
          </div>
          <div className="h-screen overflow-y-scroll overflow-x-hidden flex-grow">
            <MainHeader />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
