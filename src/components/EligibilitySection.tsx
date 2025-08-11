import lipsGraphic from "@/assets/lips-graphic.png";

const EligibilitySection = () => {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Clean background pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Title with clean design */}
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-primary animate-slide-in-left">
              Open To All
            </h2>
            <div className="w-32 h-2 bg-electric-yellow mx-auto rounded-full"></div>
            <p className="text-2xl font-bold text-primary">No design degree required.</p>
          </div>
          
          {/* Content with enhanced readability */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="bg-white rounded-2xl p-8 shadow-clean border border-border">
                <h3 className="text-3xl font-bold text-primary mb-6">
                  Everyone Welcome
                </h3>
                
                <div className="space-y-6 text-lg">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-electric rounded-xl">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <span className="font-semibold text-primary">Students & Graduates</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-cyber rounded-xl">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <span className="font-semibold text-primary">Self-taught Designers</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gradient-dark rounded-xl">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                    <span className="font-semibold text-primary">Fashion Enthusiasts</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-muted rounded-xl">
                    <div className="w-4 h-4 bg-electric-yellow rounded-full"></div>
                    <span className="font-semibold text-primary">Creative Minds</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual element with artwork */}
            <div className="relative animate-slide-in-right">
              <div className="w-80 h-80 mx-auto relative">
                {/* Main graphic */}
                <div className="absolute inset-0 bg-white rounded-full shadow-clean flex items-center justify-center border-4 border-primary">
                  <img src={lipsGraphic} alt="Lips graphic" className="w-48 h-48 object-contain opacity-80" />
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
                  <div className="w-8 h-8 bg-electric-yellow rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">✨</span>
                  </div>
                </div>
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 animate-bounce-gentle" style={{animationDelay: '1s'}}>
                  <div className="w-8 h-8 bg-electric-pink rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">🎨</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce-gentle" style={{animationDelay: '2s'}}>
                  <div className="w-8 h-8 bg-electric-cyan rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">💡</span>
                  </div>
                </div>
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 animate-bounce-gentle" style={{animationDelay: '0.5s'}}>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">👗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;