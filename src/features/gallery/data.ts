// Data galeri kiriman pembeli. Isi `src` dengan path di /public/gallery/...
// Item tanpa `src` akan tampil sebagai kotak placeholder.

export interface GalleryPhoto {
  src?: string;
  alt: string;
  customer?: string;
}

export interface GalleryVideo {
  src?: string;
  poster?: string;
  title: string;
  customer?: string;
}

export const galleryPhotos: GalleryPhoto[] = Array.from({ length: 8 }, (_, i) => ({
  alt: `Foto pembeli ${i + 1}`,
}));

export const galleryVideos: GalleryVideo[] = Array.from({ length: 3 }, (_, i) => ({
  title: `Video pembeli ${i + 1}`,
}));
