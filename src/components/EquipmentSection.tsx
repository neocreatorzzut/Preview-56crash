import { Check, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import gymEquipment from "@/assets/gym-equipment.jpg";
import gymInterior2 from "@/assets/gym-interior-2.jpg";
import gymInterior3 from "@/assets/gym-interior-3.jpg";



const EquipmentSection = () => {
  return (
    <section id="equipamiento" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Instalaciones
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            EQUIPAMIENTO DE{" "}
            <span className="text-gradient-primary">ALTA CALIDAD</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl leading-relaxed">
            Contamos con las mejores marcas del mercado para garantizar tu seguridad
            y maximizar tus resultados. Cada máquina está diseñada para llevarte al siguiente nivel.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="flex flex-col gap-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Text Block */}
            <div className="bg-card rounded-2xl p-8 flex flex-col justify-center border border-border">
              <BenefitItem
                title="Equipo de última generación"
                description="Para garantizar tu seguridad y maximizar tus resultados."
              />
              <BenefitItem
                title="Área de peso libre profesional"
                description="Cada máquina está diseñada para llevarte al siguiente nivel."
                className="mt-6"
              />
            </div>
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border-glow min-h-[280px]">
              <img
                src={gymEquipment}
                alt="Interior del gimnasio"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Row 2 - Inverted */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Image with badge */}
            <div className="relative rounded-2xl overflow-hidden border-glow min-h-[280px]">
              <img
                src={gymInterior2}
                alt="Recepción del gimnasio"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>
            {/* Text Block */}
            <div className="bg-card rounded-2xl p-8 flex flex-col justify-center border border-border">
              <BenefitItem
                title="Equipamiento cardiovascular premium"
                description="Equipamiento cardiovascular premium para tu entrenamiento."
              />
              <BenefitItem
                title="Zona de estiramiento y recuperación"
                description="Espacio dedicado a la recuperación muscular y flexibilidad."
                className="mt-6"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Text Block */}
            <div className="bg-card rounded-2xl p-8 flex flex-col justify-center border border-border">
              <BenefitItem
                title="Tecnología de tracking integrada"
                description="Monitorea tu progreso con tecnología de seguimiento avanzada."
              />
              <BenefitItem
                title="Mantenimiento constante"
                description="Todos los equipos se mantienen en óptimas condiciones."
                className="mt-6"
              />
            </div>
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border-glow min-h-[280px]">
              <img
                src={gymInterior3}
                alt="Área de entrenamiento"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Branches Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/sucursales"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold tracking-wide text-sm hover:scale-105 transition-transform duration-200 glow-primary"
          >
            <Building2 className="w-5 h-5" />
            ¡REVISA NUESTRAS SUCURSALES!
          </Link>
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ title, description, className = "" }: { title: string; description: string; className?: string }) => (
  <div className={`flex items-start gap-4 ${className}`}>
    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
      <Check className="w-4 h-4 text-primary" />
    </div>
    <div>
      <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm mt-1">{description}</p>
    </div>
  </div>
);

export default EquipmentSection;
