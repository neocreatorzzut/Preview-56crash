import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import teamGroup from "@/assets/team-group.jpg";

const CoachesPreSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Nuestro Equipo
              </span>
              <div className="w-12 h-px bg-primary" />
            </div>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              TRABAJAMOS CON{" "}
              <span className="text-gradient-primary glow-text">COACHES PROFESIONALES</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Cada coach en Crash Training está certificado y apasionado por ayudarte a alcanzar
              tus metas. Tu transformación es nuestra misión.
            </p>
          </div>

          {/* Team Photo */}
          <div className="relative rounded-2xl overflow-hidden border border-border/50 group">
            <img
              src={teamGroup}
              alt="Equipo Crash Training"
              className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

            {/* Overlay CTA */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center">
              <Link to="/equipo">
                <Button variant="glow" size="xl" className="group/btn">
                  CONOCE AL EQUIPO
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachesPreSection;
