'use client';

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // TODO: Implement resume download functionality
    console.log('Resume download clicked');
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container text-center">
        <div className="slide-up">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight pb-2">
            <span className="block bg-gradient-to-r from-foreground via-accent-secondary to-accent-primary bg-clip-text text-transparent leading-normal">
              Sugimoto Shoujin
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground-secondary mb-8 max-w-4xl mx-auto leading-relaxed">
            Product Manager leveraging{' '}
            <span className="text-accent-primary font-semibold">AI and data</span>{' '}
            to build impactful, user-centric products
          </p>

          {/* Personality hook */}
          <p className="text-lg md:text-xl text-foreground-secondary/80 mb-12 max-w-3xl mx-auto">
            Boxer • Street Dancer • Solo-Backpacker • Entrepreneur
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={scrollToWork}
              className="group relative px-8 py-4 bg-accent-primary text-foreground font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-accent-secondary hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={downloadResume}
              className="group px-8 py-4 border-2 border-accent-primary text-accent-primary font-semibold rounded-lg transition-all duration-300 hover:bg-accent-primary hover:text-foreground hover:scale-105 hover:shadow-lg hover:shadow-accent-primary/25"
            >
              Download Resume
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-foreground-secondary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-foreground-secondary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;