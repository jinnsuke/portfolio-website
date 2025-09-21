const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Education
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Education Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-accent-primary/30"></div>

            {/* Current Education */}
            <div className="relative flex items-start space-x-8 mb-12">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-accent-primary rounded-full flex items-center justify-center border-4 border-background">
                  <span className="text-foreground font-bold text-sm">NOW</span>
                </div>
              </div>
              <div className="flex-1 bg-background-secondary p-8 rounded-xl border border-border hover:border-accent-primary/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Bachelor of Business Administration</h3>
                    <p className="text-accent-primary text-lg font-semibold mb-1">Business Analytics</p>
                    <p className="text-foreground-secondary mb-2">National University of Singapore</p>
                    <p className="text-foreground-secondary text-sm">Minors in Computer Science & Psychology</p>
                  </div>
                  <span className="text-accent-primary font-bold text-lg bg-accent-primary/10 px-3 py-1 rounded-full">2022 - 2025</span>
                </div>
              </div>
            </div>


            {/* Future Education */}
            <div className="relative flex items-start space-x-8">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-accent-secondary rounded-full flex items-center justify-center border-4 border-background">
                  <span className="text-foreground font-bold text-sm">2026</span>
                </div>
              </div>
              <div className="flex-1 bg-background-tertiary p-8 rounded-xl border border-accent-secondary/30 hover:border-accent-secondary/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Master of Science in Computer Science</h3>
                    <p className="text-accent-secondary text-lg font-semibold mb-1">Interactive Intelligence (AI)</p>
                    <p className="text-foreground-secondary mb-2">Georgia Institute of Technology</p>
                    <p className="text-foreground-secondary text-sm">Online Part-time Program</p>
                  </div>
                  <span className="text-accent-secondary font-bold text-lg bg-accent-secondary/10 px-3 py-1 rounded-full">2026 - 2029</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;