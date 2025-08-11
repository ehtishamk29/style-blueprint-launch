const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main logo/title */}
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              <span className="bg-gradient-electric bg-clip-text text-transparent">
                Fashion Tech Pack
              </span>
            </h3>
            <div className="w-16 h-1 bg-electric-yellow mx-auto"></div>
          </div>
          
          {/* Description */}
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Pakistan's pioneering fashion competition where tradition meets innovation. 
            Transform your creative vision into reality.
          </p>
          
          {/* Contact info */}
          <div className="grid md:grid-cols-3 gap-8 py-8">
            <div className="space-y-2">
              <h4 className="font-bold text-electric-yellow uppercase tracking-wider">Contact</h4>
              <p className="text-sm text-primary-foreground/70">info@fashiontechpack.pk</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-electric-pink uppercase tracking-wider">Follow</h4>
              <p className="text-sm text-primary-foreground/70">@fashiontechpack</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-electric-cyan uppercase tracking-wider">Submit</h4>
              <p className="text-sm text-primary-foreground/70">submissions@fashiontechpack.pk</p>
            </div>
          </div>
          
          {/* Bottom line */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Fashion Tech Pack Competition. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <div className="w-2 h-2 bg-electric-yellow rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-electric-pink rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-8 right-8 w-3 h-3 bg-electric-yellow rounded-full animate-float"></div>
      <div className="absolute bottom-8 left-8 w-4 h-4 bg-electric-pink rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </footer>
  );
};

export default Footer;