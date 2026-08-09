"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, MapPin, Maximize2, BedDouble, Bath, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Property } from "@/lib/data";
import { usePropertyStore } from "@/store/usePropertyStore";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const wishlist = usePropertyStore((state) => state.wishlist);
  const toggleWishlist = usePropertyStore((state) => state.toggleWishlist);

  const isFavorite = wishlist.includes(property.id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR").format(price);
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-emlak-border hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={property.images[0] || "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop"}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Status Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className={`px-2.5 py-1 rounded text-[11px] font-bold text-white uppercase tracking-wider ${
            property.status === "FOR_SALE" ? "bg-emlak-navy" : property.status === "FOR_RENT" ? "bg-emerald-700" : "bg-purple-700"
          }`}>
            {property.statusName}
          </span>
          {property.isCitizenship && (
            <span className="bg-emlak-gold text-emlak-navy px-2.5 py-1 rounded text-[11px] font-extrabold flex items-center gap-1 shadow">
              <ShieldCheck size={13} /> Vatandaşlığa Uygun
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(property.id);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full transition-all min-w-[40px] min-h-[40px] flex items-center justify-center ${
            isFavorite ? "bg-rose-500 text-white shadow-lg scale-110" : "bg-white/80 backdrop-blur-sm text-emlak-navy hover:bg-white hover:text-rose-500"
          }`}
          aria-label="Favorilere Ekle"
        >
          <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
        </button>

        {/* Price Tag Overlay */}
        <div className="absolute bottom-3 left-3 bg-emlak-navy/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-md font-heading font-extrabold text-sm sm:text-base border border-white/10">
          {formatPrice(property.price)} <span className="text-emlak-gold text-xs">{property.currency}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1 text-xs text-emlak-slate font-medium mb-1.5">
            <MapPin size={14} className="text-emlak-gold" />
            <span>{property.district}, {property.city}</span>
          </div>

          {/* Title */}
          <Link href={`/gayrimenkul/${property.slug}`} className="group-hover:text-emlak-gold transition-colors">
            <h3 className="font-heading font-bold text-base text-emlak-navy line-clamp-2 leading-snug">
              {property.title}
            </h3>
          </Link>
        </div>

        {/* Property Specs Grid */}
        <div className="mt-4 pt-4 border-t border-emlak-border/60 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="bg-emlak-cream p-2 rounded flex flex-col items-center justify-center">
            <BedDouble size={16} className="text-emlak-navy mb-1" />
            <span className="font-bold text-emlak-navy">{property.roomCount}</span>
            <span className="text-[10px] text-emlak-slate">Oda</span>
          </div>

          <div className="bg-emlak-cream p-2 rounded flex flex-col items-center justify-center">
            <Maximize2 size={16} className="text-emlak-navy mb-1" />
            <span className="font-bold text-emlak-navy">{property.m2Net} m²</span>
            <span className="text-[10px] text-emlak-slate">Net Alan</span>
          </div>

          <div className="bg-emlak-cream p-2 rounded flex flex-col items-center justify-center">
            <Bath size={16} className="text-emlak-navy mb-1" />
            <span className="font-bold text-emlak-navy">{property.bathroomCount}</span>
            <span className="text-[10px] text-emlak-slate">Banyo</span>
          </div>
        </div>

        {/* Action Link */}
        <div className="mt-4 pt-3 flex items-center justify-between">
          <span className="text-xs font-bold text-emlak-gold uppercase tracking-wider">{property.typeName}</span>
          <Link
            href={`/gayrimenkul/${property.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-emlak-navy group-hover:text-emlak-gold transition-colors"
          >
            <span>Detayları İncele</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
