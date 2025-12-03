import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wonder VDI",
  description: "Gestion pour VDI Luxe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-50 text-slate-900 pb-20`}>
        <div className="max-w-md mx-auto min-h-screen bg-gray-50 relative shadow-2xl">
          {children}
          <BottomNav />
        </div>
      </body>
    </html>
  );
}