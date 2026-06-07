import { ARTICLES, CONTACT_INFO } from "../types";
import { BookOpen, ArrowUpRight, Clock, Calendar } from "lucide-react";

export default function Articles() {
  return (
    <section id="artikel" className="py-24 bg-[#faf9f3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#8fa086] font-mono text-xs font-semibold tracking-widest uppercase bg-[#8fa086]/10 px-4 py-1.5 rounded-full">
            Tips & Artikel
          </span>
          <h2 className="font-serif text-3.5xl sm:text-4xl font-semibold text-[#1c2a1c] tracking-tight mt-4 mb-5">
            Edukasi Hijau Untuk Pemilik Rumah
          </h2>
          <p className="text-sm text-[#5c6e5c]">
            Dapatkan wawasan seputar dunia botani, tata cara penanaman, pemupukan mandiri, serta memilih konsep desain arsitektur luar ruang yang ideal.
          </p>
          <div className="h-1 w-20 bg-[#8fa086] mx-auto rounded-full mt-6" />
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article) => {
            const waArticleLink = `https://wa.me/${CONTACT_INFO.whatsappFormatted}?text=Halo%20Trio%20Taman%20Sehati%2C%20saya%20sedang%20membaca%20artikel%20terkait%20*${encodeURIComponent(article.title)}*.%20Bisa%20berdiskusi%20mengenai%20layanan%20ini%2Frencana%20taman%3F`;

            return (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#eae7de] shadow-2xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Photo Top */}
                <div className="relative h-56 overflow-hidden bg-[#eae7de]">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    loading="lazy"
                  />
                  {/* Category overlay */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#1c2a1c] text-white text-[10px] font-mono font-bold uppercase px-3 py-1.5 rounded-lg border border-[#ffffff]/10">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Date and time metadata */}
                    <div className="flex items-center gap-4 text-[10px] text-[#8fa086] font-semibold uppercase tracking-wider mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#1c2a1c] mb-3 group-hover:text-[#8fa086] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5c6e5c] leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read action footer */}
                  <div className="pt-4 border-t border-[#faf9f3] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#cbd3c6]/90 uppercase">
                      Trio Taman Sehati
                    </span>
                    <a
                      href={waArticleLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-[#1c2a1c] hover:text-[#8fa086] flex items-center gap-1.5 group/link transition-colors"
                    >
                      <span>Konsultasikan Topik</span>
                      <ArrowUpRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
