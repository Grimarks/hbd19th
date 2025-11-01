import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Collection of birthday wishes
const wishes = [
  {
    id: 1,
    title: "You Light Up My World",
    content: "From the moment I met you, my life has been brighter. Your smile can turn any bad day into the best day. Thank you for being the sunshine in my life. Happy 19th birthday, my love!",
    icon: "✨",
  },
  {
    id: 2,
    title: "My Best Friend, My Love",
    content: "You're not just my girlfriend, you're my best friend, my confidant, and my partner in everything. I'm so grateful for every laugh, every adventure, and every moment we share together. Here's to many more!",
    icon: "💕",
  },
  {
    id: 3,
    title: "You Make Me Better",
    content: "Every day with you, I become a better person. You inspire me to be kinder, stronger, and more loving. Thank you for believing in me and supporting me in everything I do. I love you more than words can say.",
    icon: "🌟",
  },
  {
    id: 4,
    title: "Our Beautiful Journey",
    content: "Every memory we've created together is precious to me. From our first date to this moment, it's been an incredible journey. I can't wait to see what adventures await us. Happy birthday, beautiful!",
    icon: "🎈",
  },
  {
    id: 5,
    title: "Forever and Always",
    content: "As you turn 19, I want you to know that my love for you grows stronger every day. You're the one I want to spend all my tomorrows with. Here's to your special day and to our beautiful future together!",
    icon: "💖",
  },
];

const WishPage = () => {
  const { id } = useParams();
  const wishId = parseInt(id || "1");
  const currentWish = wishes.find((w) => w.id === wishId) || wishes[0];
  const isFirst = wishId === 1;
  const isLast = wishId === wishes.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/30 to-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/15 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
            size={15 + Math.random() * 25}
          />
        ))}
      </div>

      <div className="max-w-3xl w-full relative z-10">
        {/* Navigation header */}
        <div className="flex justify-between items-center mb-8">
          <Link to="/">
            <Button variant="ghost" className="hover:bg-secondary">
              <ArrowLeft className="mr-2" />
              Home
            </Button>
          </Link>
          
          <div className="flex gap-2">
            {wishes.map((wish) => (
              <Link key={wish.id} to={`/wish/${wish.id}`}>
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    wish.id === wishId
                      ? "bg-primary scale-125"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Wish card */}
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-[var(--shadow-soft)] border-2 border-primary/20 animate-fade-in-up">
          {/* Icon */}
          <div className="text-center mb-6">
            <span className="text-6xl animate-sparkle inline-block">{currentWish.icon}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-elegant font-bold text-primary text-center mb-8">
            {currentWish.title}
          </h1>

          {/* Content */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-cursive text-foreground/90 leading-relaxed text-center">
              {currentWish.content}
            </p>
          </div>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 my-8">
            <Sparkles className="text-primary" size={20} />
            <Heart className="text-primary animate-heart-beat" size={24} />
            <Sparkles className="text-primary" size={20} />
          </div>

          {/* Wish counter */}
          <p className="text-center text-muted-foreground font-cursive text-lg">
            Wish {wishId} of {wishes.length}
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-8">
          {!isFirst ? (
            <Link to={`/wish/${wishId - 1}`}>
              <Button 
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 rounded-full border-2 border-primary/30"
              >
                <ArrowLeft className="mr-2" />
                Previous
              </Button>
            </Link>
          ) : (
            <div />
          )}

          {!isLast ? (
            <Link to={`/wish/${wishId + 1}`}>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 rounded-full"
              >
                Next
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          ) : (
            <Link to="/">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 rounded-full"
              >
                <Heart className="mr-2" />
                Back to Home
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishPage;
