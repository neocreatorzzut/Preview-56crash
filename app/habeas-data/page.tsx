import type { Metadata } from "next";
import HabeasData from "@/routes/HabeasData";

export const metadata: Metadata = {
  title: "Política de Tratamiento de Datos — Crash Training",
  description: "Política de tratamiento de datos personales de Crash Training conforme a la Ley 1581 de 2012.",
};

export default function Page() {
  return <HabeasData />;
}
