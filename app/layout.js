import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { QueryProvider } from "@/components/QueryProvier";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dummy Product Page",
  description: "Dummy Product Page with nextJs, tanstack query, redux toolkit.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <Providers>
            <Header />
            {children}
          </Providers>
        </QueryProvider>
      </body>
    </html>
  );
}
