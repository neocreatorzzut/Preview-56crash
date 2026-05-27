import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const quickLinks = [
    { label: "Inicio", href: "#", type: "anchor" },
    { label: "Servicios", href: "#servicios", type: "anchor" },
    { label: "Planes", href: "#planes", type: "anchor" },
    { label: "Coaches", href: "/equipo", type: "route" },
    { label: "Contacto", href: "#contacto", type: "anchor" },
  ];

  const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-card border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block mb-6">
              <img src={logo} alt="Crash Training" className="h-12 w-auto" />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transformando vidas desde 2014. El gimnasio del futuro está aquí. 
              Únete a nuestra comunidad de más de 500 atletas.
            </p>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all"
                >
                  <social.icon className="w-5 h-5 text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 tracking-wide">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.type === "route" ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Crash Training. Todos los derechos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Hecho por Klauscorp Dynamics ®
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
