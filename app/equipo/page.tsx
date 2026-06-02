import type { Metadata } from "next";
import Equipo from "@/routes/Equipo";

export const metadata: Metadata = {
  title: "Equipo — Crash Training",
  description: "Conoce a nuestros coaches",
};

export default function Page() {
  return <Equipo />;
}
