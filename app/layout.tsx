import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { siteUrl } from "@/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Crash Training",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/assets/logo.webp`,
  },
  description:
    "Gimnasio premium en Sabaneta, Antioquia. Entrenamiento funcional, kickboxing y artes marciales.",
  telephone: "+573128077046",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cra 47 Cll 74 Sur 36",
    addressLocality: "Sabaneta",
    addressRegion: "Antioquia",
    postalCode: "055450",
    addressCountry: "CO",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Crash Training — Gimnasio en Sabaneta, Antioquia",
    template: "%s — Crash Training",
  },
  description:
    "Gimnasio premium en Sabaneta, Antioquia. Entrenamiento funcional, kickboxing y artes marciales. 3 sedes. Únete hoy.",
  keywords: [
    "gimnasio",
    "Sabaneta",
    "Antioquia",
    "kickboxing",
    "entrenamiento funcional",
    "artes marciales",
    "gym Colombia",
  ],
  authors: [{ name: "Crash Training" }],
  creator: "Crash Training",
  openGraph: {
    title: "Crash Training — Gimnasio en Sabaneta, Antioquia",
    description:
      "Entrenamiento funcional, kickboxing y artes marciales. 3 sedes en Sabaneta. Eleva tu cuerpo, eleva tu vida.",
    url: siteUrl,
    siteName: "Crash Training",
    images: [
      {
        url: "/assets/logo.webp",
        width: 800,
        height: 600,
        alt: "Crash Training — Gimnasio en Sabaneta",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crash Training — Gimnasio en Sabaneta",
    description:
      "Entrenamiento funcional, kickboxing y artes marciales. 3 sedes en Sabaneta.",
    images: ["/assets/logo.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <BackgroundAnimation />
        <div style={{ position: "relative", zIndex: 1 }}>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
