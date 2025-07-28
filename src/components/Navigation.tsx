
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about-me", label: "About Me" },
    { path: "/personal-projects", label: "Personal Projects" },
    { path: "/team-projects", label: "Team Projects" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 transition-all duration-500 shadow-lg ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105">
            Nikhil - Eng
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 group ${
                  location.pathname === link.path ? "text-white font-semibold" : ""
                }`}
              >
                {link.label}
                {/* Animated underline */}
                <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? "w-full" : ""
                }`}></span>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-blue-400/10 rounded-md scale-0 group-hover:scale-110 transition-transform duration-300 blur-sm"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white hover:bg-gray-800/50 transition-all duration-300 hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative">
              {isMobileMenuOpen ? 
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" /> : 
                <Menu className="h-6 w-6 transition-transform duration-300" />
              }
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-60 py-4 border-t border-gray-700/50" : "max-h-0"
        }`}>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-2 hover:scale-105 relative group animate-fade-in-left ${
                  location.pathname === link.path ? "text-white font-semibold" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
                <div className="absolute inset-0 bg-blue-400/5 rounded scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
