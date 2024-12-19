import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avondale Taekwon-Do",
  description: "Are you ready to train your body and mind?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
