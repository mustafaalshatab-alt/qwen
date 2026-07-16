import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import MenuPreview from '@/components/sections/MenuPreview';
import About from '@/components/sections/About';
import Gallery from '@/components/sections/Gallery';
import Reviews from '@/components/sections/Reviews';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <MenuPreview />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
