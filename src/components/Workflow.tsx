import { WORKFLOW_STEPS } from "../types";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Workflow() {
  return (
    <section id="cara-kerja" className="py-24 bg-[#141d14] text-[#fcfbf7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#8fa086] font-mono text-xs font-semibold tracking-widest uppercase bg-[#8fa086]/20 px-4 py-1.5 rounded-full">
            Cara Kerja (Workflow)
          </span>
          <h2 className="font-serif text-3.5xl sm:text-4xl font-semibold tracking-tight text-[#fcfbf7] mt-4 mb-5">
            5 Langkah Mudah Memiliki Taman Impian
          </h2>
          <p className="text-sm text-[#cbd3c6]">
            Kami merancang alur kerja yang sangat transparan dan bebas khawatir agar Anda tenang menanti hasil akhir pengerjaan taman.
          </p>
          <div className="h-1 w-20 bg-[#8fa086] mx-auto rounded-full mt-6" />
        </div>

        {/* Process Map Vertical/Horizontal layout */}
        <div className="relative mt-8">
          {/* Connecting Line on Desktop */}
          <div className="absolute top-[4.5rem] left-8 right-8 h-0.5 bg-gradient-to-r from-[#8fa086]/10 via-[#8fa086]/30 to-[#8fa086]/5 hidden lg:block -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {WORKFLOW_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="bg-[#1c2a1c] border border-[#2d3e2d] hover:border-[#8fa086]/30 p-6 rounded-2xl flex flex-col group transition-all duration-300 hover:translate-y-[-4px] shadow-sm hover:shadow-xl"
              >
                {/* Numeric Indicator */}
                <div className="flex items-center justify-between mb-5">
                  <div className="font-mono text-3xl font-extrabold text-[#8fa086]/30 group-hover:text-[#8fa086] transition-colors">
                    0{step.step}
                  </div>
                  <div className="bg-[#8fa086]/10 text-[#8fa086] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Tahap {step.step}
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#fcfbf7] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#cbd3c6] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Close */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#cbd3c6] mb-5">Langkah pertama bisa dimulai sekarang secara gratis!</p>
          <a
            href="https://wa.me/+6282312307261?text=Halo%20Trio%20Taman%20Sehati%2C%20saya%20ingin%20berkonsultasi%20mengenai%20langkah%20pertama%20(survey%20%26%20chat)."
            target="_blank"
            rel="noreferrer"
            className="bg-[#8fa086] hover:bg-[#a3b59a] text-[#1c2a1c] font-bold text-sm px-8 py-4 rounded-xl shadow-lg transition-all inline-flex items-center gap-2 group hover:scale-[1.02]"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Mulai Konsultasi (Langkah 1)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
