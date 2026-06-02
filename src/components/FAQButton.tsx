"use client";

import { useState } from "react";
import { X, ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "¿Cuáles son los horarios del gimnasio?",
    a: "Lunes a Viernes: 5:00 AM – 9:00 PM. Sábados: 7:00 AM – 11:00 AM. Domingos cerrado.",
  },
  {
    q: "¿Qué planes de membresía tienen?",
    a: "Tiquetera (12 ingresos/mes), Mensualidad (ingresos ilimitados), Pareja, y planes de ahorro por Trimestre, Semestre y Anualidad. Ver sección Planes para precios.",
  },
  {
    q: "¿Puedo visitar las instalaciones antes de inscribirme?",
    a: "¡Claro! Agéndate por WhatsApp al +57 312 807 7046 o usa el botón de contacto en la página.",
  },
  {
    q: "¿Hay clases para principiantes?",
    a: "Sí. Todas nuestras clases se adaptan al nivel del atleta. Los coaches ajustan la intensidad según tu condición física.",
  },
  {
    q: "¿Qué incluyen las clases de Kickboxing?",
    a: "Técnicas de puños y patadas, trabajo cardiovascular y coordinación. No se requiere experiencia previa.",
  },
  {
    q: "¿En qué sedes puedo entrenar?",
    a: "3 sedes en Sabaneta: Calle Larga (Cra 47 Cll 74 Sur 36), Loma Linda (Cll 70 Sur Cra 38-374) y Alto de las Flores (Cll 61 Sur #40-05).",
  },
  {
    q: "¿Los ingresos sin usar se acumulan?",
    a: "No. Los ingresos no utilizados durante la vigencia del plan no son acumulables ni transferibles.",
  },
  {
    q: "¿Puedo ir a más de una clase el mismo día?",
    a: "Sí. Con cualquier plan activo puedes tomar una o más clases el mismo día.",
  },
  {
    q: "¿Cómo me inscribo?",
    a: "Escríbenos por WhatsApp, visita una de nuestras sedes o usa el botón '¡AGENDA TU VISITA!' en la sección de contacto.",
  },
];

export default function FAQButton() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <>
      {/* FAQ Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Preguntas Frecuentes"
        className="group flex h-14 w-14 items-center justify-center transition-transform duration-200 hover:scale-110"
        style={{
          background: "rgba(0,0,0,0.45)",
          border: "1px solid rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        {/* Placeholder icon — replace src when you send the asset */}
        <HelpCircle className="h-6 w-6 text-white" />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[200]"
          style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", background: "rgba(0,0,0,0.25)" }}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Popup panel */}
      {open && (
        <div
          className="fixed z-[201] bg-white text-black overflow-hidden flex flex-col"
          style={{
            /* Mobile: full width with 16px margin, max 80vh */
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(420px, calc(100vw - 32px))",
            maxHeight: "80vh",
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
            <h2 className="text-base font-bold uppercase tracking-widest text-black">
              Preguntas Frecuentes
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <X className="h-4 w-4 text-black" />
            </button>
          </div>

          {/* FAQ list — scrollable */}
          <div className="overflow-y-auto flex-1">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors gap-4"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <span className="text-sm font-medium text-black leading-snug">{faq.q}</span>
                  <ChevronDown
                    className="h-4 w-4 text-gray-400 shrink-0 transition-transform duration-200"
                    style={{ transform: expanded === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>
                {expanded === i && (
                  <div className="px-6 pb-4">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
