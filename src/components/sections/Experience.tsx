'use client';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  achievements: string[];
  skills: string[];
  color: string;
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "Boston Scientific",
      role: "AI Product Manager Intern",
      period: "Jan - Apr 2025",
      type: "Internship",
      achievements: ["95% claim processing time reduction with OCR web app"],
      skills: [],
      color: "from-purple-500 to-purple-700"
    },
    {
      company: "NUS (School of Computing)",
      role: "Teaching Assistant",
      period: "Jan 2024 - Apr 2025",
      type: "Part-time",
      achievements: ["Mentored 100+ students in advanced Java & programming"],
      skills: [],
      color: "from-indigo-500 to-indigo-700"
    },
    {
      company: "E-Commerce Entrepreneur",
      role: "Solo Entrepreneur",
      period: "Jun - Sep 2024",
      type: "Self-employed",
      achievements: ["4-figure revenue in first week, $10K total in 3 months"],
      skills: [],
      color: "from-orange-500 to-orange-700"
    },
    {
      company: "SCB 10X",
      role: "AI Engineer Intern",
      period: "May - Aug 2024",
      type: "Internship",
      achievements: ["96.9% labor reduction with multi-agent AI pipeline"],
      skills: [],
      color: "from-blue-500 to-blue-700"
    },
    {
      company: "Wego.com",
      role: "Data Science Intern",
      period: "Jan - May 2024",
      type: "Internship",
      achievements: ["3% improvement over legacy ML search model"],
      skills: [],
      color: "from-green-500 to-green-700"
    },
    {
      company: "Wego.com",
      role: "Product Manager Intern",
      period: "Sep 2023 - Jan 2024",
      type: "Internship",
      achievements: ["Shipped time-filter feature end-to-end: 3% usage increase, 5% efficiency gain"],
      skills: [],
      color: "from-green-600 to-green-800"
    },
    {
      company: "AIMMS",
      role: "Data Analyst Intern",
      period: "Mar - Aug 2023",
      type: "Internship",
      achievements: ["Sales forecasting model with Python & Prophet"],
      skills: [],
      color: "from-teal-500 to-teal-700"
    },
    {
      company: "Analytix",
      role: "Data Research Analyst Intern",
      period: "Aug - Nov 2022",
      type: "Internship",
      achievements: ["End-to-end data workflows & Tableau dashboards"],
      skills: [],
      color: "from-cyan-500 to-cyan-700"
    },
    {
      company: "Emirates Group",
      role: "Business Analyst Intern",
      period: "Nov 2021 - Apr 2022",
      type: "Internship",
      achievements: ["Innovation analysis for senior leadership"],
      skills: [],
      color: "from-red-500 to-red-700"
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent-primary/30 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent-primary rounded-full transform -translate-x-2 md:-translate-x-2 z-10 border-4 border-background"></div>

                {/* Content card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="group bg-background-secondary hover:bg-background-tertiary transition-all duration-300 p-6 rounded-xl border border-border hover:border-accent-primary/50 hover:shadow-lg hover:shadow-accent-primary/10 transform hover:scale-105">
                    {/* Company header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                          <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                        </div>
                        <h4 className="text-lg font-semibold text-accent-primary">{exp.role}</h4>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground-secondary">{exp.period}</p>
                        <span className="inline-block px-2 py-1 text-xs font-medium text-accent-primary bg-accent-primary/10 rounded-full mt-1">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Key Achievement */}
                    <div className="text-sm text-foreground-secondary">
                      {exp.achievements[0]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Key Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-background-secondary rounded-xl border border-border">
              <div className="text-4xl font-bold text-accent-primary mb-2">9</div>
              <div className="text-foreground font-medium mb-2">Professional Roles</div>
              <div className="text-foreground-secondary text-sm">Across AI, Data, and Product domains</div>
            </div>
            <div className="p-6 bg-background-secondary rounded-xl border border-border">
              <div className="text-4xl font-bold text-accent-primary mb-2">3.5+</div>
              <div className="text-foreground font-medium mb-2">Years Experience</div>
              <div className="text-foreground-secondary text-sm">From Business Analysis to AI Product Management</div>
            </div>
            <div className="p-6 bg-background-secondary rounded-xl border border-border">
              <div className="text-4xl font-bold text-accent-primary mb-2">8</div>
              <div className="text-foreground font-medium mb-2">Industry Sectors</div>
              <div className="text-foreground-secondary text-sm">MedTech, Venture Capital, TravelTech, Logistics, Aviation, Consulting, Education, E-Commerce</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;