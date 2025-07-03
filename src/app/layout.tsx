import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NCPID 2025 Conference",
  description: "Abstract submission and management system for NCPID 2025 Conference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
