import { ShoppingCart, Truck, Award } from 'lucide-react';
import Reveal from '@/components/common/reveal';
import SectionHeader from './section-header';

const features = [
  {
    icon: ShoppingCart,
    title: 'Pesan Super Mudah',
    description:
      'Lagi ngidam? Tinggal chat WA atau pesan via ojol, tahu kocek langsung diproses.',
  },
  {
    icon: Truck,
    title: 'Layanan Kilat',
    description:
      'Digoreng dadakan dan diantar cepat. Kami pastikan pesananmu sampai masih hangat.',
  },
  {
    icon: Award,
    title: 'Kualitas Bikin Nagih',
    description:
      'Perpaduan tahu pilihan dan racikan bumbu rahasia yang pedas gurihnya juara.',
  },
];

const Keunggulan = () => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow="Kenapa Merona"
        title="Alasan Kamu Bakal"
        highlight="Ketagihan"
        subtitle="Bukan janji, tapi bukti dari gigitan pertama."
        className="mb-14"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {features.map(({ icon: Icon, title, description }, index) => (
          <Reveal
            key={title}
            delay={index * 0.1}
          >
            <div className="group h-full rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
              <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-ember text-cobek shadow-md transition-transform group-hover:scale-110 group-hover:-rotate-6">
                <Icon className="size-7" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Keunggulan;
