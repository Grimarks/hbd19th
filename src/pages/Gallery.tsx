import { Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  // Placeholder for photos - user will add their own images
  const photoSlots = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
      <div className="min-h-screen bg-gradient-to-br from-background via-accent/30 to-background p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center space-y-4">
            <Link to="/">
              <Button variant="ghost" className="mb-4 hover:bg-secondary">
                <ArrowLeft className="mr-2" />
                Back to Home
              </Button>
            </Link>

            <h1 className="text-5xl md:text-6xl font-elegant font-bold text-primary">
              Our Beautiful Memories
            </h1>

            <p className="text-xl font-cursive text-muted-foreground flex items-center justify-center gap-2">
              <Heart className="text-primary" size={20} />
              Every moment with you is a treasure
              <Heart className="text-primary" size={20} />
            </p>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {photoSlots.map((num) => {
              // Determine the correct extension: photo1 is .JPG, the rest are .jpg
              const extension = num === 1 ? 'JPG' : 'jpg';
              // Use the correct path relative to the public folder: /photos/
              const imagePath = `/photos/photo${num}.${extension}`;

              return (
                  <div
                      key={num}
                      className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-accent shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
                  >
                    {/* Placeholder with heart icon */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/30">
                      <div className="text-center space-y-2">
                        <Heart className="mx-auto text-primary/40 animate-heart-beat" size={48} />
                        <p className="text-sm font-cursive text-muted-foreground">Photo {num}</p>
                      </div>
                    </div>

                    {/* Corrected line to fix the 404 error */}
                    <img
                        src={imagePath}
                        alt={`Memory ${num}`}
                        className="w-full h-full object-cover"
                    />
                  </div>
              );
            })}
          </div>

          {/* Bottom navigation */}
          <div className="mt-12 text-center">
            <Link to="/wish/1">
              <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 text-lg px-8 py-6 rounded-full"
              >
                <Heart className="mr-2" />
                Continue to Birthday Wishes
              </Button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Gallery;