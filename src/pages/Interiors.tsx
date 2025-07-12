import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { Mail, Phone, MapPin } from "lucide-react";

const Interiors = () => {
  const githubBaseUrl = "https://raw.githubusercontent.com/alexwes/buenos-aires-loft-nyc/refs/heads/main/public/lovable-uploads";
  
  const interiorProjects = [
    // Kitchen renovations
    {
      id: 1,
      image: `${githubBaseUrl}/kitchen1.jpeg`,
      alt: "kitchen 1",
      description: "KITCHEN, COMPLETE RENOVATION. UPPER EAST SIDE, NEW YORK.",
      category: "kitchen"
    },
    {
      id: 2,
      image: `${githubBaseUrl}/kitchen2.jpeg`,
      alt: "kitchen 2",
      description: "KITCHEN, COMPLETE RENOVATION. UPPER EAST SIDE, NEW YORK.",
      category: "kitchen"
    },
    {
      id: 3,
      image: `${githubBaseUrl}/kitchen3.jpeg`,
      alt: "kitchen 3",
      description: "KITCHEN, COMPLETE RENOVATION. UPPER EAST SIDE, NEW YORK.",
      category: "kitchen"
    },
    {
      id: 4,
      image: `${githubBaseUrl}/kitchen4.jpeg`,
      alt: "kitchen 4",
      description: "KITCHEN, COMPLETE RENOVATION. UPPER EAST SIDE, NEW YORK.",
      category: "kitchen"
    },
    {
      id: 5,
      image: `${githubBaseUrl}/kitchen5.jpeg`,
      alt: "kitchen 5",
      description: "KITCHEN, COMPLETE RENOVATION. UPPER EAST SIDE, NEW YORK.",
      category: "kitchen"
    },
    {
      id: 6,
      image: `${githubBaseUrl}/kitch-bef.jpg`,
      alt: "kitchen before",
      description: "KITCHEN BEFORE RENOVATION. UPPER EAST SIDE, NEW YORK.",
      category: "kitchen"
    },
    {
      id: 7,
      image: `${githubBaseUrl}/kitch-aft.jpg`,
      alt: "kitchen after",
      description: "KITCHEN AFTER RENOVATION. UPPER EAST SIDE, NEW YORK.",
      category: "kitchen"
    },
    
    // Interior design & art consulting
    {
      id: 8,
      image: `${githubBaseUrl}/1619living.jpeg`,
      alt: "1619 living room",
      description: "INTERIOR DESIGN, ART CONSULTING. UPPER EAST SIDE, NEW YORK.",
      category: "interior-design"
    },
    {
      id: 9,
      image: `${githubBaseUrl}/79thdining.jpeg`,
      alt: "79th street dining",
      description: "INTERIOR DESIGN, ART CONSULTING. UPPER EAST SIDE, NEW YORK.",
      category: "interior-design"
    },
    {
      id: 10,
      image: `${githubBaseUrl}/79thentrance.jpeg`,
      alt: "79th street entrance",
      description: "INTERIOR DESIGN, ART CONSULTING. UPPER EAST SIDE, NEW YORK.",
      category: "interior-design"
    },
    {
      id: 11,
      image: `${githubBaseUrl}/79thliving.jpeg`,
      alt: "79th street living",
      description: "INTERIOR DESIGN, ART CONSULTING. UPPER EAST SIDE, NEW YORK.",
      category: "interior-design"
    },
    {
      id: 12,
      image: `${githubBaseUrl}/79thst.jpeg`,
      alt: "79th street",
      description: "INTERIOR DESIGN, ART CONSULTING. UPPER EAST SIDE, NEW YORK.",
      category: "interior-design"
    },
    {
      id: 13,
      image: `${githubBaseUrl}/bedroom.jpg`,
      alt: "bedroom",
      description: "INTERIOR DESIGN, ART CONSULTING. UPPER EAST SIDE, NEW YORK.",
      category: "interior-design"
    },
    {
      id: 14,
      image: `${githubBaseUrl}/jon-dining.jpg`,
      alt: "dining room",
      description: "INTERIOR DESIGN, ART CONSULTING. UPPER EAST SIDE, NEW YORK.",
      category: "interior-design"
    },
    {
      id: 15,
      image: `${githubBaseUrl}/jon-LR.jpg`,
      alt: "living room",
      description: "INTERIOR DESIGN, ART CONSULTING. UPPER EAST SIDE, NEW YORK.",
      category: "interior-design"
    },
    {
      id: 16,
      image: `${githubBaseUrl}/livingroom.JPG`,
      alt: "living room",
      description: "INTERIOR DESIGN, ART CONSULTING. UPPER EAST SIDE, NEW YORK.",
      category: "interior-design"
    },
    {
      id: 17,
      image: `${githubBaseUrl}/crib.JPG`,
      alt: "nursery",
      description: "INTERIOR DESIGN, ART CONSULTING. UPPER EAST SIDE, NEW YORK.",
      category: "interior-design"
    },
    
    // Bathroom renovations
    {
      id: 18,
      image: `${githubBaseUrl}/bath1.jpeg`,
      alt: "bathroom 1",
      description: "BATHROOM, COMPLETE RENOVATION. UPPER EAST SIDE, NEW YORK.",
      category: "bathroom"
    },
    {
      id: 19,
      image: `${githubBaseUrl}/bath2.jpeg`,
      alt: "bathroom 2",
      description: "BATHROOM, COMPLETE RENOVATION. UPPER EAST SIDE, NEW YORK.",
      category: "bathroom"
    },
    {
      id: 20,
      image: `${githubBaseUrl}/bath3.jpeg`,
      alt: "bathroom 3",
      description: "BATHROOM, COMPLETE RENOVATION. UPPER EAST SIDE, NEW YORK.",
      category: "bathroom"
    },
    {
      id: 21,
      image: `${githubBaseUrl}/bath4.jpeg`,
      alt: "bathroom 4",
      description: "BATHROOM, COMPLETE RENOVATION. UPPER EAST SIDE, NEW YORK.",
      category: "bathroom"
    },
    {
      id: 22,
      image: `${githubBaseUrl}/bath5.jpeg`,
      alt: "bathroom 5",
      description: "BATHROOM, COMPLETE RENOVATION. UPPER EAST SIDE, NEW YORK.",
      category: "bathroom"
    },
    {
      id: 23,
      image: `${githubBaseUrl}/bath6.jpeg`,
      alt: "bathroom 6",
      description: "BATHROOM, COMPLETE RENOVATION. UPPER EAST SIDE, NEW YORK.",
      category: "bathroom"
    },
    
    // Before/After comparisons
    {
      id: 24,
      image: `${githubBaseUrl}/before-after.jpg`,
      alt: "before after comparison",
      description: "COMPLETE RENOVATION BEFORE & AFTER. UPPER EAST SIDE, NEW YORK.",
      category: "renovation"
    },
    {
      id: 25,
      image: `${githubBaseUrl}/before-after-1.jpg`,
      alt: "before after comparison 1",
      description: "COMPLETE RENOVATION BEFORE & AFTER. UPPER EAST SIDE, NEW YORK.",
      category: "renovation"
    },
    {
      id: 26,
      image: `${githubBaseUrl}/reno-before.jpg`,
      alt: "renovation before",
      description: "RENOVATION BEFORE. UPPER EAST SIDE, NEW YORK.",
      category: "renovation"
    },
    {
      id: 27,
      image: `${githubBaseUrl}/reno-after.jpg`,
      alt: "renovation after",
      description: "RENOVATION AFTER. UPPER EAST SIDE, NEW YORK.",
      category: "renovation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Standard Header */}
      <Header />

      {/* Header */}
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Interiors
          </h1>
          <p className="text-lg text-muted-foreground">
            Sophisticated interior design and complete renovations across New York
          </p>
        </div>
      </section>

      {/* Interiors Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interiorProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={project.image} 
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center p-4">
                    <div className="text-white text-sm font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      {project.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

export default Interiors;