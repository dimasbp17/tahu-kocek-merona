"use client";

import { Dialog } from '@base-ui/react/dialog';
import { Flame, ArrowUpRight, ArrowDown, MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { deliveryApps, whatsappUrl } from '@/lib/site';

export interface MenuItem {
  src: string;
  name: string;
  level: number;
  description: string;
  heat: string;
  detail: string;
  cocokUntuk: string;
  tips: string;
}

const Flames = ({ level }: { level: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Flame
        key={i}
        className={cn(
          'size-4',
          i < level ? 'fill-primary text-primary' : 'text-border'
        )}
      />
    ))}
  </div>
);

const MenuCard = ({ item }: { item: MenuItem }) => {
  return (
    <Dialog.Root>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cobek/10">
        {/* gambar sudah memuat badge level, jadi ditampilkan utuh */}
        <img
          src={item.src}
          alt={item.name}
          className="aspect-square w-full object-contain"
        />

        <div className="flex flex-1 flex-col gap-3 p-6">
          <Flames level={item.level} />
          <h3 className="text-xl font-bold">
            {/* after: membentang ke seluruh kartu, jadi klik di mana saja membuka detail */}
            <Dialog.Trigger className="text-left outline-none after:absolute after:inset-0 after:rounded-3xl focus-visible:after:ring-3 focus-visible:after:ring-ring/50">
              {item.name}
            </Dialog.Trigger>
          </h3>
          <p className="flex-1 leading-relaxed text-muted-foreground">
            {item.description}
          </p>
          <span className="text-sm font-semibold text-primary">
            Lihat detail →
          </span>
          {/* pesanan satuan diarahkan ke aplikasi delivery di section order */}
          <a
            href="#order"
            className="relative z-10 mt-2 inline-flex items-center justify-between rounded-full bg-muted px-5 py-3 text-sm font-bold text-cobek transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
          >
            Pesan menu ini
            <ArrowDown className="size-4" />
          </a>
        </div>
      </article>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 min-h-dvh bg-black/50 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />
        <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 flex max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto rounded-3xl bg-card text-card-foreground shadow-2xl transition-[scale,opacity] duration-200 ease-out data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 md:flex-row">
          <div className="shrink-0 p-4 pb-0 md:w-1/2 md:p-6 md:pr-0">
            <img
              src={item.src}
              alt={item.name}
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-2">
                <Flames level={item.level} />
                <Dialog.Title className="text-2xl font-bold">
                  {item.name}
                </Dialog.Title>
                <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  {item.heat}
                </span>
              </div>
              <Dialog.Close
                aria-label="Tutup"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="size-5" />
              </Dialog.Close>
            </div>

            <Dialog.Description className="leading-relaxed text-muted-foreground">
              {item.detail}
            </Dialog.Description>

            <dl className="flex flex-col gap-3 text-sm">
              <div>
                <dt className="font-bold">Cocok untuk</dt>
                <dd className="text-muted-foreground">{item.cocokUntuk}</dd>
              </div>
              <div>
                <dt className="font-bold">Tips</dt>
                <dd className="text-muted-foreground">{item.tips}</dd>
              </div>
            </dl>

            <div className="mt-auto flex flex-col gap-3">
              <p className="text-sm font-bold">Pesan sekarang via</p>
              <div className="grid grid-cols-3 gap-2">
                {deliveryApps.map((app) => (
                  <a
                    key={app.id}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center justify-center gap-1 rounded-full px-3 py-2.5 text-xs font-bold text-white transition-opacity hover:opacity-90',
                      app.className
                    )}
                  >
                    {app.name}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ))}
              </div>
              <a
                href={whatsappUrl(
                  `Halo Tahu Kocek Merona, saya mau pesan ${item.name} dalam jumlah besar`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500 px-5 py-2.5 text-sm font-bold text-emerald-600 transition-colors hover:bg-emerald-500 hover:text-white"
              >
                <MessageCircle className="size-4" />
                Pesan jumlah besar via WA
              </a>
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MenuCard;
