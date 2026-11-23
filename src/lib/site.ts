// Data kontak & link pemesanan. Ganti nilai di sini, semua section ikut berubah.
// URL produksi untuk SEO (canonical, Open Graph, sitemap).
// Set NEXT_PUBLIC_SITE_URL kalau sudah punya domain sendiri; di Vercel
// otomatis memakai domain produksi proyek.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');

export const site = {
  name: 'Tahu Kocek Merona',
  tagline: 'Asli Gurih, Bikin Nagih',
  url: siteUrl,
  description:
    'Tahu kocek digoreng dadakan dengan sambal ulek segar. Pilih level pedasmu, beli langsung Rp10.000 atau pesan via GoFood, GrabFood, ShopeeFood, dan WhatsApp untuk jumlah besar.',
  // Nomor WA diawali kode negara 62, tanpa tanda + atau spasi.
  // WA khusus pesanan jumlah besar; pesanan satuan lewat aplikasi delivery.
  whatsapp: '6282146202762',
  // Username Instagram tanpa @.
  instagram: 'tahukocek_merona',
  whatsappMessage:
    'Halo Tahu Kocek Merona, saya mau pesan dalam jumlah besar',
  // Harga beli langsung di tempat (semua level sama).
  // Harga di aplikasi delivery bisa berbeda.
  priceOffline: 10000,
  location: {
    lat: -7.780698,
    lng: 110.299012,
    mapsUrl: 'https://maps.app.goo.gl/s5sFnYAfiA2Z4rBK7',
    // Isi alamat lengkap kalau mau ditampilkan di section Lokasi.
    address: '',
  },
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

export const instagramUrl = `https://www.instagram.com/${site.instagram}/`;

export const formatRupiah =(value: number) =>
  `Rp${value.toLocaleString('id-ID')}`;

const coords = `${site.location.lat},${site.location.lng}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${coords}&z=17&output=embed`;

// Membuka Google Maps dengan rute dari posisi pengguna ke lokasi.
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coords}`;

export const whatsappUrl =(message = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
