import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnnblkgb"; // <-- replace with your Formspree endpoint

const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (response.ok) {
    alert("Message sent!");
    setFormData({ name: '', email: '', message: '' });
  } else {
    alert("There was an error. Please try again.");
  }
};

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-muted-foreground" data-testid="text-email">anamikamahi18@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-muted-foreground" data-testid="text-phone">+91 7510655959</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-muted-foreground" data-testid="text-location">Kerala, India</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-ring focus:border-transparent" 
                  placeholder="Your Name"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-ring focus:border-transparent" 
                  placeholder="your@email.com"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea 
                  rows={5} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-ring focus:border-transparent resize-none" 
                  placeholder="Tell me about your project..."
                  data-testid="input-message"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                data-testid="button-send-message"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}