import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const githubBaseUrl = "https://raw.githubusercontent.com/alexwes/buenos-aires-loft-nyc/refs/heads/main/public";
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[1, 2, 3, 4, 5].map((num) => (
            <img 
              key={num}
              src={`${githubBaseUrl}/images/hero-shots/home-page-${num}.jpeg`}
              alt={`Estefania's interior design showcase ${num}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
                num === 1 ? 'animate-slideshow-1' : 
                num === 2 ? 'animate-slideshow-2' : 
                num === 3 ? 'animate-slideshow-3' : 
                num === 4 ? 'animate-slideshow-4' : 
                'animate-slideshow-5'
              }`}
            />
          ))}
        </div>
        
        {/* Text Overlay */}
        <div className="absolute inset-0 z-10 flex items-end justify-center pb-[10vh]">
          <div className="text-center text-white">
            <h1 className="text-2xl md:text-4xl font-light tracking-[0.3em] font-sans" style={{ transform: 'scaleY(0.7)' }}>
              ESTEFANIA INTERIORS
            </h1>
            <div className="flex items-center justify-center mt-4 mb-4">
              <div className="w-16 h-px bg-white"></div>
              <Link to="/interiors" className="mx-4 text-sm tracking-[0.2em] font-light hover:opacity-80 transition-opacity cursor-pointer font-sans" style={{ transform: 'scaleY(0.7)' }}>
                WELCOME
              </Link>
              <div className="w-16 h-px bg-white"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;