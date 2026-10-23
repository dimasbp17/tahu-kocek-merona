import { site, whatsappUrl } from '@/lib/site';

const links = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Keunggulan', href: '#keunggulan' },
  { name: 'Menu', href: '#menu' },
  { name: 'Order', href: '#order' },
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
            WhatsApp
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
