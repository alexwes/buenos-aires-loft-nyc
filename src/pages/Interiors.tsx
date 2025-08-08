import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Interiors = () => {
  const location = useLocation();

  const navItems = [
    { name: "INTERIORS", path: "/interiors" },
    { name: "ART", path: "/art" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  // Static array of interior projects
  const interiorProjects = [
    {
      id: 1,
      image: "/images/interiors/Upper East Side/interior1.jpg",
      alt: "Upper East Side - Interior 1",
      location: "Upper East Side"
    },
    {
      id: 2,
      image: "/images/interiors/Manhattan West Side/interior1.jpg",
      alt: "Manhattan West Side - Interior 1",
      location: "Manhattan West Side"
    },
    {
      id: 3,
      image: "/images/interiors/Buenos Aires/interior1.jpg",
      alt: "Buenos Aires - Interior 1",
      location: "Buenos Aires"
    },
    {
      id: 4,
      image: "/images/interiors/Brooklyn/interior1.jpg",
      alt: "Brooklyn - Interior 1",
      location: "Brooklyn"
    }
  ];

  // Sort images to ensure Brooklyn doesn't appear in first 10
  const sortedProjects = interiorProjects.sort((a, b) => {
    // If one is Brooklyn and the other isn't, Brooklyn goes later
    const aIsBrooklyn = a.location.toLowerCase().includes('brooklyn');
    const bIsBrooklyn = b.location.toLowerCase().includes('brooklyn');
    
    if (aIsBrooklyn && !bIsBrooklyn) return 1;
    if (!aIsBrooklyn && bIsBrooklyn) return -1;
    
    // Otherwise maintain original order
    return 0;
  });

  // Function to format location text for display
  const formatLocationText = (location) => {
    if (location.includes('79th')) {
      return 'UPPER EAST SIDE, 79th Street';
    } else if (location.includes('90th')) {
      return 'UPPER EAST SIDE, 90th Street';
    } else if (location === 'Upper East Side') {
      return 'UPPER EAST SIDE';
    } else if (location === 'Manhattan West Side') {
      return 'MANHATTAN WEST SIDE';
    } else if (location === 'Buenos Aires') {
      return 'BUENOS AIRES';
    } else if (location === 'Brooklyn') {
      return 'BROOKLYN';
    }
    return location.toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo - appears first on mobile */}
            <Link to="/" className="flex items-center space-x-4 order-1 md:order-2">
              <span className="text-sm font-light tracking-[0.3em] font-sans" style={{ transform: 'scaleY(0.7)' }}>ESTEFANIA INTERIORS</span>
            </Link>

            {/* Navigation */}
            <nav className="order-2 md:order-1">
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`text-sm font-light tracking-[0.2em] transition-colors ${
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
          </div>
        </div>
      </header>

      {/* Interiors Gallery */}
      <section className="py-16 px-4 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={project.image} 
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-200"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-light tracking-[0.1em]">{formatLocationText(project.location)}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-center text-sm font-light leading-relaxed tracking-[0.1em] text-muted-foreground">
              "Make it simple, but significant." - Don Draper
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interiors;