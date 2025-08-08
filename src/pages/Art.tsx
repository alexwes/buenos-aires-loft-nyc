import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Art = () => {
  const location = useLocation();
  const githubBaseUrl = "https://raw.githubusercontent.com/alexwes/buenos-aires-loft-nyc/refs/heads/main/public/images/art";
  const githubApiUrl = "https://api.github.com/repos/alexwes/buenos-aires-loft-nyc/contents/public/images/art";

  const navItems = [
    { name: "INTERIORS", path: "/interiors" },
    { name: "ART", path: "/art" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Generate all art images dynamically from GitHub
  const generateArtworksFromGitHub = async () => {
    try {
      setLoading(true);
      const allArtworks = [];
      let artworkId = 1;
      
      // Get all files in the art directory
      const response = await fetch(githubApiUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch art directory: ${response.status}`);
      }
      
      const files = await response.json();
      
      // Filter for image files only
      const imageFiles = files.filter(file => 
        file.type === 'file' && 
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)
      );
      
      // Add each image to our collection
      imageFiles.forEach(file => {
        // Extract artist name from filename (remove extension and format)
        const artistName = file.name
          .split('.')[0] // Remove extension
          .replace(/-\d+$/, '') // Remove trailing numbers like -2, -3
          .replace(/-/g, ' ') // Replace hyphens with spaces
          .toUpperCase(); // Convert to uppercase
        
        allArtworks.push({
          id: artworkId++,
          image: `${githubBaseUrl}/${file.name}`,
          alt: `Artwork by ${artistName}`,
          artist: artistName
        });
      });
      
      setArtworks(allArtworks);
      setError(null);
    } catch (error) {
      console.error('Error generating artworks from GitHub:', error);
      setError('Failed to load artworks. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Load artworks on component mount
  useEffect(() => {
    generateArtworksFromGitHub();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background">
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
                        className={`text-[10px] font-light tracking-[0.2em] transition-colors ${
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

        {/* Loading State */}
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-foreground mx-auto mb-4"></div>
            <p className="text-muted-foreground font-light tracking-[0.1em]">Loading artworks...</p>
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
                        className={`text-[10px] font-light tracking-[0.2em] transition-colors ${
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

        {/* Error State */}
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-red-500 font-light tracking-[0.1em] mb-4">{error}</p>
            <button 
              onClick={generateArtworksFromGitHub}
              className="px-6 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors font-light tracking-[0.1em]"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }
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
                      className={`text-[10px] font-light tracking-[0.2em] transition-colors ${
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

      {/* Art Gallery */}
      <section className="py-16 px-4 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="group relative overflow-hidden rounded-lg">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={artwork.image}
                    alt={artwork.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-light tracking-[0.1em]">{artwork.artist}</p>
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
              "If I could say it in words there would be no reason to paint." - Edward Hopper
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;