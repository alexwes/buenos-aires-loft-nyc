import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Interiors", path: "/interiors" },
    { name: "Artworks", path: "/artworks" },
  ];

  return (
    <nav className="bg-background border-b border-border py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <ul className="flex justify-center space-x-12">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:text-primary",
                  location.pathname === item.path
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;