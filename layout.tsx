import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXORA — Architecture · Development · Interiors",
  description:
    "NEXORA is a contemporary architecture and development studio concept exploring people, place and space.",
  metadataBase: new URL("https://nexora-concept.local")
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
