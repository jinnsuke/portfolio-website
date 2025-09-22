'use client';

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto"></div>
        </div>

        {/* Coming Soon Design */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-background-secondary rounded-xl p-12 border border-border">
            <div className="mb-8">
              <span className="text-6xl mb-6 block">🚀</span>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Exciting Projects Coming Soon
              </h3>
              <p className="text-xl text-foreground-secondary max-w-2xl mx-auto mb-8">
                Detailed case studies and project showcases are currently in development.
                Check back soon for comprehensive project portfolios.
              </p>
            </div>

            <div className="inline-flex items-center bg-accent-primary/10 text-accent-primary px-6 py-3 rounded-full">
              <div className="w-2 h-2 bg-accent-primary rounded-full mr-3 animate-pulse"></div>
              <span className="font-semibold">Updates expected Q4 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;