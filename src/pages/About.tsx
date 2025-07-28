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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-12 text-center">
              About Estefania
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground space-y-6">
              <p>
                Growing up with an artist mother and a lawyer turned-to-finance father Estefania was always deeply immersed in the visual arts and finance worlds. Since 2001 Estefania has worked with art galleries, collectors, designers, dealers and artists in the US, Argentina and Europe, in both creative and administration roles, assisting sales, catalogue and book publications, exhibitions, and transportation. Works of the artists she acquired years ago have become part of the MoMA NY and other leading museum collections around the world. A work she owned was on loan and exhibited for several years at MALBA Museum of Argentina, and other work of her collection was loaned for temporary exhibition.
              </p>
              
              <p>
                Estefania was a trend spotter in Buenos Aires for Mediaset, Italy's largest media conglomerate, from 1998 to 2003. Her responsibilities included identifying, reporting and contextualizing emerging trends in architecture, art, music and design as well as fashion. She reported to the management of the Corporate Research and Development Department in Milan.
              </p>
              
              <p>
                Estefania has been a collector of Latin American modern geometric art, and her collection includes works by Tomas Maldonado, Lidy Prati, and Alfredo Hlito among others. Estefania is an advisory member at the Museum of Fine Arts of Argentina and has served as New York vice chair of Bienalsur, International biennial of Contemporary Art. Artists such as Enio Iommi, Martin Blaszko and Juan Mele were frequent visitors to her home in Buenos Aires.
              </p>
              
              <p>
                While in her last year of college, Estefania became the founder and partner of Foco Diseno. A design company that for five years, until she left Argentina to study in New York, provided comprehensive design services to high profile corporate clients including leading hotels, beauty services companies, manufacturers, law firms and investment banks. She did design, art and advertising coursework at Parsons School of Design and NYU in New York after graduating in 1994 from Universidad de Palermo in Buenos Aires with a degree in Design. She is the mother of two children and lives and works in Manhattan, New York.
              </p>
              
              {/* Image Placeholder */}
              <div className="my-12 text-center">
                <div className="bg-gray-200 h-96 w-full max-w-2xl mx-auto rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-500 text-lg">Image Placeholder - Oxford Photo</span>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Estefania with her son, Alexander, at Ashmolean museum in Oxford, UK.
                </p>
              </div>
              
              <blockquote className="text-center text-xl italic text-muted-foreground border-l-4 border-primary pl-6 my-8">
                "Art is a line around your thoughts." - Gustav Klimt
              </blockquote>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;