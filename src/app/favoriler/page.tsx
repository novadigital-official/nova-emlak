"use client";

import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTIES } from "@/lib/data";
import { usePropertyStore } from "@/store/usePropertyStore";
import { Heart, Building2, ArrowLeft } from "lucide-react";

export default function FavorilerPage() {
  const wishlist = usePropertyStore((state) => state.wishlist);

  const favoriteProperties = PROPERTIES.filter((p) => wishlist.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="border-b border-emlak-border pb-6 flex items-center justify-between">
        <div>
          <Link
            href="/portfoy"
            className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-emlak-navy transition-colors mb-2"
          >
            <ArrowLeft size={14} />
            <span>Portföye Dön</span>
          </Link>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-emlak-navy flex items-center gap-2">
            <Heart size={32} className="text-rose-500 fill-rose-500" />
            <span>Favori İlanlarınız ({favoriteProperties.length})</span>
          </h1>
        </div>
      </div>

      {favoriteProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-emlak-border space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto">
            <Heart size={32} />
          </div>
          <h3 className="font-heading font-bold text-lg text-emlak-navy">
            Henüz Favori İlanınız Bulunmuyor
          </h3>
          <p className="text-xs text-slate-500">
            Beğendiğiniz lüks villa veya dairelerin üzerindeki kalp butonuna basarak favori listenize ekleyebilirsiniz.
          </p>
          <Link
            href="/portfoy"
            className="inline-block bg-emlak-navy text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-emlak-gold hover:text-emlak-navy transition-all"
          >
            İlanları Keşfet
          </Link>
        </div>
      )}
    </div>
  );
}
