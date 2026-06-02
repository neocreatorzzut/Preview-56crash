import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: { href: string; label: string; target?: string }[] = [
    { href: "/#servicios", label: "Servicios" },
    { href: "/#equipamiento", label: "Equipamiento" },
    { href: "/#planes", label: "Planes" },
    { href: "https://wa.me/573128077046", label: "Contacto", target: "_blank" },
  ];

  const pageLinks = [
    { href: "/sucursales", label: "Sucursales" },
    { href: "/horarios", label: "Horarios" },
    { href: "/equipo", label: "Equipo" },
    { href: "/waitlist_crash_app", label: "App" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/assets/logo.webp" alt="Crash Training" className="h-10 w-auto" loading="lazy"
          decoding="async"
        />
        </Link>

        {/* Menu Toggle (all screen sizes) */}
        <button
          className="text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="glass mt-2 mx-4 p-4 animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {pageLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href="/#planes" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="glow" className="w-full mt-2">
                Únete Ahora
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
