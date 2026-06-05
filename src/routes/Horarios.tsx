"use client";

import { useState } from "react";
import { ArrowLeft, Sun, Moon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const daysShort = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

const morningSlots = [
  { time: "5–6 AM",   classes: ["Funcional",  "Funcional",  "Funcional",  "Funcional",  "Funcional",  "Cerrado"   ] },
  { time: "6–7 AM",   classes: ["Funcional",  "Funcional",  "Funcional",  "Funcional",  "Funcional",  "Cerrado"   ] },
  { time: "7–8 AM",   classes: ["Funcional",  "Funcional",  "Funcional",  "Funcional",  "Funcional",  "Funcional" ] },
  { time: "8–9 AM",   classes: ["Funcional",  "Funcional",  "Funcional",  "Funcional",  "Funcional",  "Funcional" ] },
  { time: "9–10 AM",  classes: ["Kickboxing", "Kickboxing", "Kickboxing", "Kickboxing", "Kickboxing", "Funcional" ] },
  { time: "10–11 AM", classes: ["Cerrado",    "Cerrado",    "Cerrado",    "Cerrado",    "Cerrado",    "Kickboxing"] },
];

const eveningSlots = [
  { time: "5–6 PM",  classes: ["Kickboxing", "Kickboxing", "Funcional",  "Kickboxing", "Funcional",  "Cerrado"] },
  { time: "6–7 PM",  classes: ["Funcional",  "Funcional",  "Funcional",  "Funcional",  "Funcional",  "Cerrado"] },
  { time: "7–8 PM",  classes: ["Funcional",  "Funcional",  "Funcional",  "Funcional",  "Funcional",  "Cerrado"] },
  { time: "8–9 PM",  classes: ["Funcional",  "Funcional",  "Kickboxing", "Funcional",  "Kickboxing", "Cerrado"] },
];

const allSlots = [...morningSlots, ...eveningSlots];

type ClassType = "Funcional" | "Kickboxing" | "Cerrado";

/* ---------- Desktop cell ---------- */
function DesktopCell({ cls }: { cls: string }) {
  if (cls === "Cerrado") {
    return (
      <div className="h-full flex items-center justify-center">
        <span className="text-[11px] text-muted-foreground/40 select-none">—</span>
      </div>
    );
  }
  if (cls === "Kickboxing") {
    return (
      <div className="h-full flex items-center justify-center px-2 py-1.5">
        <div className="w-full rounded-lg bg-amber-500/10 border-l-2 border-amber-400/70 pl-2.5 pr-2 py-1.5">
          <span className="text-[11px] font-semibold text-amber-300/90 leading-none">{cls}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="h-full flex items-center justify-center px-2 py-1.5">
      <div className="w-full rounded-lg bg-primary/8 border-l-2 border-primary/60 pl-2.5 pr-2 py-1.5">
        <span className="text-[11px] font-semibold text-primary/90 leading-none">{cls}</span>
      </div>
    </div>
  );
}

/* ---------- Desktop section ---------- */
function DesktopSection({
  label,
  icon,
  rows,
}: {
  label: string;
  icon: React.ReactNode;
  rows: typeof morningSlots;
}) {
  return (
    <>
      {/* Section header row */}
      <div className="contents">
        <div className="col-span-7 flex items-center gap-2 px-4 py-2 bg-muted/30 border-b border-border">
          {icon}
          <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
            {label}
          </span>
        </div>
      </div>

      {rows.map((row, i) => (
        <div key={i} className="contents">
          <div className="p-3 border-b border-border flex items-center">
            <span className="font-display text-xs font-semibold text-foreground/70 whitespace-nowrap">
              {row.time}
            </span>
          </div>
          {row.classes.map((cls, j) => (
            <div
              key={`${i}-${j}`}
              className="border-b border-l border-border min-h-[48px]"
            >
              <DesktopCell cls={cls} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

/* ---------- Mobile day view ---------- */
function MobileSlotRow({ time, cls }: { time: string; cls: string }) {
  if (cls === "Cerrado") {
    return (
      <div className="flex items-center justify-between py-3 border-b border-border/40 last:border-0">
        <span className="font-display text-sm font-semibold text-foreground/50">{time}</span>
        <span className="text-xs text-muted-foreground/40">Cerrado</span>
      </div>
    );
  }

  const isKick = cls === "Kickboxing";
  return (
    <div className="flex items-center justify-between py-3 border-b border-border/40 last:border-0">
      <span className="font-display text-sm font-semibold text-foreground/80">{time}</span>
      <span
        className={`text-xs font-semibold px-3 py-1 rounded-full ${
          isKick
            ? "bg-amber-500/15 text-amber-300 border border-amber-400/20"
            : "bg-primary/12 text-primary border border-primary/20"
        }`}
      >
        {cls}
      </span>
    </div>
  );
}

/* ---------- Main component ---------- */
const Horarios = () => {
  const [activeDay, setActiveDay] = useState(0);

  const daySlots = allSlots.map((row) => ({
    time: row.time,
    cls: row.classes[activeDay] as ClassType,
  }));

  const morningDay = morningSlots.map((r) => ({ time: r.time, cls: r.classes[activeDay] as ClassType }));
  const eveningDay = eveningSlots.map((r) => ({ time: r.time, cls: r.classes[activeDay] as ClassType }));

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-28 pb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            VOLVER AL INICIO
          </a>

          {/* Header */}
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
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
              Clases de una hora. Con tu plan activo podés asistir a una o más clases el mismo día.
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-primary/60 border-l-2 border-primary inline-block" />
              <span className="text-xs text-muted-foreground font-medium">Funcional</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-amber-500/40 border-l-2 border-amber-400 inline-block" />
              <span className="text-xs text-muted-foreground font-medium">Kickboxing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-muted/30 inline-block" />
              <span className="text-xs text-muted-foreground/50 font-medium">Sin clase</span>
            </div>
          </div>

          {/* ── DESKTOP TABLE ── */}
          <div className="hidden md:block overflow-hidden rounded-2xl bg-card card-glass">
            <div className="grid grid-cols-7">
              {/* Header */}
              <div className="p-4 bg-muted/40 border-b border-border" />
              {days.map((day) => (
                <div key={day} className="p-4 bg-muted/40 border-b border-l border-border text-center">
                  <span className="font-display font-bold text-xs tracking-wide text-foreground/80">
                    {day}
                  </span>
                </div>
              ))}

              <DesktopSection
                label="Mañana"
                icon={<Sun className="w-3.5 h-3.5 text-amber-400/70" />}
                rows={morningSlots}
              />
              <DesktopSection
                label="Tarde / Noche"
                icon={<Moon className="w-3.5 h-3.5 text-primary/70" />}
                rows={eveningSlots}
              />
            </div>
          </div>

          {/* ── MOBILE VIEW ── */}
          <div className="md:hidden">
            {/* Day selector */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide">
              {days.map((day, i) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(i)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeDay === i
                      ? "bg-primary text-white shadow-[0_0_12px_hsl(228_90%_51%/0.4)]"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted border border-border/60"
                  }`}
                >
                  {daysShort[i]}
                </button>
              ))}
            </div>

            {/* Day card */}
            <div className="rounded-2xl bg-card card-glass overflow-hidden">
              {/* Day title */}
              <div className="px-5 py-4 border-b border-border/60 bg-muted/20">
                <span className="font-display text-base font-bold tracking-wide">
                  {days[activeDay]}
                </span>
              </div>

              <div className="px-5">
                {/* Morning */}
                <div className="pt-4 pb-1">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Sun className="w-3.5 h-3.5 text-amber-400/60" />
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/60">
                      Mañana
                    </span>
                  </div>
                  {morningDay.map(({ time, cls }) => (
                    <MobileSlotRow key={time} time={time} cls={cls} />
                  ))}
                </div>

                {/* Divider */}
                <div className="my-2 border-t border-border/30" />

                {/* Evening */}
                <div className="pt-1 pb-4">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Moon className="w-3.5 h-3.5 text-primary/60" />
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground/60">
                      Tarde / Noche
                    </span>
                  </div>
                  {eveningDay.map(({ time, cls }) => (
                    <MobileSlotRow key={time} time={time} cls={cls} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground/50 mt-8">
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
