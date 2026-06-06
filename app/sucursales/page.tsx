import type { Metadata } from "next";
import Sucursales from "@/routes/Sucursales";
import { siteUrl } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "ExerciseGym",
        name: "Crash Training - Calle Larga",
        url: `${siteUrl}/sucursales`,
        telephone: "+573128077046",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Cra 47 Cll 74 Sur 36",
          addressLocality: "Sabaneta",
          addressRegion: "Antioquia",
          addressCountry: "CO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 6.1513,
          longitude: -75.6167,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "05:00",
            closes: "21:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "07:00",
            closes: "11:00",
          },
        ],
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "ExerciseGym",
        name: "Crash Training - Loma Linda",
        url: `${siteUrl}/sucursales`,
        telephone: "+573128077046",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Cll 70 Sur Cra 38-374",
          addressLocality: "Sabaneta",
          addressRegion: "Antioquia",
          addressCountry: "CO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 6.152,
          longitude: -75.616,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "05:00",
            closes: "21:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "07:00",
            closes: "11:00",
          },
        ],
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "ExerciseGym",
        name: "Crash Training - Alto de las Flores",
        url: `${siteUrl}/sucursales`,
        telephone: "+573128077046",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Cll 61 Sur #40-05",
          addressLocality: "Sabaneta",
          addressRegion: "Antioquia",
          addressCountry: "CO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 6.15,
          longitude: -75.615,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "05:00",
            closes: "21:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "07:00",
            closes: "11:00",
          },
        ],
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Sedes en Sabaneta",
  description:
    "Encuentra tu sede Crash Training más cercana. 3 gimnasios en Sabaneta, Antioquia: Calle Larga, Loma Linda y Alto de las Flores. Abierto de lunes a sábado.",
  openGraph: {
    title: "3 Sedes de Crash Training en Sabaneta",
    description:
      "3 gimnasios en Sabaneta, Antioquia. Encuentra la más cercana y empieza a entrenar hoy.",
    type: "website",
    images: [{ url: "/assets/logo.webp", alt: "Crash Training" }],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Sucursales />
    </>
  );
}
