import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "HDKWA Danielson PD Portal",
  description: "A professional development portal for mastering the Danielson Framework.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white lg:flex">
        <Sidebar />
        <main className="w-full flex-1 px-5 pb-10 pt-28 sm:px-8 lg:mx-auto lg:max-w-6xl lg:p-16 lg:overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
