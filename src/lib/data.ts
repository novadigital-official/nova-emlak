export interface Property {
  id: string;
  title: string;
  slug: string;
  description: string;
  type: "VILLA" | "APARTMENT" | "LAND" | "COMMERCIAL";
  typeName: string;
  status: "FOR_SALE" | "FOR_RENT" | "PROJECT";
  statusName: string;
  price: number;
  currency: string;
  m2Net: number;
  m2Gross: number;
  roomCount: string;
  bathroomCount: number;
  buildingAge: string;
  floorNumber: string;
  city: string;
  district: string;
  address: string;
  images: string[];
  videoUrl?: string;
  virtualTourUrl?: string;
  isFeatured: boolean;
  isCitizenship: boolean; // Türk Vatandaşlığına Uygun
  features: string[];
  agent: {
    name: string;
    title: string;
    phone: string;
    email: string;
    photo: string;
  };
}

export interface District {
  name: string;
  slug: string;
  count: number;
  image: string;
}

export const DISTRICTS: District[] = [
  {
    name: "Konyaaltı",
    slug: "konyaalti",
    count: 14,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Muratpaşa (Lara)",
    slug: "muratpasa",
    count: 18,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Döşemealtı",
    slug: "dosemealti",
    count: 9,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Alanya",
    slug: "alanya",
    count: 12,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
  }
];

export const PROPERTIES: Property[] = [
  // 1. Konyaaltı Lüks Deniz Manzaralı Müstakil Villa
  {
    id: "prop-1",
    title: "Konyaaltı Gürsu'da Akıllı Ev Sistemli Lüks Tripleks Villa",
    slug: "konyaalti-gursuda-akilli-ev-sistemli-luks-tripleks-villa",
    description: "Antalya Konyaaltı Gürsu mahallesinde, denize 400 metre mesafede yer alan, özel yüzme havuzlu, akıllı ev otomasyonlu ve özel kapalı otoparklı sıfır müstakil tripleks villa. Türk Vatandaşlığı başvurusuna %100 uygundur.",
    type: "VILLA",
    typeName: "Müstakil Villa",
    status: "FOR_SALE",
    statusName: "Satılık",
    price: 34500000,
    currency: "TL",
    m2Net: 380,
    m2Gross: 450,
    roomCount: "5+2",
    bathroomCount: 4,
    buildingAge: "0 (Sıfır)",
    floorNumber: "Müstakil Tripleks",
    city: "Antalya",
    district: "Konyaaltı",
    address: "Gürsu Mahallesi, 304 Sokak No:12, Konyaaltı / Antalya",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
    ],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    virtualTourUrl: "https://my.matterport.com/show/?m=sample",
    isFeatured: true,
    isCitizenship: true,
    features: [
      "Özel Açık Yüzme Havuzu",
      "Vatandaşlığa Uygun",
      "Denize 400m",
      "Akıllı Ev Otomasyonu",
      "Özel Kapalı Otopark",
      "Yerden Isıtma",
      "VRF Klima Sistemi",
      "Sauna & Jakuzi"
    ],
    agent: {
      name: "Mehmet Can Yılmaz",
      title: "Lüks Konut & Villa Uzmanı",
      phone: "0507 087 17 89",
      email: "mehmet@novaemlak.com.tr",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
    }
  },

  // 2. Lara / Muratpaşa Panoramik Deniz Manzaralı Daire
  {
    id: "prop-2",
    title: "Lara Şirinyalı'da Falez Üzeri Panoramik Deniz Manzaralı Daire",
    slug: "lara-sirinyalida-falez-uzeri-panoramik-deniz-manzarali-daire",
    description: "Antalya Muratpaşa Şirinyalı Mahallesi falez hattında, kesintisiz Akdeniz manzarasına sahip, özel tasarım teraslı ve güvenlikli sitede lüks çatı dubleks daire.",
    type: "APARTMENT",
    typeName: "Lüks Daire / Dubleks",
    status: "FOR_SALE",
    statusName: "Satılık",
    price: 21800000,
    currency: "TL",
    m2Net: 220,
    m2Gross: 260,
    roomCount: "4+1",
    bathroomCount: 3,
    buildingAge: "2 Yıllık",
    floorNumber: "9. Kat (Çatı Dubleks)",
    city: "Antalya",
    district: "Muratpaşa",
    address: "Şirinyalı Mahallesi, İsmet Gökşen Caddesi, Muratpaşa / Antalya",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    isCitizenship: true,
    features: [
      "Kesintisiz Falez Deniz Manzarası",
      "7/24 Güvenlik & Resepsiyon",
      "Geniş Teras & Barbekü Alanı",
      "Kapalı Otopark",
      "Vatandaşlığa Uygun"
    ],
    agent: {
      name: "Selin Kaya",
      title: "Lara & Falez Bölge Sorumlusu",
      phone: "0532 111 22 33",
      email: "selin@novaemlak.com.tr",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    }
  },

  // 3. Döşemealtı Müstakil Havuzlu Malikane
  {
    id: "prop-3",
    title: "Döşemealtı Altınkale'de 1.200 m² Arsa İçinde Çam Ormanı Yanı Malikane",
    slug: "dosemealti-altinkalede-1200m2-arsa-icinde-malikane",
    description: "Antalya Döşemealtı Altınkale bölgesinde, nemsiz ve temiz dağ havası ile çam ormanının tam yanında, 1.200 m² özel arsa üzerine kurulu, kış bahçeli lüks müstakil malikane.",
    type: "VILLA",
    typeName: "Müstakil Malikane",
    status: "FOR_SALE",
    statusName: "Satılık",
    price: 42000000,
    currency: "TL",
    m2Net: 520,
    m2Gross: 650,
    roomCount: "6+2",
    bathroomCount: 5,
    buildingAge: "1 Yıllık",
    floorNumber: "Müstakil Malikane",
    city: "Antalya",
    district: "Döşemealtı",
    address: "Altınkale Mahallesi, Çamlık Caddesi, Döşemealtı / Antalya",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    isCitizenship: true,
    features: [
      "1.200 m² Özel Arsa Payı",
      "Orman Manzarası",
      "Yarı Olimpik Özel Yüzme Havuzu",
      "Müstakil Müştemilat Dairesi",
      "Güneş Enerjisi & Jeneratör"
    ],
    agent: {
      name: "Mehmet Can Yılmaz",
      title: "Lüks Konut & Villa Uzmanı",
      phone: "0507 087 17 89",
      email: "mehmet@novaemlak.com.tr",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
    }
  },

  // 4. Kiralık Lüks Villa (Konyaaltı Liman)
  {
    id: "prop-4",
    title: "Konyaaltı Liman Mahallesi'nde Eşyalı Özel Havuzlu Kiralık Villa",
    slug: "konyaalti-liman-mahallesinde-esyali-kiralik-villa",
    description: "Tüm mobilyaları dünyaca ünlü markalardan seçilmiş, taşınmaya hazır, özel güvenlikli ve ısıtmalı havuzlu eşyalı kiralık villa.",
    type: "VILLA",
    typeName: "Müstakil Villa",
    status: "FOR_RENT",
    statusName: "Kiralık",
    price: 145000,
    currency: "TL/Ay",
    m2Net: 280,
    m2Gross: 330,
    roomCount: "4+1",
    bathroomCount: 3,
    buildingAge: "0 (Sıfır)",
    floorNumber: "Müstakil",
    city: "Antalya",
    district: "Konyaaltı",
    address: "Liman Mahallesi, 42 Sokak, Konyaaltı / Antalya",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    isCitizenship: false,
    features: [
      "Tamamen Lüks Eşyalı",
      "Isıtmalı Açık Havuz",
      "Denize Yürüme Mesafesinde",
      "Yıllık Peşin Ödeme İndirimi"
    ],
    agent: {
      name: "Selin Kaya",
      title: "Lara & Falez Bölge Sorumlusu",
      phone: "0532 111 22 33",
      email: "selin@novaemlak.com.tr",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    }
  },

  // 5. Kepez Ünsal Sanayi / Ticari Depo ve Dükkan
  {
    id: "prop-5",
    title: "Kepez Otogar Civarı 1.500 m² Yüksek Girişli Ticari Dükkan & Mağaza",
    slug: "kepez-otogar-civari-1500m2-ticari-dukkan-magaza",
    description: "Antalya Kepez ana cadde üzerinde, kurumsal market, showroom veya lojistik merkezi için yüksek tavanlı ticari mülk.",
    type: "COMMERCIAL",
    typeName: "Ticari / Dükkan",
    status: "FOR_SALE",
    statusName: "Satılık",
    price: 28000000,
    currency: "TL",
    m2Net: 1250,
    m2Gross: 1500,
    roomCount: "Ticari Alan",
    bathroomCount: 4,
    buildingAge: "4 Yıllık",
    floorNumber: "Giriş + Asma Kat",
    city: "Antalya",
    district: "Kepez",
    address: "Ünsal Mahallesi, Namık Kemal Bulvarı, Kepez / Antalya",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: false,
    isCitizenship: true,
    features: [
      "Ana Cadde Üzeri Tabela Değeri Yüksek",
      "Tır & Yükleme Yanaşma Alanı",
      "Kurumsal Kiracılı Yüksek Kira Getirisi"
    ],
    agent: {
      name: "Ahmet Demir",
      title: "Ticari Gayrimenkul Danışmanı",
      phone: "0544 999 88 77",
      email: "ahmet@novaemlak.com.tr",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
    }
  },

  // 6. Alanya Kargıcak Deniz Manzaralı Villa Projesi
  {
    id: "prop-6",
    title: "Alanya Kargıcak'ta Panoramik Kale ve Deniz Manzaralı Sıfır İkiz Villa",
    slug: "alanya-kargicakta-panoramik-kale-ve-deniz-manzarali-villa",
    description: "Alanya Kargıcak tepelerinde, Alanya Kalesi ve sonsuz Akdeniz manzarasına hakim, özel saunalı ve jakuzili lüks villa.",
    type: "VILLA",
    typeName: "Lüks Villa",
    status: "PROJECT",
    statusName: "Projeden / Lansman",
    price: 19500000,
    currency: "TL",
    m2Net: 240,
    m2Gross: 290,
    roomCount: "3+1",
    bathroomCount: 3,
    buildingAge: "0 (Yapım Aşamasında)",
    floorNumber: "Müstakil",
    city: "Antalya",
    district: "Alanya",
    address: "Kargıcak Mahallesi, Alanya / Antalya",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1000&auto=format&fit=crop"
    ],
    isFeatured: true,
    isCitizenship: true,
    features: [
      "Sonsuzluk Havuzu (Infinity Pool)",
      "Alanya Kalesi Manzarası",
      "Lansman Fiyatı ile Taksitli Ödeme",
      "Vatandaşlığa Uygun"
    ],
    agent: {
      name: "Selin Kaya",
      title: "Lara & Falez Bölge Sorumlusu",
      phone: "0532 111 22 33",
      email: "selin@novaemlak.com.tr",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
    }
  }
];

export const REVIEWS = [
  {
    id: "rev-1",
    name: "Caner & Selen Özkan",
    role: "Gürsu Villa Alıcısı",
    comment: "Konyaaltı'ndaki müstakil villamızı alırken Mehmet Bey son derece şeffaf ve profesyonel bir süreç yönetti. Tapu ve vatandaşlık işlemleri eksiksiz tamamlandı.",
    rating: 5,
    date: "Ağustos 2026"
  },
  {
    id: "rev-2",
    name: "Dr. Hakan Yıldırım",
    role: "Lara Daire Yatırımcısı",
    comment: "Lara falezlerdeki yatırım amaçlı daire alımımızda ekspertiz değerleme raporundan kira garantisine kadar her adımda Nova Emlak yanımızdaydı.",
    rating: 5,
    date: "Temmuz 2026"
  }
];
