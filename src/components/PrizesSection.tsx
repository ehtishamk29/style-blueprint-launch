import { Button } from "@/components/ui/button";

const PrizesSection = () => {
  const prizes = [
    {
      place: "1st Place",
      position: "first",
      cashPrize: "PKR 40,000",
      rewards: [
        "PKR 40,000 Cash Prize",
        "Fast-Track Internship Interview with Generation",
        "Podcast Feature with Ayesha Ali",
        "3D Masterclass in Unreal Engine 5 + CLO3D by Cryptic",
        "Opportunity for Mass Production of your design",
        "Official Winner's Certificate"
      ]
    },
    {
      place: "2nd Place", 
      position: "second",
      cashPrize: "PKR 10,000",
      rewards: [
        "PKR 10,000 Cash Prize",
        "PKR 10,000 Generation Gift Card",
        "Exclusive Merch & Bandanas by Ayesha Ali",
        "3D CLO3D Masterclass by Cryptic",
        "Opportunity for Mass Production of your design",
        "Official Winner's Certificate"
      ]
    },
    {
      place: "3rd Place",
      position: "third", 
      cashPrize: "PKR 5,000",
      rewards: [
        "PKR 5,000 Cash Prize",
        "PKR 5,000 Generation Gift Card",
        "Merch & Bandanas by Ayesha Ali",
        "Iridescent Sticker Pack by Cryptic",
        "Opportunity for Mass Production of your design",
        "Official Winner's Certificate"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-electric-yellow rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-electric-pink rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-electric-cyan rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              <span className="block text-primary">Epic</span>
              <span className="block bg-gradient-electric bg-clip-text text-transparent">Prizes</span>
            </h2>
            <div className="w-24 h-1 bg-electric-yellow mx-auto"></div>
          </div>
          
          {/* Prize cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {prizes.map((prize, index) => (
              <div
                key={index}
                className={`relative group ${
                  prize.position === 'first' 
                    ? 'lg:-mt-8 lg:scale-110' 
                    : prize.position === 'second'
                    ? 'lg:-mt-4'
                    : ''
                }`}
              >
                {/* Card container */}
                <div className={`
                  relative p-8 rounded-lg border-4 transition-all duration-300 hover:scale-105
                  ${prize.position === 'first' 
                    ? 'bg-gradient-electric border-primary shadow-glow' 
                    : prize.position === 'second'
                    ? 'bg-gradient-cyber border-primary shadow-neon'
                    : 'bg-secondary border-electric-yellow'
                  }
                `}>
                  {/* Rank badge */}
                  <div className={`
                    absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 rounded-full font-black text-sm uppercase tracking-wider
                    ${prize.position === 'first' 
                      ? 'bg-electric-yellow text-primary' 
                      : prize.position === 'second'
                      ? 'bg-electric-pink text-primary'
                      : 'bg-electric-cyan text-primary'
                    }
                  `}>
                    {prize.place}
                  </div>
                  
                  {/* Cash prize highlight */}
                  <div className="text-center mb-6 pt-4">
                    <div className="text-3xl md:text-4xl font-black text-primary mb-2">
                      {prize.cashPrize}
                    </div>
                    <div className="text-sm font-bold text-foreground/70 uppercase tracking-wider">
                      Cash Prize
                    </div>
                  </div>
                  
                  {/* Rewards list */}
                  <div className="space-y-3">
                    {prize.rewards.map((reward, rewardIndex) => (
                      <div key={rewardIndex} className="flex items-start space-x-3">
                        <div className={`
                          w-2 h-2 rounded-full mt-2 flex-shrink-0
                          ${prize.position === 'first' 
                            ? 'bg-primary' 
                            : prize.position === 'second'
                            ? 'bg-primary'
                            : 'bg-electric-yellow'
                          }
                        `}></div>
                        <span className="text-sm text-primary font-medium leading-relaxed">
                          {reward}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Winner crown for first place */}
                {prize.position === 'first' && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-electric-yellow text-2xl animate-bounce">
                    👑
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center pt-12">
            <Button variant="glitch" size="lg" className="text-xl px-12 py-6 animate-pulse-glow">
              Join The Competition
            </Button>
            <p className="mt-4 text-foreground/60 text-sm">
              Limited spots available. Register now!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;