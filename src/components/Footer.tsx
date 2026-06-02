import Link from "next/link";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const columns: Record<string, { label: string; href: string }[]> = {
  "El Gym": [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Planes", href: "/#planes" },
    { label: "Equipamiento", href: "/#equipamiento" },
  ],
  "Equipo": [
    { label: "Coaches", href: "/equipo" },
    { label: "Horarios", href: "/horarios" },
    { label: "Sucursales", href: "/sucursales" },
    { label: "Contacto", href: "/#contacto" },
  ],
  "Legal": [
    { label: "Política de Privacidad", href: "#" },
    { label: "Términos y Condiciones", href: "#" },
    { label: "Política de Cookies", href: "#" },
    { label: "HABEAS DATA", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }} className="pt-14">
      <div className="container mx-auto px-4">

        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-block mb-5">
              <img
                src="/assets/logo.webp"
                alt="Crash Training"
                className="h-12 w-auto"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p style={{ color: "#555", fontSize: "0.65rem", lineHeight: 1.8, letterSpacing: "0.04em", maxWidth: 220 }} className="mb-6">
              Transformando vidas desde 2014. El gimnasio del futuro está aquí.
              Únete a nuestra comunidad de más de 500 atletas.
            </p>
            <div className="flex gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  style={{ border: "1px solid #2a2a2a", color: "#555", width: 36, height: 36 }}
                  className="flex items-center justify-center hover:border-white hover:text-white transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(columns).map(([title, items]) => (
            <div key={title}>
              <span
                className="font-display uppercase block mb-5"
                style={{ fontSize: "0.82rem", letterSpacing: "0.22em", color: "#f0f0f0" }}
              >
                {title}
              </span>
              <ul className="flex flex-col" style={{ gap: "0.6rem" }}>
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="group flex items-center transition-colors duration-200"
                      style={{ color: "#555", fontSize: "0.65rem", letterSpacing: "0.08em", gap: "0.4rem" }}
                    >
                      <span
                        className="group-hover:text-white transition-colors duration-200"
                        style={{ color: "#2a2a2a", fontSize: "0.5rem" }}
                      >
                        ▸
                      </span>
                      <span className="group-hover:text-white transition-colors duration-200">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{ borderTop: "1px solid #1a1a1a" }}
          className="py-5 flex justify-between items-center flex-wrap gap-3"
        >
          <span style={{ color: "#555", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>
            © 2026 Crash Training — Todos los derechos reservados
          </span>
          <div className="flex items-center gap-3">
            <span style={{ color: "#555", fontSize: "0.58rem", letterSpacing: "0.1em" }}>
              Hecho por Klauscorp Dynamics ®
            </span>
            <span
              style={{
                color: "#555",
                fontSize: "0.58rem",
                border: "1px solid #2a2a2a",
                padding: "0.2rem 0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Antioquia · Colombia
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
