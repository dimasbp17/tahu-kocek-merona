"use client";

import { Dialog } from '@base-ui/react/dialog';
import { ChevronLeft, ChevronRight, ImageIcon, PlayCircle, X } from 'lucide-react';
import type { GalleryPhoto, GalleryVideo } from './data';

export type PreviewItem =
  | { type: 'foto'; item: GalleryPhoto }
  | { type: 'video'; item: GalleryVideo };

interface GalleryPreviewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  current: PreviewItem | null;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

const navButtonClassName =
  'absolute top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/25 disabled:opacity-0';

// Lightbox untuk melihat foto/video galeri dalam ukuran besar
const GalleryPreview = ({
  open,
  onOpenChange,
  current,
  index,
  total,
  onPrev,
  onNext,
}: GalleryPreviewProps) => {
  const caption =
    current?.type === 'foto' ? current.item.alt : current?.item.title;
  const customer = current?.item.customer;

  return (
    <Dialog.Root
      open={open}
      onOpenChange={onOpenChange}
    >
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 min-h-dvh bg-black/90 transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />
        <Dialog.Popup
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 p-4 outline-none transition-[scale,opacity] duration-200 ease-out data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 md:p-10"
        >
          {/* bar atas */}
          <div className="flex w-full max-w-5xl items-center justify-between text-white">
            <span className="text-sm font-semibold text-white/70">
              {index + 1} / {total}
            </span>
            <Dialog.Close
              aria-label="Tutup"
              className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/25"
            >
              <X className="size-5" />
            </Dialog.Close>
          </div>

          {/* media */}
          <div className="relative flex min-h-0 w-full max-w-5xl flex-1 items-center justify-center">
            <button
              type="button"
              aria-label="Sebelumnya"
              onClick={onPrev}
              disabled={total < 2}
              className={`${navButtonClassName} left-0 md:-left-4`}
            >
              <ChevronLeft className="size-6" />
            </button>

            {current?.type === 'foto' &&
              (current.item.src ? (
                <img
                  key={current.item.src}
                  src={current.item.src}
                  alt={current.item.alt}
                  className="max-h-full max-w-full rounded-2xl object-contain"
                />
              ) : (
                <div className="flex aspect-square h-full max-h-[70dvh] max-w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-white/20 text-white/50">
                  <ImageIcon className="size-12" />
                  <span className="text-sm font-semibold">Foto segera hadir</span>
                </div>
              ))}

            {current?.type === 'video' &&
              (current.item.src ? (
                <video
                  key={current.item.src}
                  src={current.item.src}
                  poster={current.item.poster}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-full max-w-full rounded-2xl bg-black"
                />
              ) : (
                <div className="flex aspect-[9/16] h-full max-h-[75dvh] max-w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-white/20 text-white/50">
                  <PlayCircle className="size-12" />
                  <span className="text-sm font-semibold">Video segera hadir</span>
                </div>
              ))}

            <button
              type="button"
              aria-label="Berikutnya"
              onClick={onNext}
              disabled={total < 2}
              className={`${navButtonClassName} right-0 md:-right-4`}
            >
              <ChevronRight className="size-6" />
            </button>
          </div>

          {/* keterangan */}
          <div className="text-center text-white">
            <Dialog.Title className="font-semibold">{caption}</Dialog.Title>
            {customer && (
              <p className="text-sm text-white/60">oleh {customer}</p>
            )}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default GalleryPreview;
