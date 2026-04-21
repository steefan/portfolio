import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stefan Condurachi — Senior Product Designer",
  description:
    "Senior product designer — operator-facing tools, AI-native workflows. Case studies: Oramo, Gilead Sciences, Ownzones.",
  robots: { index: true, follow: true },
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
