import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/lib/site';

// Tombol WhatsApp yang selalu terlihat di pojok kanan bawah
const WhatsappButton = () => {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pesan via WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full bg-emerald-500 p-4 text-white shadow-xl shadow-emerald-500/30 transition-all hover:-translate-y-0.5 hover:bg-emerald-400 md:px-5 md:py-3.5"
    >
      <MessageCircle className="size-6" />
      <span className="hidden font-bold md:inline">Pesan via WA</span>
    </a>
  );
};

export default WhatsappButton;
