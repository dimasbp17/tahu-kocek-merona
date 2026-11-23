import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import WhatsappButton from '@/components/common/whatsapp-button';
import Header from './partials/Header';
import Marquee from './partials/Marquee';
import CeritaKami from './partials/CeritaKami';
import Menus from './partials/Menus';
import Keunggulan from './partials/Keunggulan';
import Order from './partials/Order';
import Lokasi from './partials/Lokasi';
import GallerySection from '@/features/gallery';

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <main>
        <section id="beranda">
          <Header />
        </section>

        <Marquee />

        <section
          id="cerita"
          className="scroll-mt-24 py-24 md:py-32"
        >
          <CeritaKami />
        </section>

        <section
          id="keunggulan"
          className="scroll-mt-24 py-24 md:py-32"
        >
          <Keunggulan />
        </section>

        <section
          id="menu"
          className="scroll-mt-24 bg-muted/60 py-24 md:py-32"
        >
          <Menus />
        </section>

        <section
          id="galeri"
          className="scroll-mt-24 py-24 md:py-32"
        >
          <GallerySection />
        </section>

        <section
          id="order"
          className="scroll-mt-24 py-24 md:py-32"
        >
          <Order />
        </section>

        <section
          id="lokasi"
          className="scroll-mt-24 bg-muted/60 py-24 md:py-32"
        >
          <Lokasi />
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
};

export default LandingPage;
