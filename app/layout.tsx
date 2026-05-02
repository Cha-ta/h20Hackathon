import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "San Joaquin Weather Time Machine",
  description: "A weather-history time machine for San Joaquin County.",
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
