import { Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

const schedule = [
  { time: "5-6 AM", classes: ["Funcional", "Funcional", "Funcional", "Funcional", "Funcional", "Cerrado"] },
  { time: "6-7 AM", classes: ["Funcional", "Funcional", "Funcional", "Funcional", "Funcional", "Cerrado"] },
  { time: "7-8 AM", classes: ["Funcional", "Funcional", "Funcional", "Funcional", "Funcional", "Funcional"] },
  { time: "8-9 AM", classes: ["Funcional", "Funcional", "Funcional", "Funcional", "Funcional", "Funcional"] },
  { time: "9-10 AM", classes: ["Kickboxing", "Kickboxing", "Kickboxing", "Kickboxing", "Kickboxing", "Funcional"] },
  { time: "10-11 AM", classes: ["Cerrado", "Cerrado", "Cerrado", "Cerrado", "Cerrado", "Kickboxing"] },
  { time: "5-6 PM", classes: ["Kickboxing", "Kickboxing", "Funcional", "Kickboxing", "Funcional", "Cerrado"] },
  { time: "6-7 PM", classes: ["Funcional", "Funcional", "Funcional", "Funcional", "Funcional", "Cerrado"] },
  { time: "7-8 PM", classes: ["Funcional", "Funcional", "Funcional", "Funcional", "Funcional", "Cerrado"] },
  { time: "8-9 PM", classes: ["Funcional", "Funcional", "Kickboxing", "Funcional", "Kickboxing", "Cerrado"] },
];

const classColors: Record<string, string> = {
  Funcional: "bg-primary/20 text-primary border-primary/30",
  Kickboxing: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Cerrado: "bg-muted/50 text-muted-foreground border-border",
};

const Horarios = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-28 pb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Planifica tu semana
              </span>
              <div className="w-12 h-px bg-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              HORARIO <span className="text-gradient-primary">2026</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Nuestras clases tienen una duración de una hora. Durante la vigencia de tu plan, puedes acceder a una o más clases el mismo día.
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(classColors).map(([name, colors]) => (
              <div key={name} className={`px-3 py-1.5 rounded-full border text-xs font-medium ${colors}`}>
                {name}
              </div>
            ))}
          </div>

          {/* Schedule Table - Desktop */}
          <div className="hidden md:block rounded-2xl border border-border overflow-hidden bg-card">
            <div className="grid grid-cols-7">
              <div className="p-4 bg-muted/50 border-b border-border flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-display font-semibold text-sm">Hora</span>
              </div>
              {days.map((day) => (
                <div key={day} className="p-4 bg-muted/50 border-b border-l border-border text-center">
                  <span className="font-display font-semibold text-sm">{day}</span>
                </div>
              ))}

              {schedule.map((row, i) => (
                <div key={i} className="contents">
                  <div className="p-4 border-b border-border flex items-center">
                    <span className="font-display text-sm font-medium text-muted-foreground">{row.time}</span>
                  </div>
                  {row.classes.map((cls, j) => (
                    <div key={`${i}-${j}`} className="p-3 border-b border-l border-border flex items-center justify-center">
                      <span className={`px-3 py-1.5 rounded-lg border text-xs font-medium ${classColors[cls]}`}>
                        {cls}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Cards - Mobile */}
          <div className="md:hidden space-y-4">
            {schedule.map((row, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="font-display font-semibold text-sm">{row.time}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {row.classes.map((cls, j) => (
                    <div key={j} className={`px-3 py-2 rounded-lg border text-xs font-medium text-center ${classColors[cls]}`}>
                      <span className="block text-[10px] text-muted-foreground mb-0.5">{days[j]}</span>
                      {cls}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            * Los ingresos sin utilizar durante el plazo no son acumulables.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Horarios;
