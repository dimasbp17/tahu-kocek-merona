import { Flame } from 'lucide-react';

const words = [
  'Gurih',
  'Pedas',
  'Bikin Nagih',
  'Digoreng Dadakan',
  'Sambal Ulek Segar',
  'Kol Renyah',
];

const Marquee = () => {
  // Diduplikasi supaya animasi bisa looping tanpa jeda
  const items = [...words, ...words];

  return (
    <div className="-rotate-1 overflow-hidden bg-primary py-4 text-primary-foreground shadow-lg">
      <div className="flex w-max animate-marquee items-center gap-8 motion-reduce:animate-none">
        {items.map((word, index) => (
          <span
            key={index}
            className="flex items-center gap-8 font-heading text-xl font-bold tracking-wide whitespace-nowrap uppercase md:text-2xl"
          >
            {word}
            <Flame className="size-5 fill-secondary text-secondary" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
