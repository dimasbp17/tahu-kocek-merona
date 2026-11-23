"use client";

import { Tabs } from '@base-ui/react/tabs';
import { Camera, ImageIcon, PlayCircle, Video } from 'lucide-react';
import Reveal from '@/components/common/reveal';
import SectionHeader from '@/features/landing/partials/section-header';
import { galleryPhotos, galleryVideos } from './data';

const tabClassName =
  'relative z-10 flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold text-cobek/70 outline-none transition-colors select-none hover:text-primary focus-visible:ring-3 focus-visible:ring-ring/50 data-active:text-primary-foreground';

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
    className={`flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-border bg-muted/50 text-muted-foreground ${className}`}
  >
    <Icon className="size-8" />
    <span className="text-xs font-semibold">{label}</span>
  </div>
);

const GallerySection = () => {
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
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="aspect-square w-full rounded-2xl object-cover"
                  />
                ) : (
                  <Placeholder
                    icon={ImageIcon}
                    label="Foto segera hadir"
                    className="aspect-square"
                  />
                )}
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
                {video.src ? (
                  <video
                    src={video.src}
                    poster={video.poster}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={video.title}
                    className="aspect-[9/16] w-full rounded-2xl bg-cobek object-cover"
                  />
                ) : (
                  <Placeholder
                    icon={PlayCircle}
                    label="Video segera hadir"
                    className="aspect-[9/16]"
                  />
                )}
              </Reveal>
            ))}
          </div>
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  );
};

export default GallerySection;
