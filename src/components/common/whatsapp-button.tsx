import WhatsappIcon from './whatsapp-icon';
import { whatsappUrl } from '@/lib/site';

// Tombol WhatsApp yang selalu terlihat di pojok kanan bawah
const WhatsappButton = () => {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pesan jumlah besar via WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] p-4 text-white shadow-xl shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 hover:bg-[#1EBE5B] md:px-5 md:py-3.5"
    >
      <WhatsappIcon className="size-6" />
      <span className="hidden font-bold md:inline">Pesan Jumlah Besar</span>
    </a>
  );
};

export default WhatsappButton;
