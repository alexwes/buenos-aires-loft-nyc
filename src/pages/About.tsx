import { Link, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  const navItems = [
    { name: "INTERIORS", path: "/interiors" },
    { name: "ART", path: "/art" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

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

      {/* Main Content Area */}
      <main className="py-16 px-6 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="prose max-w-none text-foreground space-y-6 font-light leading-relaxed text-sm">
              <p>
Based in New York City, our boutique interior design and art consultancy studio offers a thoughtful, bespoke approach that transforms everyday spaces into something truly special.
              </p>
              
              <p>
We believe the interiors we inhabit—where we spend nearly 90% of our lives—should reflect who we are, inspire how we live, and elevate the everyday. Our work is guided by proportion, balance, and a deep appreciation for beauty and individuality. Whether crafting a home from the ground up or reimagining a single room, we create interiors with clean lines, intentional details, and eclectic sophistication. On the art side, we advise seasoned collectors in search of the perfect piece, as well as newcomers navigating the thrilling (and sometimes daunting) world of art collecting—always with warmth, taste, and discernment.
              </p>
              
              {/* Image Placeholder */}
              <div className="text-center" style={{ marginTop: '100px', marginBottom: '100px' }}>
                <img 
                  src="https://raw.githubusercontent.com/alexwes/buenos-aires-loft-nyc/refs/heads/main/public/images/about/tifi-hero.jpeg"
                  alt="Estefania with her son, Alexander, at Ashmolean museum in Oxford, UK"
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-4"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Quote at bottom */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-center text-sm font-light leading-relaxed tracking-[0.1em] text-muted-foreground border-l-4 border-primary pl-6">
              "Art is a line around your thoughts." - Gustav Klimt
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;