import { Dumbbell, Music, Flame, Swords, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import personalTraining from "@/assets/personal-training-new.png";
import danceClass from "@/assets/dance-class.jpg";
import conditioning from "@/assets/conditioning.jpg";
import kickboxing from "@/assets/kickboxing.png";

const services = [
  {
    icon: Dumbbell,
    title: "Entrenamiento Personalizado",
    description: "Planes de entrenamiento diseñados específicamente para tus objetivos. Seguimiento continuo y ajustes según tu progreso.",
    image: personalTraining,
  },
  {
    icon: Music,
    title: "Tardes de Rumba",
    description: "Clases grupales de baile con energía contagiosa. Quema calorías mientras te diviertes al ritmo de la mejor música.",
    image: danceClass,
  },
  {
    icon: Flame,
    title: "Acondicionamiento Físico",
    description: "Sesiones de alta intensidad para mejorar resistencia, fuerza y flexibilidad. Transforma tu cuerpo por completo.",
    image: conditioning,
  },
  {
    icon: Swords,
    title: "Kickboxing",
    description: "Entrena técnicas de combate que combinan golpes de puño y patadas. Mejora tu coordinación, resistencia y confianza mientras liberas estrés.",
    image: kickboxing,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-16 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Qué Ofrecemos
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            NUESTROS <span className="text-gradient-primary">SERVICIOS</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-12">
                <div className="w-14 h-14 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 tracking-wide">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/10 blur-[60px]" />
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/horarios"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold tracking-wide text-sm hover:scale-105 transition-transform duration-200 glow-primary"
          >
            <Calendar className="w-5 h-5" />
            VER HORARIOS DE CLASES
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
