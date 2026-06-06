import "@/styles/waitlist.css";
import type { Metadata } from "next";
import WaitlistCrashApp from "@/routes/WaitlistCrashApp";

export const metadata: Metadata = {
  title: "App — Waitlist",
  description:
    "Regístrate en la lista de espera de la Crash Training App. Calendario de entrenos, mapa muscular, seguimiento de progreso y contenido de kickboxing. Precio especial para los primeros.",
  openGraph: {
    title: "Crash Training App — Únete a la Waitlist",
    description:
      "La app de entrenamiento de Crash Training llega pronto. Regístrate ahora y bloquea 3 meses de acceso completo a precio especial.",
    type: "website",
    images: [{ url: "/assets/logo.webp", alt: "Crash Training" }],
  },
};

export default function Page() {
  return <WaitlistCrashApp />;
}
