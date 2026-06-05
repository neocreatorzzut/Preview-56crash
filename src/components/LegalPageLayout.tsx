"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Props {
  badge: string;
  title: string;
  subtitle?: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const LegalPageLayout = ({ badge, title, subtitle, lastUpdated, children }: Props) => {
  return (
    <>
      <Navbar />
      <div style={{ height: "80px" }} />

      <main className="min-h-screen">
        {/* Header */}
        <section className="py-16 relative border-b border-border/30">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-primary" />
              <span className="text-xs font-medium tracking-widest text-primary uppercase">{badge}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
            {subtitle && (
              <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">{subtitle}</p>
            )}
            <p className="text-muted-foreground/50 text-xs mt-5 tracking-widest uppercase">
              Última actualización: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div
              className="prose prose-invert prose-sm max-w-none
                prose-headings:font-display prose-headings:tracking-wide
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-foreground
                prose-h3:text-base prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-primary
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-li:text-muted-foreground prose-li:leading-relaxed
                prose-strong:text-foreground prose-strong:font-semibold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-hr:border-border/30 prose-hr:my-10"
            >
              {children}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default LegalPageLayout;
