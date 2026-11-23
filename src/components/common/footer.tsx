import { instagramUrl, site, whatsappUrl } from '@/lib/site';
import InstagramIcon from './instagram-icon';
import WhatsappIcon from './whatsapp-icon';

const links = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Cerita', href: '#cerita' },
  { name: 'Keunggulan', href: '#keunggulan' },
  { name: 'Menu', href: '#menu' },
  { name: 'Galeri', href: '#galeri' },
  { name: 'Order', href: '#order' },
  { name: 'Lokasi', href: '#lokasi' },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <img
            src="/images/tahu-kocek-horizontal-terang.png"
            alt={site.name}
            className="w-40"
          />
          <p className="max-w-xs text-sm text-muted-foreground">
            {site.tagline}. Tahu kocek digoreng dadakan dengan sambal ulek
            segar.
          </p>
          <div className="flex gap-2">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram @${site.instagram}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-4 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              <InstagramIcon className="size-4" />@{site.instagram}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex size-9 items-center justify-center rounded-full bg-[#25D366] text-white transition-opacity hover:opacity-90"
            >
              <WhatsappIcon className="size-4" />
            </a>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-cobek/70 transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-cobek/70 transition-colors hover:text-primary"
          >
            WhatsApp (Jumlah Besar)
          </a>
        </nav>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. Semua hak dilindungi.
      </div>
    </footer>
  );
};

export default Footer;
