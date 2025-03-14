
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Pricing", path: "/pricing" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="relative z-10 flex items-center space-x-2"
          aria-label="ScoopLearn Logo"
        >
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-scoop-600 to-scoop-500 bg-clip-text text-transparent transition-all duration-300">
            ScoopLearn
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive(link.path)
                  ? "text-scoop-600 bg-scoop-50"
                  : "text-gray-700 hover:text-scoop-600 hover:bg-scoop-50/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="font-medium">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button
              size="sm"
              className="bg-scoop-500 hover:bg-scoop-600 text-white font-medium"
            >
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-10 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute inset-x-0 top-0 z-0 bg-white shadow-lg rounded-b-xl py-20 px-6 animate-slide-down">
            <nav className="flex flex-col space-y-3 mb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-md text-base font-medium transition-all ${
                    isActive(link.path)
                      ? "text-scoop-600 bg-scoop-50"
                      : "text-gray-700 hover:text-scoop-600 hover:bg-scoop-50/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-3">
              <Link to="/login" className="w-full">
                <Button variant="outline" className="w-full justify-center">
                  Login
                </Button>
              </Link>
              <Link to="/register" className="w-full">
                <Button
                  className="w-full justify-center bg-scoop-500 hover:bg-scoop-600"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
