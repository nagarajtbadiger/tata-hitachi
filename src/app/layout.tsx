import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tata Hitachi",
  description:
    "Discover Tata Hitachi's heavy construction machines – Excavators, Backhoe Loaders, Dump Trucks, Wheel Loaders, and more. Elevate your projects with quality construction equipments and attachments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
