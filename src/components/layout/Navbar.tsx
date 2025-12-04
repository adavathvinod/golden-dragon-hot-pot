import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Our Story", href: "/about" },
  { name: "Location", href: "/location" },
  { name: "Private Events", href: "/events" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-6"
      )}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-2xl md:text-3xl font-chinese font-bold text-gold-gradient">
            千王府
          </span>
          <span className="hidden sm:block text-sm font-serif text-muted-foreground tracking-widest uppercase">
            Qian Wang Fu
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium tracking-wide link-underline transition-colors",
                location.pathname === link.href
                  ? "text-accent"
                  : "text-foreground/80 hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+14152178888" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">(415) 217-8888</span>
          </a>
          <Button variant="hero" size="sm" asChild>
            <a href="https://www.opentable.com" target="_blank" rel="noopener noreferrer">
              Reserve
            </a>
          </Button>
          <Button variant="heroFilled" size="sm" asChild>
            <a href="https://order.toasttab.com" target="_blank" rel="noopener noreferrer">
              Order Online
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[72px] bg-background/98 backdrop-blur-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-lg font-medium py-3 border-b border-border transition-colors",
                location.pathname === link.href
                  ? "text-accent"
                  : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <Button variant="hero" size="lg" className="w-full" asChild>
              <a href="https://www.opentable.com" target="_blank" rel="noopener noreferrer">
                Reserve a Table
              </a>
            </Button>
            <Button variant="heroFilled" size="lg" className="w-full" asChild>
              <a href="https://order.toasttab.com" target="_blank" rel="noopener noreferrer">
                Order Online
              </a>
            </Button>
            <a href="tel:+14152178888" className="flex items-center justify-center gap-2 py-3 text-gold">
              <Phone className="w-5 h-5" />
              <span>(415) 217-8888</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
