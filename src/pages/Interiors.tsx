import { Link, useLocation } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
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

  // Fetch directory contents from GitHub API
  const fetchDirectoryContents = async (path = '') => {
    try {
      const url = path ? `${githubApiUrl}/${path}` : githubApiUrl;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch directory: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching directory:', error);
      throw error;
    }
  };

  // Generate all images dynamically from GitHub
  const generateImagesFromGitHub = async () => {
    try {
      setLoading(true);
      const allImages = [];
      let imageId = 1;
      
      // Get all directories in the interiors folder
      const directories = await fetchDirectoryContents();
      
      // Filter for directories only
      const imageDirs = directories.filter(item => item.type === 'dir');
      
      // For each directory, get its contents
      for (const dir of imageDirs) {
        try {
          const files = await fetchDirectoryContents(dir.name);
          
          // Filter for image files only
          const imageFiles = files.filter(file => 
            file.type === 'file' && 
            /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)
          );
          
          // Add each image to our collection
          imageFiles.forEach(file => {
            allImages.push({
              id: imageId++,
              image: `${githubBaseUrl}/${dir.name}/${file.name}`,
              alt: `${dir.name} - ${file.name.split('.')[0].replace(/-/g, ' ')}`,
              location: dir.name
            });
          });
        } catch (dirError) {
          console.error(`Error fetching files from ${dir.name}:`, dirError);
        }
      }
      
      setInteriorProjects(allImages);
      setError(null);
    } catch (error) {
      console.error('Error generating images from GitHub:', error);
      setError('Failed to load images. Please try again later.');
    } finally {
      setLoading(false);
    }
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
    generateImagesFromGitHub();
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
                <span className="text-sm font-light tracking-[0.3em]">ESTEFANIA INTERIORS</span>
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
                <span className="text-sm font-light tracking-[0.3em]">ESTEFANIA BUSTAMANTE</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Error State */}
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-red-500 font-light tracking-[0.1em] mb-4">{error}</p>
            <button 
              onClick={generateImagesFromGitHub}
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
              <span className="text-sm font-light tracking-[0.3em] font-sans" style={{ transform: 'scaleY(0.7)' }}>ESTEFANIA BUSTAMANTE</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Interiors Gallery */}
      <section className="py-16 px-4">
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
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center p-4">
                    <div className="text-white text-sm font-light tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      {formatLocationText(project.location)}
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