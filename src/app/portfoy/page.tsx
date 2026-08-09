"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import { PROPERTIES, Property } from "@/lib/data";
import { Filter, SlidersHorizontal, Search, RotateCcw, Building2 } from "lucide-react";

export default function PortfoyPage() {
  const searchParams = useSearchParams();

  // Initial params
  const initialStatus = searchParams.get("status") || "ALL";
  const initialDistrict = searchParams.get("district") || "ALL";
  const initialType = searchParams.get("type") || "ALL";
  const initialSearch = searchParams.get("search") || "";

  const [status, setStatus] = useState<string>(initialStatus);
  const [district, setDistrict] = useState<string>(initialDistrict);
  const [type, setType] = useState<string>(initialType);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [maxPrice, setMaxPrice] = useState<number>(50000000);

  // Dynamic Filter Logic
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      if (status !== "ALL" && p.status !== status) return false;
      if (type !== "ALL" && p.type !== type) return false;
      if (district !== "ALL" && !p.district.toLowerCase().includes(district.toLowerCase()) && !district.toLowerCase().includes(p.district.toLowerCase())) return false;
      if (p.price > maxPrice) return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        const matchesDistrict = p.district.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesDistrict) return false;
      }
      return true;
    });
  }, [status, district, type, searchQuery, maxPrice]);

  const resetFilters = () => {
    setStatus("ALL");
    setDistrict("ALL");
    setType("ALL");
    setSearchQuery("");
    setMaxPrice(50000000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR").format(price);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header Banner */}
      <div className="border-b border-emlak-border pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-wider text-emlak-gold block mb-1">
            Antalya İlan Kataloğu
          </span>
          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-emlak-navy">
            Gayrimenkul Portföyü ({filteredProperties.length} İlan)
          </h1>
        </div>

        {/* Reset Filters */}
        <button
          type="button"
          onClick={resetFilters}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emlak-navy transition-colors bg-white px-3.5 py-2 rounded-lg border border-emlak-border shadow-sm min-h-[44px]"
        >
          <RotateCcw size={14} />
          <span>Filtreleri Sıfırla</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Sidebar Filter Panel */}
        <aside className="lg:col-span-1 bg-white p-6 rounded-2xl border border-emlak-border shadow-sm h-fit space-y-6">
          <div className="flex items-center gap-2 text-emlak-navy font-heading font-bold text-base border-b border-emlak-border pb-4">
            <Filter size={18} className="text-emlak-gold" />
            <span>Filtreleme Seçenekleri</span>
          </div>

          {/* Search Query */}
          <div>
            <label className="block text-xs font-bold text-emlak-navy mb-1.5">Kelime İle Ara</label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Örn: Villa, Gürsu, Deniz..."
                className="w-full bg-emlak-cream border border-emlak-border rounded-lg pl-9 pr-3 py-2.5 text-xs text-emlak-navy font-bold focus:ring-2 focus:ring-emlak-gold outline-none"
              />
              <Search size={14} className="absolute left-3 top-3 text-slate-400" />
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-xs font-bold text-emlak-navy mb-1.5">İlan Durumu</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-2.5 text-xs text-emlak-navy font-bold focus:ring-2 focus:ring-emlak-gold outline-none"
            >
              <option value="ALL">Tümü (Satılık & Kiralık)</option>
              <option value="FOR_SALE">Satılık Gayrimenkul</option>
              <option value="FOR_RENT">Kiralık Konut / Villa</option>
              <option value="PROJECT">Projeden Lansman</option>
            </select>
          </div>

          {/* District Filter */}
          <div>
            <label className="block text-xs font-bold text-emlak-navy mb-1.5">İlçe</label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-2.5 text-xs text-emlak-navy font-bold focus:ring-2 focus:ring-emlak-gold outline-none"
            >
              <option value="ALL">Tüm Antalya İlçeleri</option>
              <option value="Konyaaltı">Konyaaltı</option>
              <option value="Muratpaşa">Muratpaşa (Lara)</option>
              <option value="Döşemealtı">Döşemealtı</option>
              <option value="Kepez">Kepez</option>
              <option value="Alanya">Alanya</option>
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-xs font-bold text-emlak-navy mb-1.5">Gayrimenkul Tipi</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-2.5 text-xs text-emlak-navy font-bold focus:ring-2 focus:ring-emlak-gold outline-none"
            >
              <option value="ALL">Tüm Tipler</option>
              <option value="VILLA">Müstakil Villa</option>
              <option value="APARTMENT">Lüks Daire</option>
              <option value="LAND">Arsa</option>
              <option value="COMMERCIAL">Ticari / Dükkan</option>
            </select>
          </div>

          {/* Max Price Slider */}
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-emlak-navy mb-1.5">
              <span>Maksimum Fiyat</span>
              <span className="text-emlak-gold">{formatPrice(maxPrice)} TL</span>
            </div>
            <input
              type="range"
              min={100000}
              max={50000000}
              step={500000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-emlak-gold cursor-pointer"
            />
          </div>
        </aside>

        {/* Right Listings Grid */}
        <main className="lg:col-span-3">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-emlak-border space-y-4">
              <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                <Building2 size={32} />
              </div>
              <h3 className="font-heading font-bold text-lg text-emlak-navy">
                Aradığınız Kriterlere Uygun İlan Bulunamadı
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Filtreleme kriterlerinizi genişleterek veya arama kelimenizi değiştirerek tekrar deneyebilirsiniz.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="bg-emlak-navy text-white text-xs font-bold px-6 py-2.5 rounded-lg hover:bg-emlak-gold hover:text-emlak-navy transition-all"
              >
                Filtreleri Temizle
              </button>
            </div>
          )}
        </main>

      </div>
    </div>
  );
}
