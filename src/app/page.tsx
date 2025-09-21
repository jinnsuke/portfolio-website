import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Global Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background-secondary to-background-tertiary"></div>

      {/* Global animated background pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-10 w-56 h-56 bg-accent-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-10 w-64 h-64 bg-accent-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
      </div>

      {/* Content with relative positioning */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Education />
        <Experience />

      <section id="skills" className="section-padding container">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Skills</h2>
          <p className="text-foreground-secondary">Coming soon...</p>
        </div>
      </section>

      <section id="projects" className="section-padding container">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Projects</h2>
          <p className="text-foreground-secondary">Coming soon...</p>
        </div>
      </section>

      <section id="contact" className="section-padding container">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Contact</h2>
          <p className="text-foreground-secondary">Coming soon...</p>
        </div>
      </section>
      </div>
    </main>
  );
}
