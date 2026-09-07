import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reclaim Athletics — Recover the seats. Recover the revenue.",
  description: "Inventory recovery infrastructure for college athletic departments.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
