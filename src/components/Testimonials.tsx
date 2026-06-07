import { Star, Quote, MessageSquare } from "lucide-react";
import { TESTIMONIALS } from "../types";

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-[#faf9f3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#8fa086] font-mono text-xs font-semibold tracking-widest uppercase bg-[#8fa086]/10 px-4 py-1.5 rounded-full">
            Testimoni Klien
          </span>
          <h2 className="font-serif text-3.5xl sm:text-4xl font-semibold text-[#1c2a1c] tracking-tight mt-4 mb-5">
            Kepuasan Nyata dari Pemilik Rumah Asri
          </h2>
          <p className="text-sm text-[#5c6e5c]">
            Simak ulasan tulus dari klien kami yang pekarangannya kini berubah indah menjadi ruang rekreasi keluarga yang asri.
          </p>
          <div className="h-1 w-20 bg-[#8fa086] mx-auto rounded-full mt-6" />
        </div>

        {/* Testimonials Grid Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-2xl border border-[#eae7de] shadow-2xs hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between"
            >
              {/* Giant elegant quoting marks */}
              <Quote className="absolute top-6 right-8 h-10 w-10 text-[#8fa086]/10 group-hover:text-[#8fa086]/20 transition-colors" />

              <div>
                {/* 5 Star rating */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-[#d4af37] text-[#d4af37]"
                    />
                  ))}
                </div>

                {/* Review Message */}
                <p className="text-sm sm:text-base text-[#4a5a4a] italic leading-relaxed mb-6 font-serif">
                  "{t.review}"
                </p>
              </div>

              {/* Profile Card Info */}
              <div className="flex items-center gap-4.5 pt-6 border-t border-[#faf9f3] mt-auto">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="h-11 w-11 rounded-full object-cover border border-[#cbd3c6]/50"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#1c2a1c] uppercase tracking-wide">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#8fa086] font-medium mt-0.5">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust summary statement bar */}
        <div className="mt-16 bg-[#eae7de]/30 rounded-2xl py-6 px-8 flex flex-col sm:flex-row items-center justify-between border border-[#eae7de] gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 text-left">
            <div className="bg-[#8fa086]/20 p-2.5 rounded-lg text-[#1c2a1c]">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1c2a1c]">Ingin Melihat Review Lainnya?</p>
              <p className="text-xs text-[#5c6e5c]">Kami memiliki ratusan review terverifikasi di Google Map bisnis kami.</p>
            </div>
          </div>
          <a
            href="https://wa.me/+6282312307261?text=Halo%20Trio%20Taman%20Sehati%2C%20apakah%20bisa%20saya%20dikirimkan%20beberapa%20referensi%20kontak%20klien%20sebelumnya%20untuk%20testimoni%3F"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-bold text-[#1c2a1c] hover:text-[#8fa086] underline decoration-[#8fa086] underline-offset-4"
          >
            Tanya Klien Sebelumnya
          </a>
        </div>

      </div>
    </section>
  );
}
