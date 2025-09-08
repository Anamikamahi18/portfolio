import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold gradient-text">AM</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link text-muted-foreground hover:text-foreground">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link text-muted-foreground hover:text-foreground">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link text-muted-foreground hover:text-foreground">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-muted-foreground hover:text-foreground">
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-muted-foreground hover:text-foreground">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-muted-foreground hover:text-foreground">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left text-muted-foreground hover:text-foreground">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-muted-foreground hover:text-foreground">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}