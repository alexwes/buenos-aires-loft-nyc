import { Link, useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  const navItems = [
    { name: "INTERIORS", path: "/interiors" },
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
      <main className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-12">
              {/* Contact Information */}
              <div className="text-lg font-light tracking-[0.1em] text-foreground">
                For more information contact me at art@estefaniabustamante.com
              </div>
              
              {/* Contact Image */}
              <div className="my-12">
                <img 
                  src="https://raw.githubusercontent.com/alexwes/buenos-aires-loft-nyc/refs/heads/main/public/images/contact/pigeon.jpg"
                  alt="Estefania Bustamante"
                  className="w-1/4 max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
              
              {/* Social Media Links */}
              <div className="flex justify-center space-x-8 py-8">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/estefania.interiors/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* Facebook */}
                <a 
                  href="https://www.facebook.com/estefania.bustamante.101" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/estefania-bustamante" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                {/* Pinterest */}
                <a 
                  href="https://www.pinterest.com/bustamanteeste/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-70 transition-opacity"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12C24.007 5.367 18.641.001.012.001z"/>
                  </svg>
                </a>
              </div>
              
              {/* Quote */}
              <blockquote className="text-center text-xl font-light tracking-[0.1em] text-muted-foreground border-l-4 border-primary pl-6 mt-16">
                "Creativity takes courage." - Henri Matisse
              </blockquote>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;