import eyeGraphic from "@/assets/eye-graphic.png";
import geometricShapes from "@/assets/geometric-shapes.png";

const FloatingGraphics = () => {
  return (
    <>
      {/* Eye graphic */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-15 animate-float hidden md:block">
        <img src={eyeGraphic} alt="Eye graphic" className="w-full h-full object-contain" />
      </div>
      
      {/* Geometric shapes */}
      <div className="absolute bottom-32 left-16 w-24 h-24 opacity-10 animate-rotate-slow hidden lg:block">
        <img src={geometricShapes} alt="Geometric shapes" className="w-full h-full object-contain" />
      </div>
      
      {/* Abstract dots */}
      <div className="absolute top-1/3 left-8 grid grid-cols-3 gap-2 opacity-20 animate-bounce-gentle">
        <div className="w-2 h-2 bg-electric-yellow rounded-full"></div>
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        <div className="w-2 h-2 bg-electric-pink rounded-full"></div>
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        <div className="w-2 h-2 bg-electric-cyan rounded-full"></div>
        <div className="w-2 h-2 bg-primary rounded-full"></div>
      </div>
      
      {/* Halftone pattern */}
      <div className="absolute bottom-20 right-20 w-16 h-16 opacity-10 animate-scale-pulse hidden md:block">
        <div className="w-full h-full grid grid-cols-4 gap-1">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-full h-full bg-primary rounded-full"></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FloatingGraphics;