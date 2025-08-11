import { Button } from "@/components/ui/button";
import FloatingGraphics from "@/components/FloatingGraphics";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Clean background pattern */}
      <div className="absolute inset-0 halftone-clean"></div>
      
      {/* Floating graphics */}
      <FloatingGraphics />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-12 animate-slide-up">
          {/* Main title with clean styling */}
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            <span className="block text-primary mb-4 animate-slide-in-left">Pakistan's First</span>
            <span className="block text-primary relative animate-slide-in-right">
              Fashion Competition
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-electric-yellow"></div>
            </span>
          </h1>
          
          {/* Subtitle with better readability */}
          <div className="text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed space-y-6 animate-fade-in">
            <p className="font-bold text-primary">
              Redefine tradition. Rethink the future.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A Tech Pack is the blueprint of fashion, a detailed guide that brings your designs from concept to creation. 
              It includes flat sketches, measurements, stitching details, materials, and more, all aligned for production.
            </p>
          </div>
          
          {/* Call to action with enhanced readability */}
          <div className="text-center space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-clean border border-border max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl font-bold text-primary mb-4">
                Join Pakistan's first-ever Fashion Tech Pack competition
              </p>
              <p className="text-lg text-muted-foreground">
                Show how you can transform timeless garments into cutting-edge design. 
                This is your chance to merge heritage with innovation and bring your vision to life.
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="clean" size="lg" className="text-xl px-12 py-6 animate-bounce-gentle">
                Enter Competition
              </Button>
              <Button variant="outline" size="lg" className="text-xl px-12 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;