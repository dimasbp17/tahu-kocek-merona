import Navbar from '@/components/common/navbar';
import Footer from '@/components/common/footer';
import WhatsappButton from '@/components/common/whatsapp-button';
import Header from './partials/Header';
import Marquee from './partials/Marquee';
import Menus from './partials/Menus';
import Keunggulan from './partials/Keunggulan';
import Order from './partials/Order';

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
          id="order"
          className="scroll-mt-24 py-24 md:py-32"
        >
          <Order />
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
};

export default LandingPage;
