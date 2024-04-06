import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: 'thiagoribeirodev',
  description: 'Frontend Developer',
  icons: {
    icon: 'favicon.ico',
  }
};

const inter = Inter({
  weight: ['300', '400', '600', '700', '900'],
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
