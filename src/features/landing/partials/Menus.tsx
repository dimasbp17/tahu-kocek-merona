import Reveal from '@/components/common/reveal';
import SectionHeader from './section-header';
import MenuCard, { type MenuItem } from './menu-card';

const menuItems: MenuItem[] = [
  {
    src: '/images/level-1.jpg',
    name: 'Tahu Kocek Level 1',
    level: 1,
    description: 'Pedas tipis-tipis, pas buat pemanasan.',
    heat: 'Pedas ringan',
    detail:
      'Tahu kocek digoreng dadakan lalu diaduk dengan sambal ulek yang pedasnya masih kalem. Rasa gurih tahunya paling menonjol di level ini.',
    cocokUntuk: 'Pemula, anak-anak, atau kamu yang tidak terlalu kuat pedas.',
    tips: 'Cocok jadi pilihan pertama kalau baru pertama kali coba.',
  },
  {
    src: '/images/level-2.jpg',
    name: 'Tahu Kocek Level 2',
    level: 2,
    description: 'Mulai terasa hangat, gurihnya tetap juara.',
    heat: 'Pedas sedang',
    detail:
      'Sambalnya mulai terasa hangat di lidah tanpa menutupi gurihnya tahu. Seimbang antara pedas dan gurih.',
    cocokUntuk: 'Kamu yang suka sedikit pedas tapi tetap santai.',
    tips: 'Enak dinikmati selagi hangat, tepat setelah digoreng.',
  },
  {
    src: '/images/level-3.jpg',
    name: 'Tahu Kocek Level 3',
    level: 3,
    description: 'Pedas mantap buat kamu yang sudah terbiasa.',
    heat: 'Pedas mantap',
    detail:
      'Level favorit untuk yang sudah terbiasa pedas. Sambal ulek lebih terasa dan meninggalkan rasa hangat setelah suapan.',
    cocokUntuk: 'Pecinta pedas yang mencari rasa nendang tapi masih nyaman.',
    tips: 'Siapkan minuman dingin di dekatmu.',
  },
  {
    src: '/images/level-4.jpg',
    name: 'Tahu Kocek Level 4',
    level: 4,
    description: 'Siapkan minum, pedasnya mulai menantang.',
    heat: 'Pedas banget',
    detail:
      'Pedasnya mulai menantang dan bikin berkeringat. Gurih tahu tetap terasa di balik sambal yang lebih berani.',
    cocokUntuk: 'Kamu yang sudah kuat pedas dan ingin naik level.',
    tips: 'Lebih aman dimakan setelah makan nasi atau camilan lain.',
  },
  {
    src: '/images/level-5.jpg',
    name: 'Tahu Kocek Level 5',
    level: 5,
    description: 'Versi pedas maksimal buat kamu yang suka tantangan.',
    heat: 'Pedas maksimal',
    detail:
      'Level tertinggi Tahu Kocek Merona. Sambal ulek paling pedas yang kami punya, khusus untuk penantang sejati.',
    cocokUntuk: 'Penggemar pedas ekstrem yang suka tantangan.',
    tips: 'Jangan dimakan saat perut kosong, dan siapkan minum yang banyak.',
  },
];

const Menus = () => {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <SectionHeader
        eyebrow="Menu Kami"
        title="Pilih Level"
        highlight="Pedasmu"
        subtitle="Dari yang aman sampai yang bikin keringetan. Semua digoreng dadakan."
        className="mb-14"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item, index) => (
          <Reveal
            key={item.name}
            delay={(index % 3) * 0.1}
          >
            <MenuCard item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Menus;
