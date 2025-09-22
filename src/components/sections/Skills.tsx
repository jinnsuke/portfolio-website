'use client';

import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Data & AI",
      skills: [
        { name: "Python", projects: "ML & AI pipelines" },
        { name: "SQL", projects: "Data analysis" },
        { name: "R", projects: "Statistical modeling" },
        { name: "Tableau", projects: "Data visualization" },
        { name: "Scikit-Learn", projects: "ML development" },
        { name: "TensorFlow", projects: "Deep learning" },
        { name: "PyTorch", projects: "Neural networks" },
        { name: "LangChain", projects: "AI chatbots" },
        { name: "Pandas", projects: "Data processing" },
        { name: "NumPy", projects: "Numerical analysis" }
      ]
    },
    {
      title: "Product Management",
      skills: [
        { name: "Jira", projects: "Agile management" },
        { name: "Figma", projects: "UI/UX design" },
        { name: "Confluence", projects: "Documentation" },
        { name: "Amplitude", projects: "Product analytics" },
        { name: "A/B Testing", projects: "Feature testing" },
        { name: "User Interviews", projects: "User research" },
        { name: "Scrum", projects: "Team leadership" },
        { name: "Product Strategy", projects: "Roadmap planning" },
        { name: "Data Analysis", projects: "User insights" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", projects: "Frontend styling" },
        { name: "JavaScript", projects: "Interactive apps" },
        { name: "React", projects: "Component UIs" },
        { name: "Next.js", projects: "Full-stack apps" },
        { name: "Tailwind CSS", projects: "Responsive design" },
        { name: "Node.js", projects: "Backend APIs" },
        { name: "TypeScript", projects: "Type safety" },
        { name: "Git", projects: "Version control" }
      ]
    },
    {
      title: "Languages",
      skills: [
        { name: "English" },
        { name: "Japanese" },
        { name: "Chinese" }
      ]
    }
  ];


  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto mb-6"></div>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto">
            A unique blend of technical expertise and business acumen,
            bridging the gap between data science and product management.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-8">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="relative group"
                    onMouseEnter={() => 'projects' in skill && setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className={`px-6 py-3 rounded-full border transition-all duration-300 w-48 text-center ${
                      'projects' in skill ? 'cursor-pointer' : ''
                    } ${
                      hoveredSkill === `${categoryIndex}-${skillIndex}` && 'projects' in skill
                        ? 'bg-accent-primary border-accent-primary text-white'
                        : 'bg-background-secondary border-border text-foreground hover:border-accent-primary hover:bg-accent-primary/10'
                    }`}>
                      <span className="font-medium text-sm leading-tight capitalize">
                        {hoveredSkill === `${categoryIndex}-${skillIndex}` && 'projects' in skill ? skill.projects : skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;