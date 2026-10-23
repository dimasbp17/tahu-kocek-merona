// Data kontak & link pemesanan. Ganti nilai di sini, semua section ikut berubah.
export const site = {
  name: 'Tahu Kocek Merona',
  tagline: 'Asli Gurih, Bikin Nagih',
  // Nomor WA diawali kode negara 62, tanpa tanda + atau spasi
  whatsapp: '6281259394707',
  whatsappMessage: 'Halo Tahu Kocek Merona, saya mau pesan',
  deliveryApps: {
    gofood: '#',
    grabfood: '#',
    shopeefood: '#',
  },
};

export const whatsappUrl = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
