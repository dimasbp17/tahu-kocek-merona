import { Store, MessageCircle, ArrowUpRight, ArrowRight } from 'lucide-react';
import Reveal from '@/components/common/reveal';
import { site, whatsappUrl } from '@/lib/site';

const deliveryApps = [
  {
    id: 'gofood',
    name: 'GoFood',
    desc: 'Pesan cepat via aplikasi Gojek',
    className: 'bg-[#EE2737]',
    url: site.deliveryApps.gofood,
  },
  {
    id: 'grabfood',
    name: 'GrabFood',
    desc: 'Nikmati promo di GrabFood',
    className: 'bg-[#00B14F]',
    url: site.deliveryApps.grabfood,
  },
  {
    id: 'shopeefood',
    name: 'ShopeeFood',
    desc: 'Klaim gratis ongkirmu di sini',
    className: 'bg-[#EE4D2D]',
    url: site.deliveryApps.shopeefood,
  },
];

const Order = () => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-cobek px-6 py-14 text-white md:px-14 md:py-20">
        {/* glow dekoratif */}
        <div className="pointer-events-none absolute -top-32 -right-20 size-96 rounded-full bg-primary/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full bg-ember/30 blur-3xl" />

        <div className="relative">
          <header className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold tracking-widest text-secondary uppercase">
              Pesan Sekarang
            </span>
            <h2 className="text-3xl font-extrabold md:text-5xl">
              Siap Menikmati <span className="text-secondary">Pedasnya?</span>
            </h2>
            <p className="text-lg text-white/70">
              Pilih platform favoritmu atau hubungi kami langsung untuk
              pemesanan dalam jumlah banyak.
            </p>
          </header>

          {/* Aplikasi delivery */}
          <div className="mb-6 grid gap-4 md:grid-cols-3">
            {deliveryApps.map((app, index) => (
              <Reveal
                key={app.id}
                delay={index * 0.1}
              >
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex h-full flex-col rounded-3xl p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${app.className}`}
                >
                  <div className="mb-8 flex items-start justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-white/20">
                      <Store className="size-6" />
                    </span>
                    <ArrowUpRight className="size-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3 className="mb-1 text-2xl font-bold">{app.name}</h3>
                  <p className="text-sm text-white/85">{app.desc}</p>
                </a>
              </Reveal>
            ))}
          </div>

          {/* WhatsApp */}
          <Reveal delay={0.2}>
            <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:flex-row md:p-8">
              <div className="flex w-full items-center gap-5 md:w-auto">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                  <MessageCircle className="size-7" />
                </span>
                <div>
                  <h3 className="text-xl font-bold">Pesan via WhatsApp</h3>
                  <p className="mt-1 text-sm text-white/70">
                    Cocok untuk pre-order, acara keluarga, atau jumlah besar.
                  </p>
                </div>
              </div>

              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 font-bold text-white transition-colors hover:bg-emerald-400 md:w-auto"
              >
                Chat Admin
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Order;
