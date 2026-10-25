import { Flame, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/common/reveal';
import { cn } from '@/lib/utils';
import { whatsappUrl } from '@/lib/site';
import SectionHeader from './section-header';

const menuItems = [
  {
    src: '/images/level-1.jpg',
    name: 'Tahu Kocek Level 1',
    level: 1,
    description: 'Pedas tipis-tipis, pas buat pemanasan.',
  },
  {
    src: '/images/level-2.jpg',
    name: 'Tahu Kocek Level 2',
    level: 2,
    description: 'Mulai terasa hangat, gurihnya tetap juara.',
  },
  {
    src: '/images/level-3.jpg',
    name: 'Tahu Kocek Level 3',
    level: 3,
    description: 'Pedas mantap buat kamu yang sudah terbiasa.',
  },
  {
    src: '/images/level-4.jpg',
    name: 'Tahu Kocek Level 4',
    level: 4,
    description: 'Siapkan minum, pedasnya mulai menantang.',
  },
  {
    src: '/images/level-5.jpg',
    name: 'Tahu Kocek Level 5',
    level: 5,
    description: 'Versi pedas maksimal buat kamu yang suka tantangan.',
  },
];

const Menus = () => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow="Menu Kami"
        title="Pilih Level"
        highlight="Pedasmu"
        subtitle="Dari yang aman sampai yang bikin keringetan. Semua digoreng dadakan."
        className="mb-14"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item, index) => (
          <Reveal
            key={item.name}
            delay={(index % 3) * 0.1}
          >
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cobek/10">
              {/* gambar sudah memuat badge level, jadi ditampilkan utuh */}
              <img
                src={item.src}
                alt={item.name}
                className="aspect-square w-full object-contain"
              />

              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Flame
                      key={i}
                      className={cn(
                        'size-4',
                        i < item.level
                          ? 'fill-primary text-primary'
                          : 'text-border'
                      )}
                    />
                  ))}
                </div>
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="flex-1 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <a
                  href={whatsappUrl(`Halo, saya mau pesan ${item.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-between rounded-full bg-muted px-5 py-3 text-sm font-bold text-cobek transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  Pesan menu ini
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Menus;
