import type { Metadata } from "next";
import Blog from "@/routes/Blog";

export const metadata: Metadata = {
  title: "Blog — Entrenamiento, Nutrición y Lifestyle",
  description:
    "Artículos de entrenamiento, nutrición y lifestyle del equipo Crash Training. Consejos basados en evidencia para mejorar tu rendimiento.",
  openGraph: {
    title: "Crash Blog — Entrenamiento, Nutrición y Lifestyle",
    description:
      "Artículos de entrenamiento, nutrición y lifestyle del equipo Crash Training.",
    type: "website",
    images: [{ url: "/assets/logo.webp", alt: "Crash Training" }],
  },
};

export default Blog;
