import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Story from '@/components/Story';
import About from '@/components/About';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SplineHero from '@/components/SplineHero';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <SplineHero />
        <Features />
        <Story />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
