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
  metadataBase: new URL('https://novaemlak.com.tr'), // TODO: Verify actual domain
  alternates: {
    canonical: 'https://novaemlak.com.tr', // TODO: Verify actual domain
  },
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "RealEstateAgent"],
      "@id": "https://novaemlak.com.tr/#business",
      "name": "Nova Emlak & Gayrimenkul",
      "description": "Antalya Konyaaltı, Muratpaşa, Lara, Döşemealtı ve Alanya bölgesinde satılık ve kiralık lüks villalar, panoramik deniz manzaralı daireler.",
      "url": "https://novaemlak.com.tr",
      "telephone": "+905070871789",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Antalya",
        "addressCountry": "TR"
      },
      "areaServed": ["Antalya", "Konyaaltı", "Muratpaşa", "Lara", "Döşemealtı", "Alanya"],
      "parentOrganization": {
        "@type": "Organization",
        "name": "NOVA GLOBAL",
        "legalName": "NOVA GLOBAL BİLİŞİM TURİZM ORGANİZASYON DANIŞMANLIK VE LİMİTED ŞİRKETİ"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://novaemlak.com.tr/#website",
      "url": "https://novaemlak.com.tr",
      "name": "Nova Emlak & Gayrimenkul",
      "inLanguage": "tr-TR"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-emlak-cream text-emlak-navy font-sans antialiased selection:bg-emlak-gold selection:text-emlak-navy">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
