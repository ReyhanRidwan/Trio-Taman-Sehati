import { useState } from "react";
import { Search, X, MessageCircle, ArrowUpRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_ITEMS, CONTACT_INFO, PortfolioItem } from "../types";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const categories = [
    "Semua",
    "Minimalis",
    "Tropis",
    "Vertical Garden",
    "Kolam Hias",
    "Hardscape",
  ];

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === "Semua") return true;
    return item.category === activeCategory;
  });

  const getWaMessage = (item: PortfolioItem) => {
    return `https://wa.me/${CONTACT_INFO.whatsappFormatted}?text=Halo%20Trio%20Taman%20Sehati%2C%20saya%20suka%20sekali%20desain%20*${encodeURIComponent(item.title)}*%20(${encodeURIComponent(item.imageUrl)}).%20Bisa%20survey%20untuk%20buat%20seperti%20ini%20di%20rumah%20saya%3F`;
  };

  return (
    <section id="portofolio" className="py-24 bg-[#faf9f3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#8fa086] font-mono text-xs font-semibold tracking-widest uppercase bg-[#8fa086]/10 px-4 py-1.5 rounded-full">
            Galeri Portofolio
          </span>
          <h2 className="font-serif text-3.5xl sm:text-4xl font-semibold text-[#1c2a1c] tracking-tight mt-4 mb-4">
            Karya Lanskap Nyata Trio Taman Sehati
          </h2>
          <p className="text-sm text-[#5c6e5c]">
            Klik pada gambar untuk memperbesar detail konstruksi dan langsung mengajukannya sebagai konsep desain Anda lewat WhatsApp.
          </p>
          <div className="h-1 w-20 bg-[#8fa086] mx-auto rounded-full mt-6" />
        </div>

        {/* Small Elegant Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 mb-12 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#1c2a1c] text-[#fcfbf7] shadow-sm font-semibold scale-102"
                  : "bg-white text-[#5c6e5c] border border-[#cbd3c6]/40 hover:bg-[#8fa086]/5 hover:text-[#1c2a1c]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Modern 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.5">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#eae7de]/25 rounded-2xl overflow-hidden border border-[#eae7de] shadow-2xs hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {/* Image Section */}
                <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Glassmorphism Dark Cover on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-[#1c2a1c]/80 backdrop-blur-md border border-[#ffffff]/10 text-white font-mono text-[9px] sm:text-xs font-semibold tracking-wider px-3 py-1 rounded-full uppercase">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom Indicator Icon */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
                    <div className="bg-[#8fa086] p-2 rounded-xl text-[#1c2a1c] shadow-lg">
                      <Search className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Portfolio Text Info Overlaid at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 text-white translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-base sm:text-lg font-bold tracking-tight text-white line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-[#cbd3c6] mt-1 flex items-center gap-1">
                          <Zap className="h-3 w-3 text-[#8fa086] fill-[#8fa086]" />
                          <span>Sent Sehati Landscape Jasa</span>
                        </p>
                      </div>
                      <div className="bg-white/10 hover:bg-[#8fa086] hover:text-[#1c2a1c] p-2 rounded-lg transition-colors border border-white/10">
                        <ArrowUpRight className="h-4 w-4 text-white hover:text-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state callback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#eae7de]/80 max-w-md mx-auto">
            <p className="text-[#5c6e5c] mb-4">Maaf, proyek kategori ini belum ditampilkan di galeri utama.</p>
            <button
              onClick={() => setActiveCategory("Semua")}
              className="bg-[#8fa086] text-[#1c2a1c] font-semibold text-xs px-5 py-2.5 rounded-lg"
            >
              Kembali ke Semua Portofolio
            </button>
          </div>
        )}

        {/* Large Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              {/* Escape Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-[#fcfbf7] hover:text-[#8fa086] bg-white/10 p-2.5 rounded-full z-50 transition-colors focus:outline-none"
                aria-label="Tutup Galeri"
              >
                <X className="h-6 w-6" />
              </button>

              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                className="bg-[#1c2a1c] rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl border border-[#2d3e2d] z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* Photo Left */}
                  <div className="md:col-span-8 bg-black flex items-center justify-center max-h-[75vh]">
                    <img
                      src={selectedItem.imageUrl}
                      alt={selectedItem.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain max-h-[60vh] md:max-h-[75vh]"
                    />
                  </div>

                  {/* Detail Panel Right */}
                  <div className="md:col-span-4 p-6 flex flex-col justify-between bg-[#1c2a1c] text-[#fcfbf7]">
                    <div>
                      <span className="bg-[#8fa086]/20 text-[#8fa086] font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#8fa086]/30">
                        {selectedItem.category}
                      </span>
                      <h3 className="font-serif text-xl font-bold tracking-tight text-[#fcfbf7] mt-4 mb-3">
                        {selectedItem.title}
                      </h3>
                      <div className="h-0.5 bg-[#2d3e2d] w-12 my-4" />
                      <p className="text-xs text-[#cbd3c6] leading-relaxed mb-6">
                        Proyek asli dikerjakan sepenuhnya di lokasi klien dengan desain modular terintegrasi. Kami menggunakan bibit vegetasi segar terawat agar hasil estetika dan tingkat tumbuh di halaman Anda terjamin prima.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#2d3e2d]">
                      <a
                        href={getWaMessage(selectedItem)}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#8fa086] hover:bg-[#a3b59a] text-[#1c2a1c] font-bold text-center text-xs py-3 w-full rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-[1.02]"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Tanyakan Desain Ini (WA)</span>
                      </a>
                      <p className="text-[10px] text-[#cbd3c6]/40 text-center mt-3">
                        Estimasi pengerjaan 7-14 hari kerja tergantung luasan lahan.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
