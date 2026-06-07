import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import { Trees, Phone, MessageSquare, CheckSquare, ShieldCheck } from "lucide-react";
import { CONTACT_INFO } from "./types";

export default function App() {
  const waClosingLink = `https://wa.me/${CONTACT_INFO.whatsappFormatted}?text=Halo%20Trio%20Taman%20Sehati%2C%20saya%20sudah%20melihat%20website%20dan%20ingin%20segera%20mewujudkan%20taman%20impian%20saya.%20Kapan%20jadwal%20kosong%20survey%20lokasi%3F`;

  return (
    <div id="app" className="relative min-h-screen flex flex-col font-sans overflow-x-hidden selection:bg-[#8fa086] selection:text-[#1c2a1c]">
      
      {/* 1. Header Navigation */}
      <Header />

      {/* Main Pages Segment */}
      <main className="flex-grow">
        
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Tentang Kami Section */}
        <About />

        {/* 4. Layanan Kami Section */}
        <Services />

        {/* 5. Portfolio Section (WAJIB MENONJOL) */}
        <Portfolio />

        {/* 6. Keunggulan Section */}
        <WhyUs />

        {/* 7. Cara Kerja Section */}
        <Workflow />

        {/* 8. Testimoni Klien Section */}
        <Testimonials />

        {/* 9. High-Conversion CTA Closing Section */}
        <section className="relative py-24 bg-[#1c2a1c] text-[#fcfbf7] overflow-hidden">
          {/* Subtle natural foliage backgrounds */}
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1775644289/gambarproyek2_chtuzp.jpg')] bg-cover bg-center mix-blend-overlay opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c2a1c]/90 via-[#101710]/95 to-[#1c2a1c]/90" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-[#8fa086] font-mono text-xs font-bold tracking-[0.2em] uppercase bg-[#8fa086]/20 px-4 py-1.5 rounded-full inline-block mb-6">
              RESERVE JADWAL SEKARANG
            </span>
            
            <h2 className="font-serif text-3.5xl sm:text-5xl font-semibold tracking-tight text-[#fcfbf7] leading-tight max-w-3xl mx-auto mb-6">
              Wujudkan Taman Impian Anda Sekarang Bersama Kami
            </h2>
            
            <p className="text-sm sm:text-base text-[#cbd3c6] max-w-2xl mx-auto mb-10 leading-relaxed">
              Konsultasi desain & survey lokasi sepenuhnya <strong>GRATIS</strong> untuk wilayah Jabodetabek. Tim profesional kami siap mewujudkan keasrian vegetasi terbaik di rumah Anda.
            </p>

            {/* Benefit Badges inside CTA */}
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-12 text-xs sm:text-sm text-[#cbd3c6]/90 font-medium">
              <div className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-[#8fa086]" />
                <span>Survey & Estimasi Rp 0</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckSquare className="h-4 w-4 text-[#8fa086]" />
                <span>Desain Menyesuaikan Budget</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#8fa086]" />
                <span>Garansi Tumbuh Segar</span>
              </div>
            </div>

            {/* Giant WhatsApp CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={waClosingLink}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#8fa086] hover:bg-[#a3b59a] text-[#1c2a1c] font-black text-center text-base px-10 py-5 rounded-2xl shadow-xl shadow-black/40 transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-3"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                <span>Hubungi via Chat WhatsApp</span>
              </a>
              <div className="text-xs sm:text-sm text-[#cbd3c6]/60">
                Atau hubungi langsung: <strong className="text-white hover:text-[#8fa086]">{CONTACT_INFO.whatsapp}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Artikel Section */}
        <Articles />

      </main>

      {/* 11. Footer Section */}
      <Footer />

      {/* 12. Floating Quick Contact WhatsApp Badge */}
      <FloatingWhatsApp />
      
    </div>
  );
}
