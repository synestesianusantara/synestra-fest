import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Origins from '@/components/Origins';
import Programs from '@/components/Programs';
import Venue from '@/components/Venue';
import Sponsors from '@/components/Sponsors';
import Tickets from '@/components/Tickets';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Origins />
        <Programs />
        <Venue />
        <Sponsors />
        <Tickets />
        <Footer />
      </main>
    </>
  );
}
