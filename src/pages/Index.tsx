import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Standard Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[1, 2, 3, 4, 5].map((num) => (
            <img 
              key={num}
              src={`https://raw.githubusercontent.com/alexwes/buenos-aires-loft-nyc/refs/heads/main/public/lovable-uploads/home-page-${num}.jpeg`}
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
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-accent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light text-foreground">
                Design Philosophy
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We spend 89% of our lives within indoor spaces, and the way these environments are designed shapes our emotions and actions. Design isn't just about aesthetics—it's a way of thinking, a matter of proportion and balance. At its essence, design is a powerful tool that helps us create spaces that reflect and nurture our humanity.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-light text-foreground">Services</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Residential and Commercial Interior Design</p>
                  <p>• Art Consultation</p>
                  <p>• Space Planning & Design</p>
                  <p>• Custom Furniture Selection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <Mail className="h-5 w-5" />
              <a href="mailto:art@estefaniabustamante.com" className="hover:text-gray-300 transition-colors">
                art@estefaniabustamante.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Phone className="h-5 w-5" />
              <a href="tel:+16313538924" className="hover:text-gray-300 transition-colors">
                +1 (631) 353-8924
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <MapPin className="h-5 w-5" />
              <span>New York, NY</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <a href="https://instagram.com/estefania.interiors" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                @estefania.interiors
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;