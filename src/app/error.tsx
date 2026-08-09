"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Root error caught:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full border border-emlak-border shadow-xl text-center space-y-4">
        <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto">
          <AlertTriangle size={32} />
        </div>
        <h2 className="font-heading font-extrabold text-xl text-emlak-navy">
          Bir Hata Oluştu
        </h2>
        <p className="text-xs text-slate-500">
          Sayfa yüklenirken geçici bir sorun meydana geldi. Lütfen tekrar deneyin.
        </p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-emlak-navy text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-emlak-gold hover:text-emlak-navy transition-all"
          >
            <RefreshCw size={14} />
            <span>Tekrar Dene</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-slate-100 text-emlak-navy text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-slate-200 transition-all"
          >
            <Home size={14} />
            <span>Ana Sayfa</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
