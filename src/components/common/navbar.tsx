"use client";

import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

// Ubah path menjadi id yang sesuai dengan ID section di halaman Anda
const menuItems = [
  { name: 'Beranda', id: 'beranda' },
  { name: 'Keunggulan', id: 'keunggulan' },
  { name: 'Menu', id: 'menu' },
  { name: 'Order', id: 'order' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      // Deteksi section yang sedang aktif
      const scrollPosition = window.scrollY + 120; // offset tinggi navbar

      let current = 'beranda';
      menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPosition) {
          current = item.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi untuk scroll mulus saat menu diklik
  const handleSmoothScroll = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 md:px-6',
          scrolled || open
            ? 'border border-border/70 bg-white/85 shadow-lg shadow-cobek/5 backdrop-blur-md'
            : 'border border-transparent bg-transparent'
        )}
      >
        {/* Logo - Klik logo akan scroll ke atas */}
        <a
          href="#beranda"
          className="flex items-center"
          onClick={(e) => handleSmoothScroll(e, 'beranda')}
        >
          <img
            src="/images/tahu-kocek-horizontal-terang.png"
            alt="Tahu Kocek Merona"
            className="w-32 md:w-36"
          />
        </a>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleSmoothScroll(e, item.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-colors',
                activeSection === item.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-cobek/70 hover:text-primary'
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <a
          href="#order"
          onClick={(e) => handleSmoothScroll(e, 'order')}
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 md:inline-flex"
        >
          Pesan Sekarang
        </a>

        {/* Toggle menu mobile */}
        <button
          type="button"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full text-cobek md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-3xl border border-border/70 bg-white/95 p-3 shadow-lg backdrop-blur-md md:hidden">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleSmoothScroll(e, item.id)}
              className={cn(
                'rounded-2xl px-4 py-3 font-semibold',
                activeSection === item.id
                  ? 'bg-primary/10 text-primary'
                  : 'text-cobek/80'
              )}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#order"
            onClick={(e) => handleSmoothScroll(e, 'order')}
            className="mt-1 rounded-2xl bg-primary px-4 py-3 text-center font-bold text-primary-foreground"
          >
            Pesan Sekarang
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
