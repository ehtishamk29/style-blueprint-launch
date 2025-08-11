const EligibilitySection = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 2px, transparent 2px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Title */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              <span className="block text-primary">Open To</span>
              <span className="block bg-gradient-cyber bg-clip-text text-transparent">All</span>
            </h2>
            
            <div className="w-24 h-1 bg-electric-yellow mx-auto"></div>
          </div>
          
          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                No design degree required.
              </h3>
              
              <div className="space-y-4 text-lg text-foreground/80">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-electric-pink rounded-full animate-pulse"></div>
                  <span>Students</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-electric-yellow rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <span>Graduates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-electric-cyan rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <span>Self-taught designers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-electric-red rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                  <span>Anyone with passion for fashion</span>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="relative">
              <div className="w-64 h-64 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-electric rounded-full opacity-20 animate-float"></div>
                <div className="absolute inset-4 bg-gradient-cyber rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute inset-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-4xl font-black text-primary-foreground">?</span>
                </div>
              </div>
              
              {/* Floating text elements */}
              <div className="absolute -top-4 -left-4 text-xs font-bold text-electric-yellow rotate-12 animate-bounce">
                CREATIVITY
              </div>
              <div className="absolute -top-2 -right-6 text-xs font-bold text-electric-pink -rotate-12 animate-bounce" style={{animationDelay: '0.5s'}}>
                PASSION
              </div>
              <div className="absolute -bottom-4 left-8 text-xs font-bold text-electric-cyan rotate-6 animate-bounce" style={{animationDelay: '1s'}}>
                INNOVATION
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;