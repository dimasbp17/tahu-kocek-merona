import { HandHeart, Leaf, Quote } from 'lucide-react';
import Reveal from '@/components/common/reveal';
import SectionHeader from './section-header';

const values = [
  {
    icon: Leaf,
    title: 'Bahan Segar Tiap Hari',
    description: 'Tahu, cabai, dan kol dibeli pagi, habis di hari yang sama.',
  },
  {
    icon: HandHeart,
    title: 'Diulek Pakai Tangan',
    description: 'Sambal diulek di cobek, bukan diblender, biar rasanya keluar.',
  },
];

const CeritaKami = () => {
  return (
    <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 md:grid-cols-2">
      {/* image */}
      <Reveal className="relative">
        <div className="absolute -inset-3 -rotate-3 rounded-[2.5rem] bg-gradient-to-br from-secondary via-ember to-primary opacity-80" />
        <img
          src="/images/tahu-kocek.jpg"
          alt="Tahu kocek diulek bersama sambal di atas cobek"
          className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl shadow-cobek/20"
        />

        {/* kartu kutipan */}
        <div className="absolute -right-2 -bottom-8 max-w-xs rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur md:-right-6">
          <Quote className="mb-2 size-6 text-primary" />
          <p className="font-heading leading-snug font-bold text-cobek">
            &ldquo;Sekali kocek, langsung ketagihan.&rdquo;
          </p>
        </div>
      </Reveal>

      {/* text */}
      <div className="space-y-8">
        <Reveal>
          <SectionHeader
            eyebrow="Cerita Kami"
            title="Jajanan Khas Jember,"
            highlight="Sentuhan Merona"
            className="mx-0 text-left"
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="space-y-4 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            Tahu kocek adalah jajanan kaki lima khas Jember. Namanya dari
            bahasa Madura, &ldquo;kocek&rdquo; artinya diulek atau diaduk,
            persis cara membuatnya: tahu isi aci digoreng garing, lalu dikocek
            di cobek bareng sambal bawang dan kol.
          </p>
          <p>
            Tahu Kocek Merona membawa rasa khas itu lebih dekat ke kamu. Bahan
            dipilih tiap hari, sambal tetap diulek tangan, dan level pedasnya
            bisa kamu atur sendiri.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, description }, index) => (
            <Reveal
              key={title}
              delay={0.2 + index * 0.1}
            >
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CeritaKami;
