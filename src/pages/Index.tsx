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
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/417a7024-f7e9-4547-8be3-4104cf86064b.png" 
            alt="Estefania's vibrant interior design with colorful artwork" 
            className="w-full h-full object-cover"
          />
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
                <span>art@estefaniabustamante.com</span>
              </div>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <Phone className="h-5 w-5" />
                <span>+1 (631) 353-8924</span>
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
