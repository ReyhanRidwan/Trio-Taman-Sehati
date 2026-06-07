import { HeartIcon, DollarSign, Award, Clock } from "lucide-react";

export default function WhyUs() {
  const usps = [
    {
      title: "Konsultasi & Survey Gratis",
      description: "Kami mendatangi pekarangan Anda secara penuh untuk melakukan survey tanah, ukur luasan, dan analisis cahaya matahari gratis tanpa biaya tambahan.",
      icon: HeartIcon,
      color: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      title: "Desain Sesuai Budget",
      description: "Anda menentukan anggaran biaya, dan perancang landscape kami akan mendesain rencana vegetasi yang paling optimal, indah, dan hemat.",
      icon: DollarSign,
      color: "bg-amber-50 text-amber-700 border-amber-100",
    },
    {
      title: "Tim Profesional & Berpengalaman",
      description: "Tukang taman senior kami memiliki jam terbang tinggi di bidang arsitektur landscape taman sekala residensial hingga komersial.",
      icon: Award,
      color: "bg-blue-50 text-blue-700 border-blue-100",
    },
    {
      title: "Pengerjaan Rapi & Tepat Waktu",
      description: "Manajemen pengerjaan terjadwal ketat untuk memastikan taman Anda selesai indah sesuai deadline tanpa berlarut-larut.",
      icon: Clock,
      color: "bg-rose-50 text-rose-700 border-rose-100",
    },
  ];

  return (
    <section id="keunggulan" className="py-24 bg-[#141d14] text-[#fcfbf7] relative overflow-hidden">
      {/* Search keyword injection */}
      <span className="sr-only">jasa landscape, tukang taman profesional</span>

      {/* Ambient backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#8fa086]/10 rounded-full blur-3xl -translate-y-1/2 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Info Left */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <span className="text-[#8fa086] font-mono text-xs font-semibold tracking-widest uppercase bg-[#8fa086]/20 px-4 py-1.5 rounded-full inline-block self-center lg:self-start">
              Keunggulan Kami
            </span>
            <h2 className="font-serif text-3.5xl sm:text-4xl font-bold tracking-tight text-[#fcfbf7] mt-4 mb-6">
              Mengapa Klien Memercayakan Taman Mereka Pada Kami?
            </h2>
            <p className="text-sm sm:text-base text-[#cbd3c6] leading-relaxed mb-8">
              Trio Taman Sehati berkomitmen memberikan hasil akhir yang indah, sehat, dan menyejukkan hati. Kami mengutamakan kepuasan klien dan kualitas vegetasi di atas segalanya.
            </p>
            <div className="h-0.5 bg-[#2d3e2d] w-1/3 mx-auto lg:mx-0" />
            
            {/* Short review helper */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full border-2 border-[#1c2a1c] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="avatar" />
                <img className="inline-block h-8 w-8 rounded-full border-2 border-[#1c2a1c] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="avatar" />
                <img className="inline-block h-8 w-8 rounded-full border-2 border-[#1c2a1c] object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop" alt="avatar" />
              </div>
              <p className="text-xs text-[#cbd3c6] font-medium">Over 500+ projects completed successfully.</p>
            </div>
          </div>

          {/* Grid USPs Right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {usps.map((usp, idx) => {
              const Icon = usp.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#1c2a1c] border border-[#2d3e2d] hover:border-[#8fa086]/40 p-6 rounded-2xl flex flex-col shadow-xs hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="bg-[#8fa086]/10 w-12 h-12 rounded-xl flex items-center justify-center text-[#8fa086] mb-5 group-hover:bg-[#8fa086] group-hover:text-[#1c2a1c] transition-all duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#fcfbf7] mb-2">
                    {usp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#cbd3c6] leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
