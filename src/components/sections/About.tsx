import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Professional Photo - Centered at top */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <img
                src="/images/Picture.png"
                alt="Sugimoto Shoujin - Product Manager"
                className="w-48 h-48 object-cover rounded-2xl border border-border mx-auto"
              />
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-primary rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-accent-secondary rounded-full opacity-40"></div>
            </div>
          </div>

          {/* Content flowing downward */}
          <div className="space-y-12">
            {/* Brief introduction */}
            <div className="text-center">
              <p className="text-2xl text-foreground leading-relaxed">
                Product Manager bridging <span className="text-accent-primary font-semibold">AI</span>,
                <span className="text-accent-primary font-semibold"> data</span>, and
                <span className="text-accent-primary font-semibold"> business strategy</span>
              </p>
            </div>


            {/* Availability - Most Important */}
            <div className="border-2 border-accent-primary/30 bg-accent-primary/5 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Seeking Full-Time Opportunities</h3>
              <div className="space-y-3">
                <p className="text-foreground text-xl">
                  <span className="text-accent-primary font-semibold">Product Manager</span> •
                  <span className="text-accent-primary font-semibold"> Data Analyst</span> •
                  <span className="text-accent-primary font-semibold"> Business Analyst</span>
                </p>
                <p className="text-foreground-secondary text-lg">Available starting December 2025</p>
                <p className="text-foreground-secondary">Open to roles in Singapore, remote, or willing to relocate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;