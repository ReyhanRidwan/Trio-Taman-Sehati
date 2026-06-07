import { useEffect, useState, useRef } from "react";
import { CheckCircle2, Trees, ShieldCheck, UserCheck } from "lucide-react";

function AnimatedCounter({ target, duration = 2000, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const points = [
    "Solusi Landscape Lengkap: Layanan terintegrasi dari tahap konsultasi, konsep visual, pembuatan fisik, hingga pemeliharaan berkala.",
    "Bisa Custom Sesuai Budget: Fleksibilitas perancangan desain taman dengan merujuk pada ketersediaan dana klien tanpa mengurangi estetika.",
    "Pengerjaan Profesional: Setiap pilar tanaman diposisikan kokoh secara estetis oleh tim tukang taman berdedikasi tinggi.",
    "Garansi Kepuasan Tumbuh: Kami memberikan jaminan perbaikan dan panduan adaptasi tanaman setelah penyelesaian pengerjaan."
  ];

  return (
    <section id="tentang" className="py-24 bg-[#faf9f3] relative overflow-hidden">
      {/* Decorative leafy vector element background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8fa086]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#556b2f]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#8fa086] font-mono text-xs font-semibold tracking-widest uppercase bg-[#8fa086]/10 px-4 py-1.5 rounded-full">
            Tentang Kami
          </span>
          <h2 className="font-serif text-3.5xl sm:text-4xl font-semibold text-[#1c2a1c] tracking-tight mt-4 mb-5">
            Menciptakan Harmoni Alam di Pekarangan Hunian Anda
          </h2>
          <div className="h-1 w-20 bg-[#8fa086] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column Left: Visual Image Frame */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#8fa086] to-[#55674c] rounded-2xl opacity-10 blur group-hover:opacity-20 transition duration-1000" />
            <div className="relative bg-[#eae7de] p-3 rounded-2xl shadow-xl border border-[#cbd3c6]/40 overflow-hidden">
              <img
                src="https://res.cloudinary.com/di6ziqvtp/image/upload/q_auto/f_auto/v1775644289/gambarproyek2_chtuzp.jpg"
                alt="Tentang Trio Taman Sehati"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-[400px] object-cover rounded-xl transition duration-700 group-hover:scale-102"
              />
              <div className="absolute bottom-6 right-6 bg-[#1c2a1c] px-6 py-4 rounded-xl shadow-lg border border-[#2d3e2d] text-center">
                <span className="block font-serif text-3xl font-bold text-[#8fa086]">
                  <AnimatedCounter target={12} suffix="+" />
                </span>
                <span className="text-xs uppercase tracking-wider text-[#cbd3c6] font-medium">
                  Tahun Pengalaman
                </span>
              </div>
            </div>
          </div>

          {/* Column Right: Details Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="font-serif text-2xl font-semibold text-[#1c2a1c] mb-4">
              Trio Taman Sehati
            </h3>
            <p className="text-base text-[#4a5a4a] leading-relaxed mb-6">
              Kami adalah penyedia layanan landscape taman profesional yang mendedikasikan keahlian kami untuk mengubah lahan biasa menjadi mahakarya hijau yang asri dan menyejukkan. Mulai dari konsep awal <strong>jasa desain taman</strong>, eksekusi fisik <strong>pembuatan taman</strong>, hingga program <strong>perawatan (maintenance) taman</strong> berkala, kami menjamin kepuasan yang sejalan dengan estetika arsitektur bangunan Anda.
            </p>
            <p className="text-[#4a5a4a] leading-relaxed mb-8">
              Kami percaya bahwa sebuah taman bukan sekadar kumpulan tanaman hias, melainkan terapi psikis alami, penyedia udara sehat, dan sarana rekreasi keluarga yang eksklusif di rumah Anda.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 mb-10">
              {points.map((p, idx) => {
                const [title, desc] = p.split(": ");
                return (
                  <div key={idx} className="flex gap-3 bg-white p-4.5 rounded-xl border border-[#eae7de] shadow-2xs hover:shadow-xs transition duration-300">
                    <CheckCircle2 className="h-5 w-5 text-[#8fa086] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm text-[#1c2a1c] mb-1">{title}</h4>
                      <p className="text-xs text-[#5c6e5c] leading-relaxed">{desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Counters & Statistics section */}
        <div className="mt-20 border-t border-[#eae7de]/80 pt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center">
            <div className="p-4">
              <div className="mx-auto w-12 h-12 bg-[#8fa086]/10 rounded-full flex items-center justify-center text-[#8fa086] mb-3">
                <Trees className="h-6 w-6" />
              </div>
              <p className="font-serif text-3.5xl sm:text-4xl font-bold text-[#1c2a1c] tracking-tight">
                <AnimatedCounter target={540} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm text-[#5c6e5c] uppercase font-semibold tracking-wider mt-1.5">
                Proyek Selesai
              </p>
            </div>

            <div className="p-4">
              <div className="mx-auto w-12 h-12 bg-[#8fa086]/10 rounded-full flex items-center justify-center text-[#8fa086] mb-3">
                <UserCheck className="h-6 w-6" />
              </div>
              <p className="font-serif text-3.5xl sm:text-4xl font-bold text-[#1c2a1c] tracking-tight">
                <AnimatedCounter target={485} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm text-[#5c6e5c] uppercase font-semibold tracking-wider mt-1.5">
                Klien Puas
              </p>
            </div>

            <div className="p-4">
              <div className="mx-auto w-12 h-12 bg-[#8fa086]/10 rounded-full flex items-center justify-center text-[#8fa086] mb-3">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="font-serif text-3.5xl sm:text-4xl font-bold text-[#1c2a1c] tracking-tight">
                <AnimatedCounter target={100} suffix="%" />
              </p>
              <p className="text-xs sm:text-sm text-[#5c6e5c] uppercase font-semibold tracking-wider mt-1.5">
                Garansi Tumbuh
              </p>
            </div>

            <div className="p-4">
              <div className="mx-auto w-12 h-12 bg-[#8fa086]/10 rounded-full flex items-center justify-center text-[#8fa086] mb-3">
                <Trees className="h-6 w-6" />
              </div>
              <p className="font-serif text-3.5xl sm:text-4xl font-bold text-[#1c2a1c] tracking-tight">
                <AnimatedCounter target={150} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm text-[#5c6e5c] uppercase font-semibold tracking-wider mt-1.5">
                Spesies Tanaman
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
