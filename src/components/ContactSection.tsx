import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const addresses = [
  { name: "Sede Calle Larga", address: "Cra 47 Cll 74 Sur 36, Sabaneta" },
  { name: "Sede Loma Linda", address: "Cll 70 Sur Cra 38-374, Sabaneta" },
  { name: "Sede Alto de las Flores", address: "Cll 61 Sur #40-05, Sabaneta" },
];

const ContactSection = () => {
  return (
    <section id="contacto" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Contacto
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            ¿LISTO PARA{" "}
            <span className="text-gradient-primary">EMPEZAR?</span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Da el primer paso hacia la mejor versión de ti. Nuestro equipo está listo
            para ayudarte a alcanzar tus metas. ¡Contáctanos hoy!
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Correo</p>
                <p className="font-medium">crashtraining@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Celular / WhatsApp</p>
                <p className="font-medium">+57 312 8077046</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Direcciones</p>
                <div className="space-y-2">
                  {addresses.map((item, index) => (
                    <div key={index}>
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-muted-foreground text-sm">{item.address}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-12">
            <a
              href="https://wa.me/573128077046?text=Hola%2C%20quiero%20agendar%20una%20visita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold tracking-wide text-sm hover:scale-105 transition-transform duration-200 glow-primary"
            >
              <MessageCircle className="w-5 h-5" />
              ¡AGENDA TU VISITA!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
