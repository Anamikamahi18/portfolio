import { skills } from '../data/skills.js';

export default function Skills() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="skill-badge bg-card p-4 rounded-lg text-center border border-border hover:border-primary cursor-pointer"
              data-testid={`skill-${skill.name.toLowerCase().replace(/[.\s]/g, '-')}`}
            >
              <div className="text-3xl mb-2 text-primary" dangerouslySetInnerHTML={{ __html: skill.icon }} />
              <div className="font-semibold">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}