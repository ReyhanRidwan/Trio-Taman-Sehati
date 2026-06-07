import { useState, useEffect } from "react";
import { Trees, Phone, Menu, X, ChevronRight } from "lucide-react";
import { CONTACT_INFO } from "../types";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Layanan", href: "#layanan" },
    { name: "Portofolio", href: "#portofolio" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Cara Kerja", href: "#cara-kerja" },
    { name: "Tips & Artikel", href: "#artikel" },
  ];

  const waLink = `https://wa.me/${CONTACT_INFO.whatsappFormatted}?text=Halo%20Trio%20Taman%20Sehati%2C%20saya%20tertarik%20dengan%20jasa%20pembuatan%20taman.%20Bisa%20konsultasi%3F`;

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1c2a1c]/95 backdrop-blur-md py-4 shadow-lg border-b border-[#2d3e2d]"
          : "bg-gradient-to-b from-black/60 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1780833009/tamansehati_1_yrnwgm.png"
              alt="Logo Trio Taman Sehati"
              referrerPolicy="no-referrer"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden xs:block select-none">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#fcfbf7]">
                Trio Taman <span className="text-[#8fa086]">Sehati</span>
              </span>
              <p className="text-[9px] tracking-widest uppercase text-[#cbd3c6]/80 -mt-1">
                Landscape & Garden Designer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wide text-[#cbd3c6] hover:text-[#fcfbf7] transition-all duration-300 hover:translate-y-[-1px]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* WhatsApp Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="bg-[#8fa086] hover:bg-[#a3b59a] text-[#1c2a1c] font-semibold text-sm px-5 py-2.5 rounded-full shadow-md shadow-[#1c2a1c]/30 hover:shadow-[#1c2a1c]/50 transition-all duration-300 flex items-center gap-2 group hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4 fill-current group-hover:animate-bounce" />
              <span>Hubungi Kami</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#fcfbf7] p-2 hover:bg-[#cbd3c6]/10 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-[#1a261a]/98 z-40 animate-fade-in border-t border-[#2d3e2d]">
          <div className="px-6 py-8 flex flex-col gap-6 h-full">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-[#fcfbf7]/90 hover:text-[#8fa086] transition-colors flex items-center justify-between border-b border-[#2d3e2d] pb-3"
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                <span>{link.name}</span>
                <ChevronRight className="h-4 w-4 text-[#8fa086]" />
              </a>
            ))}

            <div className="mt-auto pb-12">
              <p className="text-xs text-[#cbd3c6]/60 mb-3 text-center uppercase tracking-wider">
                Lokasi Layanan: {CONTACT_INFO.coverage}
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#8fa086] hover:bg-[#a3b59a] text-[#1c2a1c] font-semibold text-center py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="h-5 w-5" />
                <span>Chat WhatsApp (+62 823-1230-7261)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
