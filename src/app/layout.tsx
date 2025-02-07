import type { Metadata } from "next";
import "./globals.css";

import { Header, Footer } from "@/components/layout";

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
      <body className={`antialiased bg-gray-50 flex flex-col min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
