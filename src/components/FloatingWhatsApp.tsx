import { MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "../types";

export default function FloatingWhatsApp() {
  const waLink = `https://wa.me/${CONTACT_INFO.whatsappFormatted}?text=Halo%20Trio%20Taman%20Sehati%2C%20saya%20butuh%20cepat%20jasa%20desain%20%2F%20survey%20taman%20rumah.%20Mohon%20info%20jadwal%20kosong%20survey%3F`;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      {/* Primary Pulse Button Trigger */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="relative bg-emerald-500 hover:bg-emerald-600 text-[#fcfbf7] p-4.5 rounded-full shadow-2.5xl flex items-center justify-center transition-all duration-300 hover:scale-108 group focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        aria-label="Chat WhatsApp Trio Taman Sehati"
        title="Hubungi Trio Taman Sehati via WhatsApp"
      >
        {/* Simple elegant pulse waves */}
        <span className="absolute inset-x-0 inset-y-0 rounded-full bg-emerald-500/40 animate-ping opacity-75 -z-10 group-hover:duration-500" />
        <span className="absolute -inset-1 rounded-full border border-emerald-500/40 animate-pulse -z-10" />

        <MessageCircle className="h-7 w-7 fill-current text-white" />
      </a>
    </div>
  );
}

