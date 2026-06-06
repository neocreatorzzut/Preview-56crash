import type { Metadata } from "next";
import Horarios from "@/routes/Horarios";

export const metadata: Metadata = {
  title: "Horarios 2026",
  description:
    "Consulta los horarios de clases de Crash Training: kickboxing, entrenamiento funcional y más. Abierto de lunes a sábado en nuestras 3 sedes en Sabaneta.",
  openGraph: {
    title: "Horarios 2026 — Crash Training",
    description:
      "Clases de kickboxing y entrenamiento funcional. Lunes a sábado en 3 sedes en Sabaneta, Antioquia.",
    type: "website",
    images: [{ url: "/assets/logo.webp", alt: "Crash Training" }],
  },
};

export default function Page() {
  return <Horarios />;
}
