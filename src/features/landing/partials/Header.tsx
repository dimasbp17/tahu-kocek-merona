"use client";

import { motion } from 'motion/react';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';

const highlights = ['Digoreng dadakan', 'Sambal ulek segar', 'Level pedas 0–5'];

const Header = () => {
  return (
    <div className="relative overflow-hidden px-4 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* glow dekoratif */}
      <div className="pointer-events-none absolute -top-40 -right-32 size-[36rem] rounded-full bg-ember/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 size-[30rem] rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--color-cobek)_1px,transparent_1px)] [background-size:22px_22px] opacity-[0.06]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* text */}
        <motion.div
          className="flex flex-col items-start gap-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur">
            <Flame className="size-4" />
            Asli Gurih, Bikin Nagih
          </span>

          <h1 className="text-5xl leading-[1.05] font-extrabold text-cobek md:text-7xl">
            Pedasnya bikin pipi{' '}
            <span className="relative inline-block text-primary">
              merona
              <svg
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 h-3 w-full text-secondary"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 9 C 50 2, 150 2, 198 8"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
            Tahu garing diulek langsung bareng sambal bawang dan kol segar.
            Sekali coba, kamu pasti balik lagi.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#order"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40"
            >
              Pesan Sekarang
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full border border-cobek/15 bg-white px-7 py-3.5 font-bold text-cobek transition-colors hover:border-primary/40 hover:text-primary"
            >
              Lihat Menu
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-cobek/70"
              >
                <span className="size-1.5 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* image */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-secondary via-ember to-primary opacity-90 blur-[2px]" />
          <img
            src="/images/tahu-kocek-merona.png"
            alt="Seporsi Tahu Kocek Merona dalam box"
            className="relative w-full max-w-md animate-float object-contain drop-shadow-[0_30px_40px_rgba(80,30,10,0.35)] md:max-w-lg"
          />

          {/* kartu melayang */}
          <div className="absolute top-6 -left-2 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-xl backdrop-blur md:left-0">
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Flame className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="text-xs text-muted-foreground">Pilih level</p>
              <p className="font-heading font-bold">Pedas 0–5</p>
            </div>
          </div>
          <div className="absolute right-0 bottom-8 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-xl backdrop-blur">
            <span className="flex size-10 items-center justify-center rounded-xl bg-secondary/40 text-cobek">
              <Sparkles className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="text-xs text-muted-foreground">Selalu</p>
              <p className="font-heading font-bold">Fresh & Hangat</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
