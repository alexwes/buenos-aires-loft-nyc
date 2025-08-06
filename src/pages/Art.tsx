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

  // Hardcoded list of art images to avoid GitHub API rate limits
  const generateArtworks = () => {
    setLoading(true);
    
    const hardcodedArtworks = [
      { id: 1, image: `${githubBaseUrl}/picasso-1.jpg`, alt: "Artwork by PICASSO", artist: "PICASSO" },
      { id: 2, image: `${githubBaseUrl}/monet-1.jpg`, alt: "Artwork by MONET", artist: "MONET" },
      { id: 3, image: `${githubBaseUrl}/van-gogh-1.jpg`, alt: "Artwork by VAN GOGH", artist: "VAN GOGH" },
      { id: 4, image: `${githubBaseUrl}/dali-1.jpg`, alt: "Artwork by DALI", artist: "DALI" },
      { id: 5, image: `${githubBaseUrl}/kandinsky-1.jpg`, alt: "Artwork by KANDINSKY", artist: "KANDINSKY" },
      { id: 6, image: `${githubBaseUrl}/matisse-1.jpg`, alt: "Artwork by MATISSE", artist: "MATISSE" },
      { id: 7, image: `${githubBaseUrl}/pollock-1.jpg`, alt: "Artwork by POLLOCK", artist: "POLLOCK" },
      { id: 8, image: `${githubBaseUrl}/warhol-1.jpg`, alt: "Artwork by WARHOL", artist: "WARHOL" },
      { id: 9, image: `${githubBaseUrl}/rothko-1.jpg`, alt: "Artwork by ROTHKO", artist: "ROTHKO" },
    ];
    
    setArtworks(hardcodedArtworks);
    setError(null);
    setLoading(false);
  };

  // Load artworks on component mount
  useEffect(() => {
    generateArtworks();
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
              onClick={generateArtworks}
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

      {/* Art Gallery */}
      <section className="py-16 px-4 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={artwork.image} 
                    alt={artwork.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
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
              "Make it simple, but significant." - Don Draper
            </blockquote>
            <blockquote className="text-center text-sm font-light leading-relaxed tracking-[0.1em] text-muted-foreground">
              "Make it simple, but significant." - Don Draper
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;