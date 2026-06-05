import type { Metadata } from "next";
import Privacidad from "@/routes/Privacidad";

export const metadata: Metadata = {
  title: "Política de Privacidad — Crash Training",
  description: "Conoce cómo Crash Training recopila, usa y protege tus datos personales.",
};

export default function Page() {
  return <Privacidad />;
}
