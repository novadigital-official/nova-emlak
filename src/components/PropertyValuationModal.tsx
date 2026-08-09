"use client";

import { useState } from "react";
import { X, Calculator, ShieldCheck, CheckCircle2 } from "lucide-react";

interface ModalProps {
  onClose: () => void;
}

export default function PropertyValuationModal({ onClose }: ModalProps) {
  const [district, setDistrict] = useState("Konyaaltı");
  const [type, setType] = useState("VILLA");
  const [m2, setM2] = useState<number>(200);
  const [age, setAge] = useState("0");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();

    // Base price per m² (Antalya market 2026 data)
    let basePricePerM2 = 75000; // TL per m2

    if (district === "Konyaaltı" || district === "Muratpaşa") {
      basePricePerM2 = 95000;
    } else if (district === "Döşemealtı") {
      basePricePerM2 = 80000;
    } else if (district === "Kepez") {
      basePricePerM2 = 45000;
    } else if (district === "Alanya") {
      basePricePerM2 = 65000;
    }

    if (type === "VILLA") basePricePerM2 *= 1.35;
    if (type === "COMMERCIAL") basePricePerM2 *= 1.2;

    const estimatedTotal = m2 * basePricePerM2;
    setResult(estimatedTotal);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR").format(Math.round(price));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emlak-navy/70 backdrop-blur-sm animate-fade-up">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-emlak-border">
        
        {/* Header */}
        <div className="bg-emlak-navy text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emlak-gold text-emlak-navy rounded-lg">
              <Calculator size={24} />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg">m² Değerleme Sihirbazı</h3>
              <p className="text-xs text-slate-300">Antalya Anlık Piyasa Ekspertiz Tahmini</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {!result ? (
            <form onSubmit={handleCalculate} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-emlak-navy mb-1.5">İlçe Seçin</label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-3 text-sm text-emlak-navy font-bold focus:ring-2 focus:ring-emlak-gold outline-none"
                >
                  <option value="Konyaaltı">Konyaaltı (Gürsu, Liman, Uncalı)</option>
                  <option value="Muratpaşa">Muratpaşa (Lara, Şirinyalı, Işıklar)</option>
                  <option value="Döşemealtı">Döşemealtı (Altınkale, Yeşilbayır)</option>
                  <option value="Kepez">Kepez (Otogar, Kültür, Ünsal)</option>
                  <option value="Alanya">Alanya (Kargıcak, Mahmutlar)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-emlak-navy mb-1.5">Gayrimenkul Tipi</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-3 text-sm text-emlak-navy font-bold focus:ring-2 focus:ring-emlak-gold outline-none"
                  >
                    <option value="VILLA">Müstakil Villa</option>
                    <option value="APARTMENT">Lüks Daire</option>
                    <option value="LAND">Arsa</option>
                    <option value="COMMERCIAL">Ticari Mülk</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-emlak-navy mb-1.5">Net Kullanım (m²)</label>
                  <input
                    type="number"
                    value={m2}
                    onChange={(e) => setM2(Number(e.target.value))}
                    min={20}
                    max={5000}
                    className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-3 text-sm text-emlak-navy font-bold focus:ring-2 focus:ring-emlak-gold outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-emlak-navy mb-1.5">Bina Yaşı</label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-3 text-sm text-emlak-navy font-bold focus:ring-2 focus:ring-emlak-gold outline-none"
                >
                  <option value="0">0 (Sıfır Yapı)</option>
                  <option value="1-5">1 - 5 Yıllık</option>
                  <option value="6-10">6 - 10 Yıllık</option>
                  <option value="11+">11+ Yıllık</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-emlak-gold text-emlak-navy font-heading font-extrabold text-sm py-3.5 rounded-lg hover:bg-emlak-gold-hover hover:text-white transition-all shadow-md mt-4 flex items-center justify-center gap-2"
              >
                <Calculator size={18} />
                <span>Tahmini Değeri Hesapla</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-4 space-y-4 animate-fade-up">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 size={32} />
              </div>

              <div>
                <span className="text-xs text-emlak-slate uppercase tracking-wider font-bold block mb-1">
                  {district} / {type === "VILLA" ? "Müstakil Villa" : "Lüks Konut"} ({m2} m²)
                </span>
                <div className="text-3xl font-heading font-extrabold text-emlak-navy">
                  {formatPrice(result)} <span className="text-emlak-gold text-xl">TL</span>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  (Piyasa ortalama m² ekspertiz aralığı: {formatPrice(result * 0.95)} TL - {formatPrice(result * 1.08)} TL)
                </p>
              </div>

              <div className="p-4 bg-emlak-cream rounded-xl text-left border border-emlak-border space-y-2">
                <div className="flex items-center gap-2 text-xs text-emlak-navy font-bold">
                  <ShieldCheck size={16} className="text-emlak-gold" />
                  <span>Resmi Lisanslı Ücretsiz Ekspertiz</span>
                </div>
                <p className="text-[11px] text-slate-600">
                  Gayrimenkulünüzü yerinde ücretsiz incelememiz ve en yüksek değerden 14 günde satmamız için danışman hattımızdan bize ulaşın.
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setResult(null)}
                  className="w-1/2 bg-slate-200 text-emlak-navy font-bold text-xs py-3 rounded-lg hover:bg-slate-300 transition-all"
                >
                  Yeniden Hesapla
                </button>
                <a
                  href="tel:+905070871789"
                  className="w-1/2 bg-emlak-navy text-white font-bold text-xs py-3 rounded-lg hover:bg-emlak-gold hover:text-emlak-navy transition-all text-center"
                >
                  Danışmanı Ara
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
