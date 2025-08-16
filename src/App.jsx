import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import CursorCircle from './components/CursorCircle';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import Services from './components/Services';
import Footer from './components/Footer';
import Contacts from './components/Contacts';


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToTopic = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <Navbar
        onHomeClick={() => scrollToTopic(homeRef)}
        onAboutClick={() => scrollToTopic(aboutRef)}
        onServiceClick={() => scrollToTopic(serviceRef)}
        onContactClick={() => scrollToTopic(contactRef)}
      />
      <div className="bg-[url('/BG/bgW-1.jpg')] bg-cover flex flex-col justify-center items-center pb-8 gap-8 md:gap-40">
        <section ref={homeRef}>
          <HeroSection />
        </section>

        <section ref={aboutRef} className='scroll-mt-22'>
          <IntroSection />
        </section>

        <section ref={serviceRef} className='scroll-mt-22'>
          <Services />
        </section>

        <section ref={contactRef}>
          <Contacts />
        </section>

        <Footer
          onHomeClick={() => scrollToTopic(homeRef)}
          onAboutClick={() => scrollToTopic(aboutRef)}
          onServiceClick={() => scrollToTopic(serviceRef)}
          onContactClick={() => scrollToTopic(contactRef)}
        />
      </div>
      <div className='hidden sm:block'>
        <CursorCircle />
      </div>
    </div>
  );
}

export default App
