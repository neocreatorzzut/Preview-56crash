import type { Metadata } from "next";
import Horarios from "@/routes/Horarios";

export const metadata: Metadata = {
  title: "Horarios — Crash Training",
  description: "Horarios de clases en Crash Training",
};

export default function Page() {
  return <Horarios />;
}
