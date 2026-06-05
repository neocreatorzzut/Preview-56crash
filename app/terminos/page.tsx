import type { Metadata } from "next";
import Terminos from "@/routes/Terminos";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Crash Training",
  description: "Términos y condiciones que regulan el uso de los servicios de Crash Training.",
};

export default function Page() {
  return <Terminos />;
}
