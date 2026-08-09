"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, Heart, Phone, Menu, X, ChevronRight, Calculator, ShieldCheck } from "lucide-react";
import { usePropertyStore } from "@/store/usePropertyStore";
import PropertyValuationModal from "@/components/PropertyValuationModal";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isValuationModalOpen, setIsValuationModalOpen] = useState(false);

  const wishlist = usePropertyStore((state) => state.wishlist);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-emlak-navy text-white text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-emlak-gold" />
            <span className="font-medium">T.C. Ticaret Bakanlığı Taşınmaz Ticareti Yetki Belge No: <strong>0701894</strong></span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-300">
            <span>Antalya Merkez & Tüm İlçeler</span>
            <span>|</span>
            <a href="tel:+905070871789" className="hover:text-emlak-gold font-bold">0507 087 17 89</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-emlak-border transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-emlak-navy hover:text-emlak-gold transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Menüyü Aç"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-emlak-navy text-emlak-gold rounded-lg flex items-center justify-center font-bold text-xl shadow-md group-hover:bg-emlak-gold group-hover:text-emlak-navy transition-all">
              <Building2 size={24} />
            </div>
            <div>
              <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-emlak-navy group-hover:text-emlak-gold transition-colors block leading-none">
                NOVA <span className="text-emlak-gold">EMLAK</span>
              </span>
              <span className="text-[10px] font-sans tracking-widest uppercase text-emlak-slate font-bold">
                GAYRİMENKUL & PORTFÖY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold text-emlak-navy uppercase tracking-wider">
            <Link href="/" className="hover:text-emlak-gold transition-colors py-2">
              Ana Sayfa
            </Link>
            <Link href="/portfoy" className="hover:text-emlak-gold transition-colors py-2">
              Tüm Portföy
            </Link>
            <Link href="/portfoy?status=FOR_SALE" className="hover:text-emlak-gold transition-colors py-2">
              Satılık
            </Link>
            <Link href="/portfoy?status=FOR_RENT" className="hover:text-emlak-gold transition-colors py-2">
              Kiralık
            </Link>
            <Link href="/portfoy?type=VILLA" className="hover:text-emlak-gold transition-colors py-2">
              Lüks Villa
            </Link>
            <button
              type="button"
              onClick={() => setIsValuationModalOpen(true)}
              className="text-emlak-gold hover:underline transition-colors py-2 flex items-center gap-1"
            >
              <Calculator size={14} />
              <span>m² Değerleme</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center space-x-2">
            {/* Wishlist Link */}
            <Link
              href="/favoriler"
              className="p-2.5 text-emlak-navy hover:text-emlak-gold transition-colors relative min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-emlak-cream"
              aria-label="Favorilerim"
            >
              <Heart size={22} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-emlak-gold text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Quick Call Button */}
            <a
              href="tel:+905070871789"
              className="hidden sm:inline-flex items-center gap-2 bg-emlak-navy text-white px-4 py-2.5 rounded-md text-xs font-bold hover:bg-emlak-gold hover:text-emlak-navy transition-all shadow-sm"
            >
              <Phone size={14} />
              <span>0507 087 17 89</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-emlak-navy/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative w-4/5 max-w-sm bg-white h-full p-6 flex flex-col justify-between shadow-2xl z-10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-emlak-border">
                <div className="flex items-center gap-2">
                  <Building2 size={24} className="text-emlak-gold" />
                  <span className="font-heading font-extrabold text-xl text-emlak-navy">
                    NOVA EMLAK
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-emlak-navy min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="mt-8 flex flex-col space-y-4 text-sm font-bold">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-emlak-border/60 hover:text-emlak-gold"
                >
                  <span>Ana Sayfa</span>
                  <ChevronRight size={18} />
                </Link>
                <Link
                  href="/portfoy"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-emlak-border/60 hover:text-emlak-gold"
                >
                  <span>Tüm Portföy İlanları</span>
                  <ChevronRight size={18} />
                </Link>
                <Link
                  href="/portfoy?status=FOR_SALE"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-emlak-border/60 hover:text-emlak-gold"
                >
                  <span>Satılık Gayrimenkuller</span>
                  <ChevronRight size={18} />
                </Link>
                <Link
                  href="/portfoy?status=FOR_RENT"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-emlak-border/60 hover:text-emlak-gold"
                >
                  <span>Kiralık Daire & Villalar</span>
                  <ChevronRight size={18} />
                </Link>
                <Link
                  href="/portfoy?type=VILLA"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-emlak-border/60 hover:text-emlak-gold"
                >
                  <span>Lüks Villa Koleksiyonu</span>
                  <ChevronRight size={18} />
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsValuationModalOpen(true);
                  }}
                  className="flex items-center justify-between py-3 text-emlak-gold font-bold"
                >
                  <span className="flex items-center gap-2">
                    <Calculator size={18} />
                    <span>m² Değerleme Sihirbazı</span>
                  </span>
                  <ChevronRight size={18} />
                </button>
              </nav>
            </div>

            <div className="pt-6 border-t border-emlak-border space-y-3">
              <a
                href="tel:+905070871789"
                className="w-full bg-emlak-navy text-white text-xs font-bold py-3 rounded-md flex items-center justify-center gap-2 shadow"
              >
                <Phone size={16} />
                <span>0507 087 17 89 (Danışman Hattı)</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Property Valuation Modal */}
      {isValuationModalOpen && (
        <PropertyValuationModal onClose={() => setIsValuationModalOpen(false)} />
      )}
    </>
  );
}
