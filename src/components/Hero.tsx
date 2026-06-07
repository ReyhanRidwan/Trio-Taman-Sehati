import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Phone, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HERO_SLIDES, CONTACT_INFO } from "../types";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideCount = HERO_SLIDES.length;

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 6000); // 6 seconds auto slide
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  // Motion variants for horizontal slide & fade combined
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
      },
    }),
  };

  const waLink = `https://wa.me/${CONTACT_INFO.whatsappFormatted}?text=Halo%20Trio%20Taman%20Sehati%2C%20saya%20tertarik%20dengan%20layanan%20kalian%20yang%20tampil%20di-website.%20Bisa%20survey%20ke%20rumah%3F`;

  return (
    <section id="beranda" className="relative h-screen w-full bg-[#141d14] overflow-hidden">
      {/* Search keywords tag for SEO hidden/accessible */}
      <div className="sr-only">
        <h1>jasa taman, tukang taman, jasa landscape, pembuatan taman rumah</h1>
      </div>

      {/* Slide background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-[2000s] scale-105 select-none"
              style={{
                backgroundImage: `url('${currentSlide.imageUrl}')`,
              }}
            />
            {/* Uniform subtle darkening overlay to keep text readable without side shadow effects */}
            <div className="absolute inset-0 bg-black/35" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Structured Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center w-full">
          {/* LUKISAN / Left Column: Intentionally Blank for visual breathing room and slide scenery */}
          <div className="hidden lg:block h-full" />

          {/* SISI KANAN / Right Column: Left-aligned content starting precisely at middle of screen (50% mark) */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-full text-[#fcfbf7] pt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-xl flex flex-col items-center lg:items-start"
              >
                {/* Short Subtitle */}
                <span className="inline-block text-[#8fa086] font-mono text-xs font-semibold tracking-[0.25em] bg-[#1c2a1c]/80 backdrop-blur-sm border border-[#2d3e2d] px-3.5 py-1.5 rounded-full mb-5 shadow-sm text-center uppercase">
                  {currentSlide.subtitle}
                </span>

                {/* Medium modern Heading */}
                <h2 className="font-serif text-3xl sm:text-4.5xl font-semibold leading-tight text-[#fcfbf7] tracking-tight mb-4 drop-shadow-md">
                  {currentSlide.title}
                </h2>

                {/* Super brief description */}
                <p className="text-sm sm:text-base text-[#cbd3c6] font-normal leading-relaxed mb-8 max-w-lg">
                  {currentSlide.description}
                </p>

                {/* CTA Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                  <a
                    href="#layanan"
                    className="w-full sm:w-auto bg-[#8fa086] hover:bg-[#a3b59a] text-[#1c2a1c] font-bold text-center text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#101710]/40 flex items-center justify-center gap-2"
                  >
                    <span>Lihat Layanan</span>
                  </a>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/30 hover:border-white/60 text-white font-medium text-center text-sm px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Konsultasi Gratis</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrow Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/30 hover:bg-[#8fa086] text-white hover:text-[#1c2a1c] border border-white/10 hover:border-[#8fa086] hidden sm:flex items-center justify-center transition-all duration-300"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-black/30 hover:bg-[#8fa086] text-white hover:text-[#1c2a1c] border border-white/10 hover:border-[#8fa086] hidden sm:flex items-center justify-center transition-all duration-300"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots Indicator indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`h-2 transition-all duration-500 rounded-full ${
              index === currentIndex ? "w-8 bg-[#8fa086]" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scrolling Down Hint */}
      <div className="absolute bottom-4 right-8 z-30 hidden lg:flex items-center gap-2.5 text-xs tracking-wider uppercase text-white/40 font-mono">
        <span>Scroll Ke Bawah</span>
        <ArrowDown className="h-3 w-3 animate-bounce" />
      </div>
    </section>
  );
}
