import { Button } from "@/components/ui/button";
import heroGraphic from "@/assets/hero-graphic.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background graphic */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroGraphic} 
          alt="Grunge graphic background" 
          className="w-full h-full object-cover animate-fade-in"
        />
      </div>
      
      {/* Halftone overlay */}
      <div className="absolute inset-0 halftone"></div>
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          {/* Main title with glitch effect */}
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            <span className="block text-primary">Pakistan's First</span>
            <span className="block bg-gradient-electric bg-clip-text text-transparent animate-pulse-glow">
              Fashion Competition
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            <p className="mb-4 font-medium">
              Redefine tradition. Rethink the future.
            </p>
            <p>
              A Tech Pack is the blueprint of fashion, a detailed guide that brings your designs from concept to creation. 
              It includes flat sketches, measurements, stitching details, materials, and more, all aligned for production.
            </p>
          </div>
          
          {/* Call to action */}
          <div className="text-center space-y-6">
            <p className="text-lg md:text-xl font-bold text-foreground">
              Join Pakistan's first-ever Fashion Tech Pack competition and show how you can transform 
              timeless garments into cutting-edge design.
            </p>
            
            <p className="text-base md:text-lg text-foreground/70">
              This is your chance to merge heritage with innovation and bring your vision to life.
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button variant="electric" size="lg" className="text-lg px-8 py-6 animate-float">
                Enter Competition
              </Button>
              <Button variant="brutal" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-electric-yellow rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-electric-pink rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-electric-cyan rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 right-10 w-5 h-5 bg-electric-yellow rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
    </section>
  );
};

export default HeroSection;