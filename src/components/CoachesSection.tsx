import { Instagram, Twitter } from "lucide-react";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import coach3 from "@/assets/coach-3.jpg";

const coaches = [
  {
    name: "José Márquez (Nacho)",
    specialty: "Kickboxing y Funcional",
    certifications: ["Fundador de CRASH", "Campeón de Lucha Olímpica"],
    image: coach1,
    bio: "Técnico en actividad física y deporte, entrenador de lucha olímpica y campeón de lucha olímpica. 45 años y fundador de CRASH con 15 años de trayectoria.",
  },
  {
    name: "Leidy Johana Foronda Ortiz (Joha)",
    specialty: "Administración",
    certifications: ["Lic. Educación Preescolar", "16 años de experiencia"],
    image: coach2,
    bio: "Licenciada en educación preescolar con 16 años de experiencia. Se desempeña como Administradora y lleva 4 años en CRASH.",
  },
  {
    name: "Juan Diego Foronda (Juandi)",
    specialty: "Funcional",
    certifications: ["Lic. Educación Física", "Preparador Físico"],
    image: coach3,
    bio: "Licenciado en educación básica con énfasis en educación física, recreación y deporte. Docente de fútbol y preparador físico especializado en pliometría. 26 años, lleva 4 años en CRASH.",
  },
  {
    name: "Juan José Colorado (Colo)",
    specialty: "Funcional",
    certifications: ["Profesional en Actividad Física", "Entrenador Personalizado"],
    image: coach1,
    bio: "Profesional en actividad física y deporte, y entrenador de clases personalizadas físicas y deportivas. 24 años, lleva 3 años en CRASH.",
  },
  {
    name: "Mateo Rincón (Teo)",
    specialty: "Kickboxing y Funcional",
    certifications: ["Entrenador de Fuerza", "Instructor de Boxeo"],
    image: coach2,
    bio: "Entrenador de fuerza y acondicionamiento físico con énfasis en deportes de combate, entrenador de boxeo e instructor de movimiento. 35 años, lleva un año y medio en CRASH.",
  },
];

const CoachesSection = () => {
  return (
    <section id="coaches" className="py-16 relative">
      <div className="container mx-auto px-4">

        {/* Coaches Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                
                {/* Social Icons - Show on hover */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-1">{coach.name}</h3>
                <p className="text-primary text-sm font-medium mb-3">{coach.specialty}</p>
                <p className="text-muted-foreground text-sm mb-4">{coach.bio}</p>
                
                {/* Certifications */}
                <div className="flex flex-wrap gap-2">
                  {coach.certifications.map((cert, certIndex) => (
                    <span
                      key={certIndex}
                      className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-primary/20 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
