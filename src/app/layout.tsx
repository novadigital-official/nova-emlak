import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nova Emlak & Gayrimenkul | Antalya Lüks Villa & Portföy Yönetimi",
  description: "Antalya Konyaaltı, Muratpaşa, Lara, Döşemealtı ve Alanya bölgesinde satılık ve kiralık lüks villalar, panaromik deniz manzaralı daireler. T.C. Lisanslı Taşınmaz Ticareti Yetki No: 0701894.",
  keywords: ["Antalya Emlak", "Antalya Lüks Villa", "Konyaaltı Satılık Daire", "Lara Falez Deniz Manzaralı Daire", "Döşemealtı Müstakil Villa", "Nova Emlak"],
  authors: [{ name: "Nova Digital" }],
  openGraph: {
    title: "Nova Emlak & Gayrimenkul | Lüks Portföy",
    description: "Antalya'nın en elit gayrimenkul ve lüks villa koleksiyonu.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="flex flex-col min-h-screen bg-emlak-cream text-emlak-navy font-sans antialiased selection:bg-emlak-gold selection:text-emlak-navy">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
