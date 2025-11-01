import { Link } from "react-router-dom";
import { Heart, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/30 to-background flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
            size={20 + Math.random() * 30}
          />
        ))}
      </div>

      <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in-up relative z-10">
        {/* Main birthday message */}
        <div className="space-y-4">
          <div className="flex justify-center gap-4 mb-6">
            <Sparkles className="text-primary animate-sparkle" size={40} />
            <Heart className="text-primary animate-heart-beat" size={50} />
            <Sparkles className="text-primary animate-sparkle" size={40} style={{ animationDelay: "1s" }} />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-elegant font-bold text-primary mb-4">
            Happy 19th Birthday
          </h1>
          
          <p className="text-4xl md:text-5xl font-cursive text-foreground/90">
            My Dearest Love ♡
          </p>
        </div>

        {/* Description */}
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-[var(--shadow-soft)] border-2 border-primary/20">
          <p className="text-xl md:text-2xl font-cursive text-foreground/80 leading-relaxed">
            Today is your special day, and I want to make it unforgettable.
            I've created this little corner of the internet just for you,
            filled with all my love, wishes, and our beautiful memories together.
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link to="/gallery">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 text-lg px-8 py-6 rounded-full"
            >
              <Gift className="mr-2" />
              Our Memories
            </Button>
          </Link>
          
          <Link to="/wish/1">
            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 text-lg px-8 py-6 rounded-full border-2 border-primary/30"
            >
              <Heart className="mr-2" />
              Read My Wishes
            </Button>
          </Link>
        </div>

        {/* Subtitle */}
        <p className="text-lg font-cursive text-muted-foreground pt-4">
          With all my love, forever and always ♡
        </p>
      </div>
    </div>
  );
};

export default Home;
