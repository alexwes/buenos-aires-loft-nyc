import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [activeTab, setActiveTab] = useState("contact");

  const navItems = [
    { id: "interiors", label: "INTERIORS", path: "/interiors" },
    { id: "art", label: "ART", path: "/art" },
    { id: "about", label: "ABOUT", path: "/about" },
    { id: "contact", label: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-8 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Navigation */}
          <nav className="flex space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                  activeTab === item.id
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-16 h-16 rounded-full border-2 border-foreground flex items-center justify-center">
              <span className="text-2xl font-light">EB</span>
            </div>
            <div className="ml-4 text-right">
              <div className="text-sm font-light tracking-[0.2em]">
                ESTEFANIA BUSTAMANTE
              </div>
            </div>
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-muted-foreground py-20">
            <h1 className="text-2xl font-light">Contact Page - Coming Soon</h1>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

export default Contact;