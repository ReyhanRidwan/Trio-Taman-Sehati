import { Trees, Phone, MapPin, Instagram, Mail, Info, Clock } from "lucide-react";
import { CONTACT_INFO } from "../types";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const waLink = `https://wa.me/${CONTACT_INFO.whatsappFormatted}?text=Halo%20Trio%20Taman%20Sehati%2C%20saya%20ingin%20bertanya%20mengenai%20alamat%20workshop%20ataupun%20layanan%20landscape%20taman.`;

  return (
    <footer className="bg-[#101710] text-[#fcfbf7] pt-20 pb-10 border-t border-[#2d3e2d] relative overflow-hidden">
      {/* Search keywords tag for SEO footer indexing */}
      <div className="sr-only">
        <h3>jasa taman, tukang taman, jasa landscape, pembuatan taman rumah</h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2d3e2d]">
          {/* Column 1: Branding and Core Focus (Col 4) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <img
                src="https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1780833009/tamansehati_1_yrnwgm.png"
                alt="Logo Trio Taman Sehati"
                referrerPolicy="no-referrer"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="select-none">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#fcfbf7]">
                  Trio Taman <span className="text-[#8fa086]">Sehati</span>
                </span>
                <p className="text-[9px] tracking-widest uppercase text-[#cbd3c6]/60 -mt-1">
                  Landscape & Garden Designer
                </p>
              </div>
            </a>
            <p className="text-sm text-[#cbd3c6]/80 leading-relaxed mt-2.5">
              Menghubungkan estetika hunian modern Anda dengan kesegaran vegetasi alam murni. Konstruksi rapi, bahan premium, dan jaminan tumbuh.
            </p>

            {/* Social handles */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href={`https://instagram.com/${CONTACT_INFO.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1c2a1c] p-2.5 rounded-xl border border-[#2d3e2d] hover:border-[#8fa086] text-[#cbd3c6] hover:text-[#8fa086] transition-all"
                aria-label="Instagram Trio Taman Sehati"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="bg-[#1c2a1c] p-2.5 rounded-xl border border-[#2d3e2d] hover:border-[#8fa086] text-[#cbd3c6] hover:text-[#8fa086] transition-all"
                aria-label="WhatsApp Trio Taman Sehati"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation Link (Col 3) */}
          <div className="md:col-span-3 md:pl-4">
            <h4 className="font-serif text-lg font-bold text-[#8fa086] mb-5">
              Penjelajahan
            </h4>
            <div className="grid grid-cols-1 gap-3 text-sm text-[#cbd3c6]/80">
              <a href="#beranda" className="hover:text-white transition-colors">Beranda</a>
              <a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a>
              <a href="#layanan" className="hover:text-white transition-colors">Layanan Landscape</a>
              <a href="#portofolio" className="hover:text-white transition-colors">Galeri Proyek</a>
              <a href="#keunggulan" className="hover:text-white transition-colors">Keunggulan Utama</a>
              <a href="#cara-kerja" className="hover:text-white transition-colors">Alur Kerja (Workflow)</a>
              <a href="#artikel" className="hover:text-white transition-colors">Tips & Edukasi</a>
            </div>
          </div>

          {/* Column 3: Workshop & Direct Coordinates (Col 5) */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <h4 className="font-serif text-lg font-bold text-[#8fa086]">
              Hubungi Kami & Workshop
            </h4>
            
            <div className="flex items-start gap-3.5 text-sm">
              <MapPin className="h-5 w-5 text-[#8fa086] shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-[#fcfbf7] mb-1">Kantor Workshop Seni:</span>
                <p className="text-[#cbd3c6]/80 leading-relaxed text-xs sm:text-sm">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-sm">
              <Info className="h-5 w-5 text-[#8fa086] shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-[#fcfbf7] mb-1">Cakupan Wilayah Survey:</span>
                <p className="text-[#cbd3c6]/80 leading-relaxed text-xs sm:text-sm">
                  Seluruh wilayah <strong>{CONTACT_INFO.coverage}</strong>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 text-sm">
              <Clock className="h-5 w-5 text-[#8fa086] shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-[#fcfbf7] mb-1">Jam Operasional:</span>
                <p className="text-[#cbd3c6]/80 text-xs sm:text-sm">
                  Setiap Hari: 07:00 - 18:00 (Hari Libur Tetap Melayani Konsultasi/Survey)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#cbd3c6]/50 gap-4">
          <p>
            &copy; {currentYear} <strong>Trio Taman Sehati Bogor</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p>Seni Penataan Lanskap Alami Indonesia</p>
            <a href={waLink} target="_blank" rel="noreferrer" className="hover:text-[#8fa086] transition-colors">
              Chat WA: {CONTACT_INFO.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
