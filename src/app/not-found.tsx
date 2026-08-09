import Link from "next/link";
import { Building2, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full border border-emlak-border shadow-xl text-center space-y-4">
        <div className="w-16 h-16 bg-emlak-cream text-emlak-gold rounded-full flex items-center justify-center mx-auto">
          <Building2 size={32} />
        </div>
        <h2 className="font-heading font-extrabold text-2xl text-emlak-navy">
          404 — İlan Bulunamadı
        </h2>
        <p className="text-xs text-slate-500">
          Aradığınız gayrimenkul ilanı kaldırılmış veya adresi değişmiş olabilir.
        </p>
        <div className="pt-2">
          <Link
            href="/portfoy"
            className="inline-flex items-center gap-2 bg-emlak-navy text-white text-xs font-bold px-6 py-3 rounded-lg hover:bg-emlak-gold hover:text-emlak-navy transition-all"
          >
            <Search size={14} />
            <span>Portföy Kataloğunu İncele</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
