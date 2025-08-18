import type { Metadata } from "next";
import {Poppins} from 'next/font/google'
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "FilleKeep",
  description: "FileKeep - Simple and Secure File Storage Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
