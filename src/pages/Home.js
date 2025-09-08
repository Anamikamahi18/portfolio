import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import About from '../components/About.js';
import Skills from '../components/Skills.js';
import Projects from '../components/Projects.js';
import Contact from '../components/Contact.js';
import Footer from '../components/Footer.js';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}