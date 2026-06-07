import { Trees, Palmtree, Mountain, Layers, Droplet, Hammer, Phone } from "lucide-react";
import { SERVICE_ITEMS, CONTACT_INFO } from "../types";

export default function Services() {
  const renderIcon = (iconName: string) => {
    const iconClass = "h-7 w-7 text-[#fcfbf7]";
    switch (iconName) {
      case "Trees":
        return <Trees className={iconClass} />;
      case "Palmtree":
        return <Palmtree className={iconClass} />;
      case "Mountain":
        return <Mountain className={iconClass} />;
      case "Layers":
        return <Layers className={iconClass} />;
      case "Droplet":
        return <Droplet className={iconClass} />;
      case "Hammer":
        return <Hammer className={iconClass} />;
      default:
        return <Trees className={iconClass} />;
    }
  };

  return (
    <section id="layanan" className="py-24 bg-[#141d14] text-[#fcfbf7] relative">
      {/* Dynamic SEO Tag */}
      <div className="sr-only">
        <h2>pembuatan taman rumah, jasa landscape, tukang taman</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#8fa086] font-mono text-xs font-semibold tracking-widest uppercase bg-[#8fa086]/20 px-4 py-1.5 rounded-full">
            Layanan Kami
          </span>
          <h2 className="font-serif text-3.5xl sm:text-4xl font-semibold tracking-tight text-[#fcfbf7] mt-4 mb-5">
            Solusi Total Keindahan Landscape Luar Ruangan
          </h2>
          <p className="text-sm text-[#cbd3c6] max-w-2xl mx-auto">
            Dari sekadar sisa lahan sempit hingga halaman perkebunan eksklusif, kami menawarkan kreasi desain artistik dengan material dan tanaman pilihan terbaik.
          </p>
          <div className="h-1 w-20 bg-[#8fa086] mx-auto rounded-full mt-6" />
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_ITEMS.map((service) => {
            const waServiceLink = `https://wa.me/${CONTACT_INFO.whatsappFormatted}?text=Halo%20Trio%20Taman%20Sehati%2C%20saya%20tertarik%20dengan%20layanan%20*${encodeURIComponent(service.title)}*.%20Bisa%20berdiskusi%20lebih%20lanjut%3F`;

            return (
              <div
                key={service.id}
                className="bg-[#1c2a1c]/80 rounded-2xl overflow-hidden border border-[#2d3e2d] hover:border-[#8fa086]/50 transition-all duration-300 group flex flex-col hover:translate-y-[-4px] shadow-lg hover:shadow-2xl"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Floating Absolute Icon */}
                  <div className="absolute bottom-4 left-4 z-20 bg-[#8fa086] p-3 rounded-xl shadow-lg border border-[#a3b59a]/30">
                    {renderIcon(service.iconName)}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-bold text-[#fcfbf7] mb-3 group-hover:text-[#8fa086] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#cbd3c6] leading-relaxed mb-6 line-clamp-4">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-[#2d3e2d] flex items-center justify-between">
                    <span className="text-[10px] tracking-widest uppercase font-mono text-[#8fa086] font-semibold">
                      Trio Taman Sehati
                    </span>
                    <a
                      href={waServiceLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-[#fcfbf7] hover:text-[#8fa086] flex items-center gap-1.5 group/btn transition-colors"
                    >
                      <span>Pesan Jasa</span>
                      <Phone className="h-3 w-3 fill-current group-hover/btn:animate-pulse" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Customization Callout */}
        <div className="mt-16 bg-gradient-to-r from-[#1c2a1c] to-[#243324] rounded-2xl p-8 sm:p-10 border border-[#2d3e2d] text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl">
            <h3 className="font-serif text-2xl font-bold mb-2">Punya kebutuhan taman custom di luar daftar?</h3>
            <p className="text-sm text-[#cbd3c6]">
              Tim arsitek landscape kami melayani konsultasi desain eksklusif, pembuatan tebing gazebo kolam besar, reliabilitas drainase rumput lapangan, hingga pasokan pupuk & media bercocok tanam custom.
            </p>
          </div>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappFormatted}?text=Halo%20Trio%20Taman%20Sehati%2C%20saya%20punya%20desain%20taman%20custom%20sendiri%20dan%20ingin%20bekerjasama%20untuk%20pembuatannya.`}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-[#8fa086] hover:bg-[#a3b59a] text-[#1c2a1c] font-bold text-sm px-7 py-3.5 rounded-xl transition-all hover:scale-102 shadow-md inline-flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            <span>Konsultasikan Keinginan Anda</span>
          </a>
        </div>
      </div>
    </section>
  );
}
