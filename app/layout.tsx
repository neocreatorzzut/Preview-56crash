import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Crash Training",
  description: "Crash Training - Gimnasio premium en Antioquia",
  openGraph: {
    title: "Crash Training",
    description: "Eleva tu cuerpo, eleva tu vida",
    images: ["https://crashtraining.lovable.app/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crash Training",
    description: "Eleva tu cuerpo, eleva tu vida",
    images: ["https://crashtraining.lovable.app/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
