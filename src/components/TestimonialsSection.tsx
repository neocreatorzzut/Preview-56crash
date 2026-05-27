import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Users, MapPin, Award, Clock } from "lucide-react";

import community1 from "@/assets/community-1.jpg";
import community2 from "@/assets/community-2.jpg";
import community3 from "@/assets/community-3.jpg";
import community4 from "@/assets/community-4.jpg";
import community5 from "@/assets/community-5.jpg";
import community6 from "@/assets/community-6.jpg";

const testimonials = [
  {
    name: "Andrea Martínez",
    role: "Miembro desde 2022",
    quote: "Crash Training cambió mi vida por completo. Bajé 20kg y me siento mejor que nunca. Los coaches son increíbles.",
    image: "AM",
  },
  {
    name: "Roberto Sánchez",
    role: "Miembro desde 2021",
    quote: "El mejor gimnasio de la ciudad. El equipamiento es de primera y el ambiente te motiva a dar lo mejor.",
    image: "RS",
  },
  {
    name: "Lucía Fernández",
    role: "Miembro desde 2023",
    quote: "Las clases de rumba son lo máximo. Nunca pensé que hacer ejercicio sería tan divertido.",
    image: "LF",
  },
];

const communityPhotos = [community1, community2, community3, community4, community5, community6];

const stats = [
  { value: "500+", label: "Clientes Felices", icon: Users },
  { value: "3", label: "Sucursales Abiertas", icon: MapPin },
  { value: "4+", label: "Coaches Certificados", icon: Award },
  { value: "15+", label: "Años de Experiencia", icon: Clock },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollPhotos = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Testimonios
              </span>
              <div className="w-12 h-px bg-primary" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              LO QUE DICEN <span className="text-gradient-primary">NUESTROS CLIENTES</span>
            </h2>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-card border border-border/50 p-8 md:p-12">
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
              
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-primary">
                  {testimonials[currentIndex].image}
                </div>
                <div>
                  <p className="font-display font-bold text-lg">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-6" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Community Photos */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              NUESTRA <span className="text-gradient-primary">COMUNIDAD</span>
            </h3>
          </div>

          <div className="relative">
            <button
              onClick={() => scrollPhotos("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-border bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide px-8 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {communityPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 h-80 md:w-72 md:h-96 rounded-xl overflow-hidden border border-border/50 snap-center"
                >
                  <img
                    src={photo}
                    alt={`Comunidad Crash Training ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollPhotos("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full border border-border bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-display text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
