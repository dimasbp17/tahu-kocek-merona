// Data kontak & link pemesanan. Ganti nilai di sini, semua section ikut berubah.
export const site = {
  name: 'Tahu Kocek Merona',
  tagline: 'Asli Gurih, Bikin Nagih',
  // Nomor WA diawali kode negara 62, tanpa tanda + atau spasi.
  // WA khusus pesanan jumlah besar; pesanan satuan lewat aplikasi delivery.
  whatsapp: '6281259394707',
  whatsappMessage:
    'Halo Tahu Kocek Merona, saya mau pesan dalam jumlah besar',
  deliveryApps: {
    gofood: '#',
    grabfood: '#',
    shopeefood: '#',
  },
};

export const deliveryApps = [
  {
    id: 'gofood',
    name: 'GoFood',
    className: 'bg-[#00880D]',
    url: site.deliveryApps.gofood,
  },
  {
    id: 'grabfood',
    name: 'GrabFood',
    className: 'bg-[#00B14F]',
    url: site.deliveryApps.grabfood,
  },
  {
    id: 'shopeefood',
    name: 'ShopeeFood',
    className: 'bg-[#EE4D2D]',
    url: site.deliveryApps.shopeefood,
  },
];

export const whatsappUrl = (message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
