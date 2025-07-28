import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Interiors = () => {
  const location = useLocation();
  const githubBaseUrl = "https://raw.githubusercontent.com/alexwes/buenos-aires-loft-nyc/refs/heads/main/public";

  const navItems = [
    { name: "INTERIORS", path: "/interiors" },
    { name: "ART", path: "/art" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const interiorProjects = [
    // UES-1 Project
    { id: 1, image: `${githubBaseUrl}/images/interiors/UES-1/bed-after-1.jpg`, alt: "UES-1 bedroom after renovation", location: "UES-1" },
    { id: 2, image: `${githubBaseUrl}/images/interiors/UES-1/bed-before-1.jpg`, alt: "UES-1 bedroom before renovation", location: "UES-1" },
    { id: 3, image: `${githubBaseUrl}/images/interiors/UES-1/entrance-1.jpeg`, alt: "UES-1 entrance", location: "UES-1" },
    { id: 4, image: `${githubBaseUrl}/images/interiors/UES-1/kitch-aft.jpg`, alt: "UES-1 kitchen after renovation", location: "UES-1" },
    { id: 5, image: `${githubBaseUrl}/images/interiors/UES-1/kitchen-1.jpeg`, alt: "UES-1 kitchen view 1", location: "UES-1" },
    { id: 6, image: `${githubBaseUrl}/images/interiors/UES-1/kitchen-2.jpeg`, alt: "UES-1 kitchen view 2", location: "UES-1" },
    { id: 7, image: `${githubBaseUrl}/images/interiors/UES-1/kitchen-3.jpeg`, alt: "UES-1 kitchen view 3", location: "UES-1" },
    { id: 8, image: `${githubBaseUrl}/images/interiors/UES-1/kitchen-4.jpeg`, alt: "UES-1 kitchen view 4", location: "UES-1" },
    { id: 9, image: `${githubBaseUrl}/images/interiors/UES-1/kitchen-after-1.jpeg`, alt: "UES-1 kitchen after renovation", location: "UES-1" },
    { id: 10, image: `${githubBaseUrl}/images/interiors/UES-1/kitchen-before-1.jpg`, alt: "UES-1 kitchen before renovation", location: "UES-1" },
    { id: 11, image: `${githubBaseUrl}/images/interiors/UES-1/living-1.jpeg`, alt: "UES-1 living room", location: "UES-1" },
    { id: 12, image: `${githubBaseUrl}/images/interiors/UES-1/living-1.JPG`, alt: "UES-1 living room view", location: "UES-1" },
    { id: 13, image: `${githubBaseUrl}/images/interiors/UES-1/living-after-1.jpg`, alt: "UES-1 living room after renovation", location: "UES-1" },
    { id: 14, image: `${githubBaseUrl}/images/interiors/UES-1/living-before-1.jpg`, alt: "UES-1 living room before renovation", location: "UES-1" },
    
    // UES-2 Project
    { id: 15, image: `${githubBaseUrl}/images/interiors/UES-2/dining-1.jpeg`, alt: "UES-2 dining room", location: "UES-2" },
    { id: 16, image: `${githubBaseUrl}/images/interiors/UES-2/living-2.JPG`, alt: "UES-2 living room", location: "UES-2" },
    
    // Brooklyn Project
    { id: 17, image: `${githubBaseUrl}/images/interiors/Brooklyn/bed-1.jpg`, alt: "Brooklyn bedroom", location: "Brooklyn" },
    
    // Buenos Aires Project
    { id: 18, image: `${githubBaseUrl}/images/interiors/Buenos Aires/living-1.png`, alt: "Buenos Aires living room", location: "Buenos Aires" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Navigation */}
            <nav>
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`text-sm font-medium tracking-wide transition-colors ${
                        location.pathname === item.path
                          ? "text-foreground border-b-2 border-foreground pb-1"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
                <span className="text-lg font-light">EB</span>
              </div>
              <span className="text-sm font-light tracking-wider">ESTEFANIA BUSTAMANTE</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Header */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-light text-foreground mb-2">
            Interiors
          </h1>
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
                    onError={(e) => {
                      console.error(`Failed to load image: ${project.image}`);
                    }}
                    onLoad={() => {
                      console.log(`Successfully loaded: ${project.image}`);
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center p-4">
                    <div className="text-white text-sm font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      {project.location.toUpperCase()}
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
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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