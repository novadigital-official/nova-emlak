import Link from "next/link";
import { Building2, ShieldCheck, MapPin, Phone, Mail, Award, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emlak-navy text-white pt-16 pb-12 border-t border-white/10">
      {/* Top Value Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-white/10 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
        <div className="flex items-start gap-3">
          <div className="p-3 bg-white/5 rounded-lg text-emlak-gold">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-white">Lisanslı Yetkili Portföy</h4>
            <p className="text-slate-400 mt-1">T.C. Ticaret Bakanlığı Taşınmaz Ticareti Yetki Belgesi No: <strong>0701894</strong></p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-3 bg-white/5 rounded-lg text-emlak-gold">
            <Award size={24} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-white">Türk Vatandaşlığına Uygun</h4>
            <p className="text-slate-400 mt-1">Gurbetçi ve yabancı yatırımcılar için %100 ekspertiz garantili gayrimenkul danışmanlığı.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-3 bg-white/5 rounded-lg text-emlak-gold">
            <MapPin size={24} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-white">Antalya Tüm İlçelerde Saha Hizmeti</h4>
            <p className="text-slate-400 mt-1">Muratpaşa, Konyaaltı, Kepez, Döşemealtı ve Alanya bölgesinde anlık yerinde gösterim.</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-3 bg-white/5 rounded-lg text-emlak-gold">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-white">Şeffaf Tapu & Sözleşme Süreci</h4>
            <p className="text-slate-400 mt-1">Sürpriz komisyon olmadan, hukuki teyitli güvenli gayrimenkul alım satımı.</p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Building2 size={28} className="text-emlak-gold" />
            <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
              NOVA <span className="text-emlak-gold">EMLAK</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Nova Emlak & Gayrimenkul, Antalya genelinde lüks villa, deniz manzaralı konut ve ticari mülk yatırımında profesyonel danışmanlık sunar.
          </p>
          <div className="mt-6 flex items-center space-x-3 text-xs text-slate-400">
            <span className="border border-white/20 px-2.5 py-1 rounded text-[11px] font-bold text-emlak-gold">Antalya Kurumsal Paket</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-emlak-gold mb-4">Popüler Bölgeler</h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><Link href="/portfoy?district=Konyaaltı" className="hover:text-white transition-colors">Konyaaltı Lüks Villalar</Link></li>
            <li><Link href="/portfoy?district=Muratpaşa" className="hover:text-white transition-colors">Lara Falez Manzaralı Daireler</Link></li>
            <li><Link href="/portfoy?district=Döşemealtı" className="hover:text-white transition-colors">Döşemealtı Müstakil Malikaneler</Link></li>
            <li><Link href="/portfoy?district=Alanya" className="hover:text-white transition-colors">Alanya Kale Manzaralı Projeler</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-emlak-gold mb-4">Hızlı Menü</h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><Link href="/portfoy?status=FOR_SALE" className="hover:text-white transition-colors">Satılık Gayrimenkuller</Link></li>
            <li><Link href="/portfoy?status=FOR_RENT" className="hover:text-white transition-colors">Kiralık Daire & Villalar</Link></li>
            <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Kurumsal Hakkımızda</Link></li>
            <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim & Randevu</Link></li>
            <li><Link href="/admin" className="hover:text-emlak-gold transition-colors font-bold">🔑 Admin Yönetim Paneli</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-emlak-gold mb-4">Danışman İletişim</h4>
          <div className="space-y-3 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-emlak-gold" />
              <a href="tel:+905070871789" className="hover:text-white font-bold">0507 087 17 89</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-emlak-gold" />
              <a href="mailto:info@novaemlak.com.tr" className="hover:text-white">info@novaemlak.com.tr</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-emlak-gold" />
              <span>Muratpaşa & Konyaaltı / Antalya</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 Nova Emlak & Gayrimenkul A.Ş. Tüm hakları saklıdır.</p>
        <p>Taşınmaz Ticareti Yetki Belge No: 0701894</p>
      </div>
    </footer>
  );
}
