"use client";

import { useState } from 'react';
import { Tabs } from '@base-ui/react/tabs';
import { Camera, ImageIcon, Play, PlayCircle, Video } from 'lucide-react';
import Reveal from '@/components/common/reveal';
import SectionHeader from '@/features/landing/partials/section-header';
import { galleryPhotos, galleryVideos } from './data';
import GalleryPreview, { type PreviewItem } from './gallery-preview';

type GalleryTab = 'foto' | 'video';

const tabClassName =
  'relative z-10 flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold text-cobek/70 outline-none transition-colors select-none hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50 data-active:text-primary-foreground';

const thumbClassName =
  'group relative block w-full overflow-hidden rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50';

const Placeholder = ({
  icon: Icon,
  label,
  className,
}: {
  icon: typeof ImageIcon;
  label: string;
  className: string;
}) => (
  <div
    className={`flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-muted/50 text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary ${className}`}
  >
    <Icon className="size-8" />
    <span className="text-xs font-semibold">{label}</span>
  </div>
);

const GallerySection = () => {
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<{ tab: GalleryTab; index: number }>({
    tab: 'foto',
    index: 0,
  });

  const items = preview.tab === 'foto' ? galleryPhotos : galleryVideos;
  const current: PreviewItem | null =
    preview.tab === 'foto'
      ? { type: 'foto', item: galleryPhotos[preview.index] }
      : { type: 'video', item: galleryVideos[preview.index] };

  const openPreview = (tab: GalleryTab, index: number) => {
    setPreview({ tab, index });
    setOpen(true);
  };

  // geser ke item sebelumnya/berikutnya, berputar di ujung
  const step = (delta: number) =>
    setPreview((p) => ({
      ...p,
      index: (p.index + delta + items.length) % items.length,
    }));

  return (
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow="Galeri Pembeli"
        title="Kata Mereka yang"
        highlight="Sudah Nyobain"
        subtitle="Momen seru pembeli bareng Tahu Kocek Merona."
        className="mb-10"
      />

      <Tabs.Root defaultValue="foto">
        <Tabs.List className="relative mx-auto mb-10 flex w-fit gap-1 rounded-full border border-border bg-card p-1">
          <Tabs.Tab
            value="foto"
            className={tabClassName}
          >
            <Camera className="size-4" />
            Foto
          </Tabs.Tab>
          <Tabs.Tab
            value="video"
            className={tabClassName}
          >
            <Video className="size-4" />
            Video
          </Tabs.Tab>
          <Tabs.Indicator className="absolute top-1 left-0 h-[calc(100%-0.5rem)] w-(--active-tab-width) translate-x-(--active-tab-left) rounded-full bg-primary shadow-md shadow-primary/30 transition-[translate,width] duration-200 ease-out" />
        </Tabs.List>

        {/* Tab foto */}
        <Tabs.Panel
          value="foto"
          className="outline-none"
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryPhotos.map((photo, index) => (
              <Reveal
                key={index}
                delay={(index % 4) * 0.05}
              >
                <button
                  type="button"
                  aria-label={`Lihat ${photo.alt}`}
                  onClick={() => openPreview('foto', index)}
                  className={thumbClassName}
                >
                  {photo.src ? (
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <Placeholder
                      icon={ImageIcon}
                      label="Foto segera hadir"
                      className="aspect-square"
                    />
                  )}
                </button>
              </Reveal>
            ))}
          </div>
        </Tabs.Panel>

        {/* Tab video */}
        <Tabs.Panel
          value="video"
          className="outline-none"
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryVideos.map((video, index) => (
              <Reveal
                key={index}
                delay={(index % 3) * 0.05}
              >
                <button
                  type="button"
                  aria-label={`Putar ${video.title}`}
                  onClick={() => openPreview('video', index)}
                  className={thumbClassName}
                >
                  {video.src ? (
                    <>
                      {/* thumbnail: frame pertama atau poster, diputar di preview */}
                      <video
                        src={video.src}
                        poster={video.poster}
                        muted
                        playsInline
                        preload="metadata"
                        className="aspect-[9/16] w-full bg-cobek object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                        <span className="flex size-14 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg">
                          <Play className="ml-0.5 size-6 fill-current" />
                        </span>
                      </span>
                    </>
                  ) : (
                    <Placeholder
                      icon={PlayCircle}
                      label="Video segera hadir"
                      className="aspect-[9/16]"
                    />
                  )}
                </button>
              </Reveal>
            ))}
          </div>
        </Tabs.Panel>
      </Tabs.Root>

      <GalleryPreview
        open={open}
        onOpenChange={setOpen}
        current={current}
        index={preview.index}
        total={items.length}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
      />
    </div>
  );
};

export default GallerySection;
