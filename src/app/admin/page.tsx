"use client";

import { useState } from "react";
import { PROPERTIES, Property } from "@/lib/data";
import { usePropertyStore } from "@/store/usePropertyStore";
import { 
  Building2, Plus, Trash2, CheckCircle2, DollarSign, 
  Users, Layers, Phone, Mail, ShieldCheck, Search
} from "lucide-react";

export default function AdminPage() {
  const [propertiesList, setPropertiesList] = useState<Property[]>(PROPERTIES);
  const inquiries = usePropertyStore((state) => state.inquiries);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Form State
  const [newTitle, setNewTitle] = useState("");
  const [newDistrict, setNewDistrict] = useState("Konyaaltı");
  const [newType, setNewType] = useState<"VILLA" | "APARTMENT" | "LAND" | "COMMERCIAL">("VILLA");
  const [newStatus, setNewStatus] = useState<"FOR_SALE" | "FOR_RENT" | "PROJECT">("FOR_SALE");
  const [newPrice, setNewPrice] = useState(15000000);
  const [newM2, setNewM2] = useState(250);
  const [newRooms, setNewRooms] = useState("4+1");
  const [newImageUrl, setNewImageUrl] = useState("https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop");

  const handleDeleteProperty = (id: string) => {
    setPropertiesList((prev) => prev.filter((p) => p.id !== id));
  };

  const handleAddProperty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    const newProp: Property = {
      id: `prop-${Date.now()}`,
      title: newTitle,
      slug: newTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
      description: "Admin panelinden yeni eklenen lüks gayrimenkul ilanı.",
      type: newType,
      typeName: newType === "VILLA" ? "Müstakil Villa" : newType === "APARTMENT" ? "Lüks Daire" : "Gayrimenkul",
      status: newStatus,
      statusName: newStatus === "FOR_SALE" ? "Satılık" : "Kiralık",
      price: newPrice,
      currency: "TL",
      m2Net: newM2,
      m2Gross: Math.round(newM2 * 1.15),
      roomCount: newRooms,
      bathroomCount: 3,
      buildingAge: "0 (Sıfır)",
      floorNumber: "1. Kat",
      city: "Antalya",
      district: newDistrict,
      address: `${newDistrict} Mahallesi, Antalya`,
      images: [newImageUrl],
      isFeatured: true,
      isCitizenship: true,
      features: ["Lüks Donanım", "Özel Otopark", "Vatandaşlığa Uygun"],
      agent: {
        name: "Mehmet Can Yılmaz",
        title: "Sorumlu Emlak Danışmanı",
        phone: "0507 087 17 89",
        email: "mehmet@novaemlak.com.tr",
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
      }
    };

    setPropertiesList([newProp, ...propertiesList]);
    setIsAddModalOpen(false);
    setNewTitle("");
  };

  const totalPortfolioValue = propertiesList.reduce((acc, curr) => acc + curr.price, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR").format(price);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="bg-emlak-navy text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emlak-gold mb-1">
            <ShieldCheck size={16} />
            <span>Yönetici Portalı & Müşteri Talepleri</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Nova Emlak Yönetim Paneli
          </h1>
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="bg-emlak-gold text-emlak-navy font-heading font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl hover:bg-amber-400 transition-all shadow flex items-center gap-2 min-h-[44px]"
        >
          <Plus size={18} />
          <span>Yeni İlan Ekle</span>
        </button>
      </div>

      {/* Analytics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-emlak-border shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emlak-navy text-emlak-gold rounded-xl">
            <Building2 size={28} />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-bold uppercase">Toplam İlan</span>
            <div className="font-heading font-extrabold text-2xl text-emlak-navy">{propertiesList.length} İlan</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-emlak-border shadow-sm flex items-center gap-4">
          <div className="p-3 bg-amber-100 text-amber-700 rounded-xl">
            <DollarSign size={28} />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-bold uppercase">Toplam Portföy Değeri</span>
            <div className="font-heading font-extrabold text-xl sm:text-2xl text-emlak-navy">
              {formatPrice(totalPortfolioValue)} <span className="text-emlak-gold text-sm">TL</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-emlak-border shadow-sm flex items-center gap-4">
          <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl">
            <Users size={28} />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-bold uppercase">Müşteri Talepleri</span>
            <div className="font-heading font-extrabold text-2xl text-emlak-navy">{inquiries.length} Lead</div>
          </div>
        </div>
      </div>

      {/* Customer Inquiry Leads Table */}
      <div className="bg-white rounded-2xl border border-emlak-border shadow-sm overflow-hidden space-y-4 p-6">
        <h2 className="font-heading font-extrabold text-lg text-emlak-navy border-b border-emlak-border pb-3 flex items-center gap-2">
          <Users size={20} className="text-emlak-gold" />
          <span>Gelen Gösterim & Danışmanlık Talepleri</span>
        </h2>

        {inquiries.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-emlak-cream text-emlak-navy uppercase text-[10px] font-bold border-b border-emlak-border">
                <tr>
                  <th className="p-3">Müşteri Adı</th>
                  <th className="p-3">Telefon</th>
                  <th className="p-3">İlgilendiği İlan</th>
                  <th className="p-3">Mesaj</th>
                  <th className="p-3">Tarih</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {inquiries.map((inq) => (
                  <tr key={inq.id} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-emlak-navy">{inq.fullName}</td>
                    <td className="p-3">
                      <a href={`tel:${inq.phone}`} className="text-blue-600 font-bold">{inq.phone}</a>
                    </td>
                    <td className="p-3 text-slate-700 max-w-xs truncate">{inq.propertyTitle}</td>
                    <td className="p-3 text-slate-500">{inq.message}</td>
                    <td className="p-3 text-slate-400">{inq.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-xs text-slate-500 italic py-4">Henüz yeni müşteri talebi bulunmuyor.</p>
        )}
      </div>

      {/* Property List Table */}
      <div className="bg-white rounded-2xl border border-emlak-border shadow-sm overflow-hidden space-y-4 p-6">
        <h2 className="font-heading font-extrabold text-lg text-emlak-navy border-b border-emlak-border pb-3 flex items-center gap-2">
          <Building2 size={20} className="text-emlak-gold" />
          <span>Aktif İlan Listesi ({propertiesList.length})</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-emlak-cream text-emlak-navy uppercase text-[10px] font-bold border-b border-emlak-border">
              <tr>
                <th className="p-3">İlan Başlığı</th>
                <th className="p-3">İlçe</th>
                <th className="p-3">Tip</th>
                <th className="p-3">Fiyat</th>
                <th className="p-3">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {propertiesList.map((prop) => (
                <tr key={prop.id} className="hover:bg-slate-50">
                  <td className="p-3 flex items-center gap-3">
                    <img src={prop.images[0]} alt="" className="w-10 h-10 rounded object-cover" />
                    <span className="font-bold text-emlak-navy line-clamp-1">{prop.title}</span>
                  </td>
                  <td className="p-3">{prop.district}</td>
                  <td className="p-3">{prop.typeName}</td>
                  <td className="p-3 font-extrabold text-emlak-navy">{formatPrice(prop.price)} TL</td>
                  <td className="p-3">
                    <button
                      type="button"
                      onClick={() => handleDeleteProperty(prop.id)}
                      className="p-2 text-rose-500 hover:bg-rose-50 rounded transition-colors"
                      title="İlanı Sil"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Property Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emlak-navy/70 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 space-y-4 border border-emlak-border">
            <h3 className="font-heading font-extrabold text-lg text-emlak-navy border-b border-emlak-border pb-3">
              Yeni İlan Ekle
            </h3>

            <form onSubmit={handleAddProperty} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-emlak-navy mb-1">İlan Başlığı *</label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Örn: Konyaaltı'nda Deniz Manzaralı Villa"
                  className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-2.5 font-bold outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-emlak-navy mb-1">İlçe</label>
                  <select
                    value={newDistrict}
                    onChange={(e) => setNewDistrict(e.target.value)}
                    className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-2.5 font-bold outline-none"
                  >
                    <option value="Konyaaltı">Konyaaltı</option>
                    <option value="Muratpaşa">Muratpaşa</option>
                    <option value="Döşemealtı">Döşemealtı</option>
                    <option value="Kepez">Kepez</option>
                    <option value="Alanya">Alanya</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-emlak-navy mb-1">Fiyat (TL)</label>
                  <input
                    type="number"
                    value={newPrice}
                    onChange={(e) => setNewPrice(Number(e.target.value))}
                    className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-2.5 font-bold outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-emlak-navy mb-1">Net m²</label>
                  <input
                    type="number"
                    value={newM2}
                    onChange={(e) => setNewM2(Number(e.target.value))}
                    className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-2.5 font-bold outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-emlak-navy mb-1">Oda Sayısı</label>
                  <input
                    type="text"
                    value={newRooms}
                    onChange={(e) => setNewRooms(e.target.value)}
                    placeholder="Örn: 4+1"
                    className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-2.5 font-bold outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-emlak-navy mb-1">Görsel URL</label>
                <input
                  type="text"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-2.5 font-bold outline-none"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="w-1/2 bg-slate-200 text-emlak-navy font-bold py-3 rounded-lg"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-emlak-gold text-emlak-navy font-extrabold py-3 rounded-lg hover:bg-amber-400"
                >
                  İlanı Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
