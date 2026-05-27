import { Check, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const WHATSAPP_NUMBER = "573128077046";

const monthlyPlans = [
  {
    name: "Tiquetera",
    price: "110.000",
    period: "/mes",
    description: "Ideal para entrenar a tu ritmo",
    features: [
      "12 ingresos mensuales",
      "Clases de 1 hora",
      "Acceso a 1 o más clases el mismo día",
      "Ubicación Sabaneta",
    ],
    highlighted: false,
    icon: Zap,
  },
  {
    name: "Mensualidad",
    price: "160.000",
    period: "/mes",
    description: "El plan más popular para resultados reales",
    features: [
      "Ingresos ILIMITADOS",
      "Clases de 1 hora",
      "Acceso a 1 o más clases el mismo día",
      "Ubicación Sabaneta",
    ],
    highlighted: true,
    icon: Star,
  },
  {
    name: "Pareja",
    price: "280.000",
    period: "/mes",
    description: "Entrena en compañía y ahorra",
    features: [
      "Ingresos ILIMITADOS para dos personas",
      "Clases de 1 hora",
      "Acceso a 1 o más clases el mismo día",
      "Ubicación Sabaneta",
    ],
    highlighted: false,
    icon: Users,
  },
];

const savingsPlans = [
  {
    name: "Trimestre",
    price: "384.000",
    period: "pago único",
    description: "3 meses de acceso con ahorro",
    features: [
      "3 meses de acceso",
      "Ahorro del 20% vs mensualidad individual",
      "Ingresos ilimitados",
      "Clases de 1 hora",
    ],
    highlighted: false,
    savings: "20%",
  },
  {
    name: "Semestre",
    price: "720.000",
    period: "pago único",
    description: "6 meses de acceso con gran ahorro",
    features: [
      "6 meses de acceso",
      "Ahorro del 25% vs mensualidad individual",
      "Ingresos ilimitados",
      "Clases de 1 hora",
    ],
    highlighted: false,
    savings: "25%",
  },
  {
    name: "Anualidad",
    price: "1.344.000",
    period: "pago único",
    description: "12 meses con el máximo ahorro",
    features: [
      "12 meses de acceso",
      "Máximo ahorro",
      "Ingresos ilimitados",
      "Clases de 1 hora",
    ],
    highlighted: true,
    savings: "Mejor Valor",
  },
];

const getWhatsAppUrl = (planName: string, planPrice: string) => {
  const message = encodeURIComponent(
    `¡Hola! Estoy interesado en el plan *${planName}* ($${planPrice}). Me gustaría obtener más información.`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

const PlansSection = () => {
  const [activeTab, setActiveTab] = useState<"monthly" | "savings">("monthly");

  const plans = activeTab === "monthly" ? monthlyPlans : savingsPlans;

  return (
    <section id="planes" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Membresías
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            NUESTROS <span className="text-gradient-primary">PLANES</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Elige el plan que mejor se adapte a tus objetivos. Sin contratos largos, cancela cuando quieras.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex rounded-xl bg-card border border-border p-1.5 gap-1">
            <button
              onClick={() => setActiveTab("monthly")}
              className={`px-6 py-2.5 rounded-lg text-sm font-display font-medium tracking-wide uppercase transition-all ${
                activeTab === "monthly"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Planes Mensuales
            </button>
            <button
              onClick={() => setActiveTab("savings")}
              className={`px-6 py-2.5 rounded-lg text-sm font-display font-medium tracking-wide uppercase transition-all ${
                activeTab === "savings"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Planes de Ahorro
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={`${activeTab}-${index}`}
              className={`relative rounded-2xl p-8 transition-all duration-500 animate-fade-in-up ${
                plan.highlighted
                  ? "bg-primary/10 border-2 border-primary glow-primary scale-105 z-10"
                  : "bg-card border border-primary/30 hover:border-primary/60"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-current" />
                  {activeTab === "monthly" ? "Recomendado" : "Mejor Valor"}
                </div>
              )}

              {/* Savings badge */}
              {activeTab === "savings" && "savings" in plan && !plan.highlighted && (
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-semibold border border-accent/30">
                  Ahorra {(plan as any).savings}
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="font-display text-4xl md:text-5xl font-bold text-gradient-primary">
                    ${plan.price}
                  </span>
                </div>
                <span className="text-muted-foreground text-sm mt-1 block">
                  {plan.period}
                </span>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href={getWhatsAppUrl(plan.name, plan.price)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={plan.highlighted ? "glow" : "outline"}
                  className="w-full"
                  size="lg"
                >
                  Elegir Plan
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-muted-foreground text-xs mt-10">
          * Los ingresos no utilizados no son acumulables.
        </p>
      </div>
    </section>
  );
};

export default PlansSection;
