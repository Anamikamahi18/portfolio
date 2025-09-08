export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A postgraduate with a strong mathematics background and certified full-stack web development skills who is seeking a role as 
a Python developer or software engineer. Proficient in building dynamic, responsive web applications using Python, Django, 
React.js, and MySQL. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
               A quick learner, passionate about clean, efficient coding, and solving complex problems. A collaborative 
team player dedicated to delivering reliable, scalable solutions and continuously learning new technologies.
              </p>
              <div className="pt-4">
                <a 
                  href="/assests/ANAMIKA-M-Resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/80 transition-colors inline-flex items-center gap-2"
                  data-testid="button-download-resume"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
  <img
    src="/assests/profile.png"
    alt="Anamika M"
    className="w-full h-full object-cover rounded-2xl"
  />
</div>
      
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}