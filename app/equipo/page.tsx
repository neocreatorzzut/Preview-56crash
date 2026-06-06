import type { Metadata } from "next";
import Equipo from "@/routes/Equipo";

export const metadata: Metadata = {
  title: "Equipo de Coaches",
  description:
    "Conoce al equipo de coaches certificados de Crash Training. Especialistas en kickboxing, entrenamiento funcional y artes marciales en Sabaneta, Antioquia.",
  openGraph: {
    title: "Equipo de Coaches — Crash Training",
    description:
      "Especialistas en kickboxing, entrenamiento funcional y artes marciales en Sabaneta, Antioquia.",
    type: "website",
    images: [{ url: "/assets/logo.webp", alt: "Crash Training" }],
  },
};

export default function Page() {
  return <Equipo />;
}
