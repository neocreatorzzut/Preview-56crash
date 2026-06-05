import type { Metadata } from "next";
import Cookies from "@/routes/Cookies";

export const metadata: Metadata = {
  title: "Política de Cookies — Crash Training",
  description: "Información sobre el uso de cookies en el sitio web de Crash Training.",
};

export default function Page() {
  return <Cookies />;
}
