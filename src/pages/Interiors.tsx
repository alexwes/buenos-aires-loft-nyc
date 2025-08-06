import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Interiors = () => {
  const location = useLocation();
  const githubBaseUrl = "https://raw.githubusercontent.com/alexwes/buenos-aires-loft-nyc/refs/heads/main/public/images/interiors";
  const githubApiUrl = "https://api.github.com/repos/alexwes/buenos-aires-loft-nyc/contents/public/images/interiors";

  const navItems = [
    { name: "INTERIORS", path: "/interiors" },
    { name: "ART", path: "/art" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const [interiorProjects, setInteriorProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hardcoded list of interior images to avoid GitHub API rate limits
  const generateInteriorImages = () => {
    setLoading(true);
    
    const hardcodedImages = [
      // Buenos Aires
      { id: 1, image: `${githubBaseUrl}/Buenos Aires/buenos-aires-1.jpg`, alt: "Buenos Aires - Living Room", location: "Buenos Aires" },
      { id: 2, image: `${githubBaseUrl}/Buenos Aires/buenos-aires-2.jpg`, alt: "Buenos Aires - Bedroom", location: "Buenos Aires" },
      { id: 3, image: `${githubBaseUrl}/Buenos Aires/buenos-aires-3.jpg`, alt: "Buenos Aires - Kitchen", location: "Buenos Aires" },
      { id: 4, image: `${githubBaseUrl}/Buenos Aires/buenos-aires-4.jpg`, alt: "Buenos Aires - Dining", location: "Buenos Aires" },
      { id: 5, image: `${githubBaseUrl}/Buenos Aires/buenos-aires-5.jpg`, alt: "Buenos Aires - Bathroom", location: "Buenos Aires" },
      { id: 6, image: `${githubBaseUrl}/Buenos Aires/buenos-aires-6.jpg`, alt: "Buenos Aires - Study", location: "Buenos Aires" },
      
      // Upper East Side 79th
      { id: 7, image: `${githubBaseUrl}/Upper East Side 79th/ues-79th-1.jpg`, alt: "Upper East Side 79th - Living Room", location: "Upper East Side 79th" },
      { id: 8, image: `${githubBaseUrl}/Upper East Side 79th/ues-79th-2.jpg`, alt: "Upper East Side 79th - Bedroom", location: "Upper East Side 79th" },
      { id: 9, image: `${githubBaseUrl}/Upper East Side 79th/ues-79th-3.jpg`, alt: "Upper East Side 79th - Kitchen", location: "Upper East Side 79th" },
      { id: 10, image: `${githubBaseUrl}/Upper East Side 79th/ues-79th-4.jpg`, alt: "Upper East Side 79th - Dining", location: "Upper East Side 79th" },
      
      // Upper East Side 90th
      { id: 11, image: `${githubBaseUrl}/Upper East Side 90th/ues-90th-1.jpg`, alt: "Upper East Side 90th - Living Room", location: "Upper East Side 90th" },
      { id: 12, image: `${githubBaseUrl}/Upper East Side 90th/ues-90th-2.jpg`, alt: "Upper East Side 90th - Bedroom", location: "Upper East Side 90th" },
      { id: 13, image: `${githubBaseUrl}/Upper East Side 90th/ues-90th-3.jpg`, alt: "Upper East Side 90th - Kitchen", location: "Upper East Side 90th" },
      
      // Manhattan West Side
      { id: 14, image: `${githubBaseUrl}/Manhattan West Side/mws-1.jpg`, alt: "Manhattan West Side - Living Room", location: "Manhattan West Side" },
      { id: 15, image: `${githubBaseUrl}/Manhattan West Side/mws-2.jpg`, alt: "Manhattan West Side - Bedroom", location: "Manhattan West Side" },
      { id: 16, image: `${githubBaseUrl}/Manhattan West Side/mws-3.jpg`, alt: "Manhattan West Side - Kitchen", location: "Manhattan West Side" },
      
      // Brooklyn
      { id: 17, image: `${githubBaseUrl}/Brooklyn/brooklyn-1.jpg`, alt: "Brooklyn - Living Room", location: "Brooklyn" },
      { id: 18, image: `${githubBaseUrl}/Brooklyn/brooklyn-2.jpg`, alt: "Brooklyn - Bedroom", location: "Brooklyn" },
      { id: 19, image: `${githubBaseUrl}/Brooklyn/brooklyn-3.jpg`, alt: "Brooklyn - Kitchen", location: "Brooklyn" },
    ];
    
    setInteriorProjects(hardcodedImages);
    setError(null);
    setLoading(false);
  };

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

  // Load images on component mount
  useEffect(() => {
    generateInteriorImages();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
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

              {/* Logo */}
              <Link to="/" className="flex items-center space-x-4">
                <span className="text-sm font-light tracking-[0.3em] font-sans" style={{ transform: 'scaleY(0.7)' }}>ESTEFANIA INTERIORS</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Loading State */}
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foreground mx-auto mb-4"></div>
            <p className="text-muted-foreground font-light tracking-[0.1em]">Loading images...</p>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
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

              {/* Logo */}
              <Link to="/" className="flex items-center space-x-4">
                <span className="text-sm font-light tracking-[0.3em] font-sans" style={{ transform: 'scaleY(0.7)' }}>ESTEFANIA INTERIORS</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Error State */}
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-red-500 font-light tracking-[0.1em] mb-4">{error}</p>
            <button 
              onClick={generateInteriorImages}
              className="px-6 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors font-light tracking-[0.1em]"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="flex justify-between items-center">
            {/* Navigation */}
            <nav>
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

            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4">
              <span className="text-sm font-light tracking-[0.3em] font-sans" style={{ transform: 'scaleY(0.7)' }}>ESTEFANIA INTERIORS</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Interiors Gallery */}
      <section className="py-16 px-4 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={project.image} 
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm font-light tracking-[0.1em]">{formatLocationText(project.location)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-center text-sm font-light leading-relaxed tracking-[0.1em] text-muted-foreground border-l-4 border-primary pl-6">
              "If I could say it in words there would be no reason to paint." - Edward Hopper
            </blockquote>
            <blockquote className="text-center text-sm font-light leading-relaxed tracking-[0.1em] text-muted-foreground">
              "If I could say it in words there would be no reason to paint." - Edward Hopper
            </blockquote>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Interiors;