import { Link, useLocation } from "react-router-dom";

const Portfolio = () => {
  const location = useLocation();

  const navItems = [
    { name: "INTERIORS", path: "/portfolio" },
    { name: "ART", path: "/art" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

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

      {/* Main Content Area */}
      <main className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Portfolio Grid - Placeholder for now */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* This will be populated with actual content later */}
            <div className="text-center text-muted-foreground py-20">
              Portfolio content will be added here
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;