import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Property, PROPERTIES } from "@/lib/data";

interface PropertyFilters {
  status: "ALL" | "FOR_SALE" | "FOR_RENT" | "PROJECT";
  type: "ALL" | "VILLA" | "APARTMENT" | "LAND" | "COMMERCIAL";
  district: string;
  maxPrice: number;
  roomCount: string;
  searchQuery: string;
}

export interface InquiryItem {
  id: string;
  propertyTitle: string;
  fullName: string;
  phone: string;
  email: string;
  message: string;
  status: string;
  createdAt: string;
}

interface PropertyState {
  wishlist: string[];
  filters: PropertyFilters;
  inquiries: InquiryItem[];

  toggleWishlist: (propertyId: string) => void;
  isInWishlist: (propertyId: string) => boolean;

  setFilter: (key: keyof PropertyFilters, value: any) => void;
  resetFilters: () => void;

  addInquiry: (inquiry: Omit<InquiryItem, "id" | "status" | "createdAt">) => void;
}

const initialFilters: PropertyFilters = {
  status: "ALL",
  type: "ALL",
  district: "ALL",
  maxPrice: 50000000,
  roomCount: "ALL",
  searchQuery: "",
};

export const usePropertyStore = create<PropertyState>()(
  persist(
    (set, get) => ({
      wishlist: [],
      filters: initialFilters,
      inquiries: [
        {
          id: "inq-1",
          propertyTitle: "Konyaaltı Gürsu'da Akıllı Ev Sistemli Lüks Tripleks Villa",
          fullName: "Serkan Yılmaz",
          phone: "0532 999 88 77",
          email: "serkan@example.com",
          message: "Villayı yarın saat 14:00'te yerinde görmek ve randevu almak istiyorum.",
          status: "YENİ",
          createdAt: "09 Ağustos 2026",
        },
      ],

      toggleWishlist: (propertyId) => {
        const current = get().wishlist;
        if (current.includes(propertyId)) {
          set({ wishlist: current.filter((id) => id !== propertyId) });
        } else {
          set({ wishlist: [...current, propertyId] });
        }
      },

      isInWishlist: (propertyId) => {
        return get().wishlist.includes(propertyId);
      },

      setFilter: (key, value) => {
        set({ filters: { ...get().filters, [key]: value } });
      },

      resetFilters: () => {
        set({ filters: initialFilters });
      },

      addInquiry: (inquiryData) => {
        const newInquiry: InquiryItem = {
          ...inquiryData,
          id: `inq-${Date.now()}`,
          status: "YENİ",
          createdAt: "Bugün",
        };
        set({ inquiries: [newInquiry, ...get().inquiries] });
      },
    }),
    {
      name: "nova-emlak-storage",
      partialize: (state) => ({ wishlist: state.wishlist, inquiries: state.inquiries }),
    }
  )
);
