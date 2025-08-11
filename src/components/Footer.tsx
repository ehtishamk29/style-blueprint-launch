const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
      {/* Clean background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Main logo/title with clean design */}
          <div className="space-y-6">
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              <span className="text-electric-yellow">Fashion</span>
              <span className="text-primary-foreground"> Tech Pack</span>
            </h3>
            <div className="w-24 h-2 bg-electric-yellow mx-auto rounded-full"></div>
          </div>
          
          {/* Description with better readability */}
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Pakistan's pioneering fashion competition where tradition meets innovation. 
            Transform your creative vision into reality.
          </p>
          
          {/* Contact info with clean layout */}
          <div className="grid md:grid-cols-3 gap-12 py-12">
            <div className="space-y-3">
              <h4 className="font-bold text-electric-yellow uppercase tracking-wider text-lg">Contact</h4>
              <p className="text-primary-foreground/80">info@fashiontechpack.pk</p>
              <p className="text-primary-foreground/80">+92 XXX XXXXXXX</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-electric-pink uppercase tracking-wider text-lg">Follow</h4>
              <p className="text-primary-foreground/80">@fashiontechpack</p>
              <p className="text-primary-foreground/80">Instagram & Twitter</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-electric-cyan uppercase tracking-wider text-lg">Submit</h4>
              <p className="text-primary-foreground/80">submissions@fashiontechpack.pk</p>
              <p className="text-primary-foreground/80">Deadline: Coming Soon</p>
            </div>
          </div>
          
          {/* Bottom line with clean design */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/70 mb-6">
              © 2024 Fashion Tech Pack Competition. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <div className="w-3 h-3 bg-electric-yellow rounded-full animate-bounce-gentle"></div>
              <div className="w-3 h-3 bg-electric-pink rounded-full animate-bounce-gentle" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-electric-cyan rounded-full animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;