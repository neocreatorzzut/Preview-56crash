import type { Metadata } from "next";
import Sucursales from "@/routes/Sucursales";

export const metadata: Metadata = {
  title: "Sucursales — Crash Training",
  description: "Nuestras sedes",
};

export default function Page() {
  return <Sucursales />;
}
