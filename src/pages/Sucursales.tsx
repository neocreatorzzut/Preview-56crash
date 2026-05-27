import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Phone, Navigation } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import gymInterior1 from "@/assets/gym-interior-1.jpg";
import gymInterior2 from "@/assets/gym-interior-2.jpg";
import gymInterior3 from "@/assets/gym-interior-3.jpg";

const branches = [
  {
    name: "Crash Training - Calle Larga",
    subtitle: "Sede 1",
    address: "Cra 47 Cll 74 Sur 36, Sabaneta",
    reference: "Al frente de Perritos Zamu",
    phone: "+57 312 807 7046",
    hours: "Lunes a Viernes: 5:00 AM - 9:00 PM | Sábados: 7:00 AM - 11:00 AM",
    image: gymInterior1,
    flagship: true,
    mapUrl: "https://maps.google.com/?q=6.1513,-75.6167",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d-75.6167!3d6.1513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCra+47+Cll+74+Sur+36+Sabaneta!5e0!3m2!1ses!2sco!4v1",
  },
  {
    name: "Crash Training - Loma Linda",
    subtitle: "Sede 2",
    address: "Cll 70 Sur Cra 38-374, Sabaneta",
    reference: "Segundo piso Edificio Lyra",
    phone: "+57 312 807 7046",
    hours: "Lunes a Viernes: 5:00 AM - 9:00 PM | Sábados: 7:00 AM - 11:00 AM",
    image: gymInterior2,
    flagship: false,
    mapUrl: "https://maps.google.com/?q=Cll+70+Sur+Cra+38-374+Sabaneta",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d-75.616!3d6.152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCll+70+Sur+Cra+38-374+Sabaneta!5e0!3m2!1ses!2sco!4v1",
  },
  {
    name: "Crash Training - Alto de las Flores",
    subtitle: "Sede 3",
    address: "Cll 61 Sur #40-05, Sabaneta",
    reference: "Edificio Asdesillas",
    phone: "+57 312 807 7046",
    hours: "Lunes a Viernes: 5:00 AM - 9:00 PM | Sábados: 7:00 AM - 11:00 AM",
    image: gymInterior3,
    flagship: false,
    mapUrl: "https://maps.google.com/?q=Cll+61+Sur+%2340-05+Sabaneta",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d-75.615!3d6.150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCll+61+Sur+40-05+Sabaneta!5e0!3m2!1ses!2sco!4v1",
  },
];

const Sucursales = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-28 pb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Nuestras Sedes
              </span>
              <div className="w-12 h-px bg-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              ENCUENTRA TU{" "}
              <span className="text-gradient-primary">SUCURSAL</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              3 sedes equipadas con lo mejor para tu entrenamiento. Elige la más cercana y comienza hoy.
            </p>
          </div>

          <div className="space-y-16">
            {branches.map((branch, index) => (
              <div key={index} className="space-y-0">
                <div
                  className={`group grid md:grid-cols-2 gap-0 rounded-t-2xl overflow-hidden border border-b-0 border-border/50 bg-card ${
                    index % 2 !== 0 ? "md:[direction:rtl]" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-[300px] md:h-[400px] overflow-hidden md:[direction:ltr]">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                    {branch.flagship && (
                      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-wider backdrop-blur-sm">
                        Sede Principal
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center md:[direction:ltr]">
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">{branch.subtitle}</span>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 tracking-tight">
                      {branch.name}
                    </h2>

                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Dirección</p>
                          <p className="text-sm text-foreground">{branch.address}</p>
                          <p className="text-xs text-muted-foreground italic mt-0.5">*{branch.reference}*</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                          <Clock className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Horario</p>
                          <p className="text-sm text-foreground">{branch.hours}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Teléfono</p>
                          <p className="text-sm text-foreground">{branch.phone}</p>
                        </div>
                      </div>
                    </div>

                    <a
                      href={branch.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors w-fit"
                    >
                      <Navigation className="w-4 h-4" />
                      Cómo llegar
                    </a>
                  </div>
                </div>

                {/* Embedded Google Map */}
                <div className="rounded-b-2xl overflow-hidden border border-t-0 border-border/50">
                  <iframe
                    src={branch.mapEmbed}
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${branch.name}`}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sucursales;
