"use client";

import { useState } from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTIES, DISTRICTS, REVIEWS } from "@/lib/data";
import { ShieldCheck, MapPin, Building2, Calculator, ArrowRight, Star, Phone, CheckCircle2, Award } from "lucide-react";
import PropertyValuationModal from "@/components/PropertyValuationModal";

export default function HomePage() {
  const [isValuationOpen, setIsValuationOpen] = useState(false);
  const featuredProperties = PROPERTIES.filter((p) => p.isFeatured);

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Featured Luxury Properties */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4 border-b border-emlak-border pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-emlak-gold mb-1">
              <Award size={14} />
              <span>Özel Seçilmiş İlanlar</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-emlak-navy">
              Öne Çıkan Lüks Portföy
            </h2>
          </div>

          <Link
            href="/portfoy"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-emlak-navy hover:text-emlak-gold transition-colors"
          >
            <span>Tüm İlanları Görevi</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* 3. Valuation Wizard Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emlak-navy via-slate-900 to-emlak-navy rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-white/10">
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-emlak-gold/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="bg-emlak-gold text-emlak-navy px-3 py-1 rounded text-xs font-extrabold uppercase tracking-wider">
              Ücretsiz Ekspertiz
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white leading-tight">
              Gayrimenkulünüzün Bugün <br />
              <span className="text-emlak-gold">Gerçek Piyasa Değeri</span> Ne Kadar?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Konyaaltı, Muratpaşa, Döşemealtı veya Alanya'daki daire ve villanız için anlık m² analitiği ve yapay zeka destekli piyasa ekspertiz tahmini alın.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setIsValuationOpen(true)}
                className="bg-emlak-gold text-emlak-navy font-heading font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-lg hover:bg-amber-400 transition-all shadow-lg flex items-center gap-2 min-h-[44px]"
              >
                <Calculator size={18} />
                <span>m² Değerleme Sihirbazını Aç</span>
              </button>
              <a
                href="tel:+905070871789"
                className="bg-white/10 border border-white/20 text-white font-bold text-xs px-6 py-3.5 rounded-lg hover:bg-white/20 transition-all flex items-center gap-2 min-h-[44px]"
              >
                <Phone size={16} />
                <span>Ücretsiz Ekspertiz Çağır</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. District Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emlak-gold block mb-1">
            Antalya Bölge Rehberi
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-emlak-navy">
            Öne Çıkan İlçelerde Yaşam & Yatırım
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISTRICTS.map((dist) => (
            <Link
              key={dist.slug}
              href={`/portfoy?district=${encodeURIComponent(dist.name)}`}
              className="group relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-900 shadow-md border border-emlak-border"
            >
              <img
                src={dist.image}
                alt={dist.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emlak-navy/90 via-emlak-navy/30 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-bold text-emlak-gold uppercase tracking-wider">{dist.count} Aktif İlan</span>
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-emlak-gold transition-colors">{dist.name}</h3>
                <span className="text-[11px] text-slate-300 flex items-center gap-1 mt-1 font-medium">
                  <span>İlanları Keşfet</span>
                  <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Customer Testimonials */}
      <section className="bg-emlak-navy/5 py-16 border-y border-emlak-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="flex justify-center gap-1 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-emlak-navy">
              Müşteri Deneyimleri & Güven
            </h2>
            <p className="text-xs text-emlak-slate mt-1">Antalya'da gayrimenkul alan ve satan mutlu müşterilerimizin görüşleri.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {REVIEWS.map((rev) => (
              <div key={rev.id} className="bg-white p-6 rounded-xl border border-emlak-border shadow-sm flex flex-col justify-between">
                <p className="text-xs text-slate-700 italic leading-relaxed mb-4">
                  "{rev.comment}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <h4 className="font-heading font-bold text-sm text-emlak-navy">{rev.name}</h4>
                    <span className="text-[11px] text-emlak-gold font-bold">{rev.role}</span>
                  </div>
                  <span className="text-[10px] text-slate-400">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Valuation Modal Trigger */}
      {isValuationOpen && (
        <PropertyValuationModal onClose={() => setIsValuationOpen(false)} />
      )}
    </div>
  );
}
