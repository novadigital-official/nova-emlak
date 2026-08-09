"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Building, SlidersHorizontal, ShieldCheck, ChevronRight } from "lucide-react";
import { DISTRICTS } from "@/lib/data";

export default function HeroSection() {
  const router = useRouter();
  const [status, setStatus] = useState<string>("ALL");
  const [district, setDistrict] = useState<string>("ALL");
  const [type, setType] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (status !== "ALL") params.set("status", status);
    if (district !== "ALL") params.set("district", district);
    if (type !== "ALL") params.set("type", type);
    if (searchQuery) params.set("search", searchQuery);

    router.push(`/portfoy?${params.toString()}`);
  };

  return (
    <div className="relative bg-emlak-navy text-white pt-12 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Mesh Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emlak-gold/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -ml-40 -mb-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Hero Badge & Headings */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-xs font-bold text-emlak-gold">
            <ShieldCheck size={14} />
            <span>T.C. Lisanslı Gayrimenkul Portalı</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            Antalya'nın En Elit <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emlak-gold via-amber-200 to-amber-400">
              Lüks Portföy Kataloğu
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-2xl mx-auto">
            Konyaaltı, Muratpaşa (Lara), Döşemealtı ve Alanya bölgesinde şeffaf tapu süreci, %100 ekspertiz garantisi ve Türk Vatandaşlığına uygun lüks villa ve konutlar.
          </p>
        </div>

        {/* Glassmorphism Interactive Filter Bar */}
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 shadow-2xl">
          
          {/* Tabs: ALL, FOR_SALE, FOR_RENT, PROJECT */}
          <div className="flex items-center gap-2 border-b border-white/15 pb-4 mb-5 overflow-x-auto">
            <button
              type="button"
              onClick={() => setStatus("ALL")}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap min-w-[44px] min-h-[44px] ${
                status === "ALL" ? "bg-emlak-gold text-emlak-navy shadow-md" : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Tüm İlanlar
            </button>

            <button
              type="button"
              onClick={() => setStatus("FOR_SALE")}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap min-w-[44px] min-h-[44px] ${
                status === "FOR_SALE" ? "bg-emlak-gold text-emlak-navy shadow-md" : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Satılık Portföy
            </button>

            <button
              type="button"
              onClick={() => setStatus("FOR_RENT")}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap min-w-[44px] min-h-[44px] ${
                status === "FOR_RENT" ? "bg-emlak-gold text-emlak-navy shadow-md" : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Kiralık Daire & Villa
            </button>

            <button
              type="button"
              onClick={() => setStatus("PROJECT")}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap min-w-[44px] min-h-[44px] ${
                status === "PROJECT" ? "bg-emlak-gold text-emlak-navy shadow-md" : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Projeden Lansman
            </button>
          </div>

          {/* Form Inputs */}
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* District Selector */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1 flex items-center gap-1">
                <MapPin size={12} className="text-emlak-gold" />
                <span>İlçe / Bölge</span>
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full bg-emlak-navy/80 text-white border border-white/20 rounded-lg p-3 text-xs font-bold focus:ring-2 focus:ring-emlak-gold outline-none"
              >
                <option value="ALL">Tüm Antalya İlçeleri</option>
                <option value="Konyaaltı">Konyaaltı (Gürsu, Liman)</option>
                <option value="Muratpaşa">Muratpaşa (Lara, Şirinyalı)</option>
                <option value="Döşemealtı">Döşemealtı (Altınkale)</option>
                <option value="Kepez">Kepez (Otogar, Kültür)</option>
                <option value="Alanya">Alanya (Kargıcak)</option>
              </select>
            </div>

            {/* Type Selector */}
            <div>
              <label className="block text-[11px] font-bold text-slate-300 mb-1 flex items-center gap-1">
                <Building size={12} className="text-emlak-gold" />
                <span>Gayrimenkul Tipi</span>
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-emlak-navy/80 text-white border border-white/20 rounded-lg p-3 text-xs font-bold focus:ring-2 focus:ring-emlak-gold outline-none"
              >
                <option value="ALL">Tüm Gayrimenkul Tipleri</option>
                <option value="VILLA">Müstakil Villa / Malikane</option>
                <option value="APARTMENT">Lüks Daire / Dubleks</option>
                <option value="LAND">Arsa / Arazi</option>
                <option value="COMMERCIAL">Ticari / Dükkan</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-emlak-gold text-emlak-navy font-heading font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-lg hover:bg-amber-400 transition-all shadow-lg flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Search size={16} />
                <span>İlanlarda Ara</span>
              </button>
            </div>
          </form>

        </div>

        {/* Quick Stats Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
            <div className="font-heading font-extrabold text-2xl text-emlak-gold">100+</div>
            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-1">Seçkin Portföy</div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
            <div className="font-heading font-extrabold text-2xl text-emlak-gold">14 Gün</div>
            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-1">Ortalama Satış Süresi</div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
            <div className="font-heading font-extrabold text-2xl text-emlak-gold">%100</div>
            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-1">Ekspertiz Şeffaflığı</div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
            <div className="font-heading font-extrabold text-2xl text-emlak-gold">0701894</div>
            <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider mt-1">Bakanlık Lisansı</div>
          </div>
        </div>

      </div>
    </div>
  );
}
