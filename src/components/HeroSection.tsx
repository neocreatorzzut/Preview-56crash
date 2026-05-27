import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAthlete from "@/assets/hero-athlete.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroAthlete}
          alt="Crash Training Gym"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-hero-glow" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

      {/* Geometric Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-primary/50 to-transparent" />
        <div className="absolute top-32 left-20 w-32 h-px bg-gradient-to-r from-primary/50 to-transparent" />
        <div className="absolute bottom-40 right-20 w-px h-60 bg-gradient-to-t from-primary/30 to-transparent" />
        <div className="absolute bottom-52 right-10 w-40 h-px bg-gradient-to-l from-primary/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10">
            <span className="text-sm font-medium tracking-wider text-primary uppercase">
              El gimnasio del futuro
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight">
            <span className="text-foreground">TRANSFORMA</span>
            <br />
            <span className="text-foreground">TU CUERPO,</span>
            <br />
            <span className="text-gradient-primary">ELEVA TU VIDA</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Descubre un espacio donde el Kickboxing y el fitness se fusionan para llevarte más allá de tus límites. Entrenamiento de élite, coaches certificados y equipamiento de última generación.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#planes">
              <Button variant="glow" size="xl" className="group w-full">
                Únete Ahora
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#servicios">
              <Button variant="outline" size="xl" className="w-full">
                Conoce Más
              </Button>
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/30 justify-center sm:justify-start">
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Clientes Activos</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">15+</p>
              <p className="text-sm text-muted-foreground">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground">Sucursales</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
