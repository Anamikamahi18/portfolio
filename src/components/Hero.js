import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Aspiring Full Stack Web Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">Anamika M</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            <span className="typing-animation" data-testid="text-typing">
              {displayText}
            </span>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I build scalable, secure, and high-performance web applications from front-end interfaces to back-end systems. 
            Passionate about turning ideas into seamless digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToProjects}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              data-testid="button-view-work"
            >
              View My Work
            </button>
            <button 
              onClick={scrollToContact}
              className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
              data-testid="button-contact"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}