import { MapPin, Navigation, ExternalLink, Store } from 'lucide-react';
import Reveal from '@/components/common/reveal';
import SectionHeader from './section-header';
import {
  formatRupiah,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  site,
} from '@/lib/site';

const Lokasi = () => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow="Lokasi"
        title="Mampir Langsung,"
        highlight="Digoreng Dadakan"
        subtitle="Beli di tempat lebih hemat, tahunya masih panas dari wajan."
        className="mb-14"
      />

      <div className="grid gap-6 md:grid-cols-5">
        {/* peta */}
        <Reveal className="md:col-span-3">
          <div className="overflow-hidden rounded-3xl border border-border bg-muted shadow-xl shadow-cobek/5">
            <iframe
              src={mapsEmbedUrl}
              title={`Peta lokasi ${site.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full md:aspect-auto md:h-full md:min-h-[420px]"
            />
          </div>
        </Reveal>

        {/* info */}
        <Reveal
          delay={0.1}
          className="md:col-span-2"
        >
          <div className="flex h-full flex-col gap-6 rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="size-5" />
              </span>
              <div>
                <h3 className="font-bold">{site.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {site.location.address ||
                    'Klik tombol rute, Google Maps akan menunjukkan jalan dari posisimu.'}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Store className="size-5" />
              </span>
              <div>
                <h3 className="font-bold">Harga beli di tempat</h3>
                <p className="text-2xl font-extrabold text-primary">
                  {formatRupiah(site.priceOffline)}
                  <span className="text-sm font-semibold text-muted-foreground">
                    {' '}
                    / porsi
                  </span>
                </p>
                <p className="text-xs text-muted-foreground">
                  Semua level pedas, harga sama.
                </p>
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3">
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-primary-foreground shadow-md shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40"
              >
                <Navigation className="size-4" />
                Lihat Rute
              </a>
              <a
                href={site.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-bold text-cobek transition-colors hover:bg-muted"
              >
                <ExternalLink className="size-4" />
                Buka di Google Maps
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Lokasi;
