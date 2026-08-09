"use client";

import { useState } from "react";
import Link from "next/link";
import { Property } from "@/lib/data";
import { usePropertyStore } from "@/store/usePropertyStore";
import { 
  Heart, MapPin, Maximize2, BedDouble, Bath, ShieldCheck, Phone, Mail, 
  Send, CheckCircle2, Video, Camera, ArrowLeft, Calendar, Share2, Layers
} from "lucide-react";

interface ContentProps {
  property: Property;
}

export default function PropertyDetailContent({ property }: ContentProps) {
  const [activeTab, setActiveTab] = useState<"PHOTOS" | "VIRTUAL_TOUR">("PHOTOS");
  const [selectedImage, setSelectedImage] = useState<string>(property.images[0]);
  
  // Inquiry Form State
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(`Merhaba, "${property.title}" ilanınız için detaylı bilgi ve gösterim randevusu almak istiyorum.`);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const wishlist = usePropertyStore((state) => state.wishlist);
  const toggleWishlist = usePropertyStore((state) => state.toggleWishlist);
  const addInquiry = usePropertyStore((state) => state.addInquiry);

  const isFavorite = wishlist.includes(property.id);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    addInquiry({
      propertyTitle: property.title,
      fullName,
      phone,
      email,
      message,
    });

    setIsSubmitted(true);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("tr-TR").format(price);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Back Link & Title */}
      <div className="space-y-3 border-b border-emlak-border pb-6">
        <Link
          href="/portfoy"
          className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-emlak-navy transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Portföy Kataloğuna Dön</span>
        </Link>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-2.5 py-1 rounded text-[11px] font-bold text-white uppercase ${
                property.status === "FOR_SALE" ? "bg-emlak-navy" : "bg-emerald-700"
              }`}>
                {property.statusName}
              </span>
              <span className="bg-emlak-cream border border-emlak-border text-emlak-navy px-2.5 py-1 rounded text-[11px] font-bold">
                {property.typeName}
              </span>
              {property.isCitizenship && (
                <span className="bg-emlak-gold text-emlak-navy px-2.5 py-1 rounded text-[11px] font-extrabold flex items-center gap-1">
                  <ShieldCheck size={13} /> Vatandaşlığa Uygun
                </span>
              )}
            </div>

            <h1 className="font-heading font-extrabold text-2xl sm:text-4xl text-emlak-navy leading-tight">
              {property.title}
            </h1>
            <div className="flex items-center gap-2 text-xs text-emlak-slate mt-2 font-medium">
              <MapPin size={14} className="text-emlak-gold" />
              <span>{property.address}</span>
            </div>
          </div>

          {/* Price & Actions */}
          <div className="flex flex-col items-start lg:items-end gap-2">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emlak-navy">
              {formatPrice(property.price)} <span className="text-emlak-gold text-xl">{property.currency}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => toggleWishlist(property.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 border transition-all ${
                  isFavorite ? "bg-rose-500 text-white border-rose-500" : "bg-white text-emlak-navy border-emlak-border hover:bg-slate-50"
                }`}
              >
                <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
                <span>{isFavorite ? "Favorilerinizde" : "Favorilere Ekle"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Gallery & Media Viewer */}
      <div className="space-y-4">
        {/* Media Tabs Header */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setActiveTab("PHOTOS")}
            className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === "PHOTOS" ? "bg-emlak-navy text-white shadow-md" : "bg-white text-emlak-slate hover:text-emlak-navy border border-emlak-border"
            }`}
          >
            <Camera size={16} />
            <span>4K Fotoğraf Galerisi ({property.images.length})</span>
          </button>

          {property.virtualTourUrl && (
            <button
              type="button"
              onClick={() => setActiveTab("VIRTUAL_TOUR")}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider flex items-center gap-2 transition-all ${
                activeTab === "VIRTUAL_TOUR" ? "bg-emlak-gold text-emlak-navy shadow-md" : "bg-white text-emlak-slate hover:text-emlak-navy border border-emlak-border"
              }`}
            >
              <Video size={16} />
              <span>3D Sanal Tur & Video</span>
            </button>
          )}
        </div>

        {/* Tab Content: Photos vs Virtual Tour */}
        {activeTab === "PHOTOS" ? (
          <div className="space-y-3">
            <div className="relative aspect-[16/9] max-h-[550px] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-lg border border-emlak-border">
              <img
                src={selectedImage}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                    selectedImage === img ? "border-emlak-gold scale-105 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt={`Önizleme ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="aspect-[16/9] max-h-[550px] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-lg border border-emlak-border flex items-center justify-center text-white">
            <iframe
              src={property.virtualTourUrl}
              className="w-full h-full border-0"
              title="3D Sanal Tur"
            />
          </div>
        )}
      </div>

      {/* Details Grid & Booking Form */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
        
        {/* Left 2 Columns: Specs & Features */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Key Specs Bar */}
          <div className="bg-white p-6 rounded-2xl border border-emlak-border shadow-sm grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-emlak-cream rounded-xl">
              <BedDouble size={20} className="text-emlak-gold mx-auto mb-1" />
              <div className="font-heading font-extrabold text-base text-emlak-navy">{property.roomCount}</div>
              <div className="text-[11px] text-slate-500 font-bold">Oda Sayısı</div>
            </div>

            <div className="p-3 bg-emlak-cream rounded-xl">
              <Maximize2 size={20} className="text-emlak-gold mx-auto mb-1" />
              <div className="font-heading font-extrabold text-base text-emlak-navy">{property.m2Net} m²</div>
              <div className="text-[11px] text-slate-500 font-bold">Net Kullanım</div>
            </div>

            <div className="p-3 bg-emlak-cream rounded-xl">
              <Bath size={20} className="text-emlak-gold mx-auto mb-1" />
              <div className="font-heading font-extrabold text-base text-emlak-navy">{property.bathroomCount}</div>
              <div className="text-[11px] text-slate-500 font-bold">Banyo</div>
            </div>

            <div className="p-3 bg-emlak-cream rounded-xl">
              <Layers size={20} className="text-emlak-gold mx-auto mb-1" />
              <div className="font-heading font-extrabold text-base text-emlak-navy">{property.floorNumber}</div>
              <div className="text-[11px] text-slate-500 font-bold">Kat / Tipi</div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="bg-white p-6 rounded-2xl border border-emlak-border shadow-sm space-y-4">
            <h3 className="font-heading font-extrabold text-lg text-emlak-navy border-b border-emlak-border pb-3">
              Gayrimenkul Açıklaması
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {property.description}
            </p>
          </div>

          {/* Features Checklist Grid */}
          <div className="bg-white p-6 rounded-2xl border border-emlak-border shadow-sm space-y-4">
            <h3 className="font-heading font-extrabold text-lg text-emlak-navy border-b border-emlak-border pb-3">
              Öne Çıkan Özellikler & Donanım
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-emlak-navy bg-emlak-cream p-3 rounded-lg border border-emlak-border/60">
                  <CheckCircle2 size={16} className="text-emlak-gold flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 1 Column: Agent Card & Booking Form */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Agent Card */}
          <div className="bg-emlak-navy text-white p-6 rounded-2xl shadow-xl space-y-4 border border-white/10">
            <div className="flex items-center gap-4">
              <img
                src={property.agent.photo}
                alt={property.agent.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-emlak-gold"
              />
              <div>
                <h4 className="font-heading font-extrabold text-base text-white">{property.agent.name}</h4>
                <p className="text-xs text-emlak-gold font-bold">{property.agent.title}</p>
              </div>
            </div>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-emlak-gold" />
                <a href={`tel:${property.agent.phone.replace(/\s+/g, "")}`} className="hover:text-white font-bold">{property.agent.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-emlak-gold" />
                <span>{property.agent.email}</span>
              </div>
            </div>

            <a
              href={`https://wa.me/905070871789?text=${encodeURIComponent(`Merhaba, "${property.title}" hakkinda bilgi almak istiyorum.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 text-white font-heading font-extrabold text-xs py-3 rounded-lg hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow"
            >
              <Phone size={16} />
              <span>WhatsApp İle Bilgi Al</span>
            </a>
          </div>

          {/* Booking Inquiry Form */}
          <div className="bg-white p-6 rounded-2xl border border-emlak-border shadow-sm space-y-4">
            <h3 className="font-heading font-extrabold text-base text-emlak-navy">
              Gösterim Randevusu Oluştur
            </h3>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl text-center space-y-2">
                <CheckCircle2 size={32} className="text-emerald-600 mx-auto" />
                <h4 className="font-bold text-sm">Talebiniz Alındı!</h4>
                <p className="text-xs">Danışmanımız en kısa sürede telefon numaranızdan sizinle iletişime geçecektir.</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-emlak-navy mb-1">Adınız Soyadınız *</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Adınız Soyadınız"
                    className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-2.5 text-emlak-navy font-bold focus:ring-2 focus:ring-emlak-gold outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-emlak-navy mb-1">Telefon / WhatsApp *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="05XX XXX XX XX"
                    className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-2.5 text-emlak-navy font-bold focus:ring-2 focus:ring-emlak-gold outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-emlak-navy mb-1">Mesajınız</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-emlak-cream border border-emlak-border rounded-lg p-2.5 text-emlak-navy font-medium focus:ring-2 focus:ring-emlak-gold outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emlak-gold text-emlak-navy font-heading font-extrabold text-xs py-3 rounded-lg hover:bg-amber-400 transition-all shadow flex items-center justify-center gap-2"
                >
                  <Send size={14} />
                  <span>Randevu Talebi Gönder</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
