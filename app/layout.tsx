import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoOdyssey",
  description: "Your personal journey in discovering the best car for your needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
      </body>
    </html>
  );
}
