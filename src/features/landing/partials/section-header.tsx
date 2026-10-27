import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({
  eyebrow,
  title,
  highlight,
  subtitle,
  className,
}: SectionHeaderProps) => {
  return (
    <header className={cn('mx-auto max-w-2xl space-y-4 text-center', className)}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold tracking-widest text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold text-cobek md:text-5xl">
        {title}{' '}
        {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground">{subtitle}</p>
      )}
    </header>
  );
};

export default SectionHeader;
