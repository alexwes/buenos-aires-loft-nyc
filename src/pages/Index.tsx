import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";
import logoImage from "@/assets/logo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo */}
      <header className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center bg-background/80 backdrop-blur-sm rounded-full p-2">
            <img 
              src={logoImage} 
              alt="Estefania Bustamante" 
              className="h-16 w-16 rounded-full object-cover border-2 border-border"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Elegant interior design" 
            className="w-full h-full object-contain bg-warm-beige"
          />
          <div className="absolute inset-0 bg-background/40"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-light tracking-wide text-foreground">
              Estefania Bustamante
            </h1>
            <p className="text-xl md:text-2xl font-light text-warm-gray tracking-wide">
              Interior Design & Art Curation
            </p>
          </div>
          
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the vibrant streets of Buenos Aires to the sophisticated elegance of New York, 
              I create spaces that tell stories through carefully curated design and artful living.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="text-sm tracking-wide">
                View Portfolio
              </Button>
              <Button size="lg" className="text-sm tracking-wide">
                Get In Touch
              </Button>
            </div>
          </div>
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
                  I believe that great design is the harmony between functionality and beauty, 
                  where every element serves both purpose and aesthetic vision.
                </p>
                <p>
                  Drawing inspiration from my South American roots and cosmopolitan New York experience, 
                  I create spaces that are both timeless and contemporary, sophisticated yet welcoming.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-light text-foreground">Services</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Residential Interior Design</p>
                  <p>• Art Curation & Consultation</p>
                  <p>• Space Planning & Design</p>
                  <p>• Custom Furniture Selection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-light text-foreground">
              Let's Create Together
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your space? I'd love to discuss your vision and bring it to life.
            </p>
          </div>
          
          <Card className="p-8 max-w-lg mx-auto border-border bg-card">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <span>hello@estefaniabustamante.com</span>
              </div>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>New York, NY</span>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
