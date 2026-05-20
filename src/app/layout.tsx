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
      <body className="min-h-full flex bg-white">
        <Sidebar />
        <main className="flex-1 p-16 max-w-6xl mx-auto overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
