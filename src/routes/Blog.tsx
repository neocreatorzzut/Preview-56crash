"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BlogCard from "@/components/BlogCard";
import { posts, type Category } from "@/data/blog";

const categories: Array<"Todos" | Category> = [
  "Todos",
  "Noticias",
  "Entrenamiento",
  "Nutrición",
  "Lifestyle",
];

export default function Blog() {
  const [active, setActive] = useState<"Todos" | Category>("Todos");

  const featured = posts.find((p) => p.featured);
  const filtered = posts
    .filter((p) => !p.featured || active !== "Todos")
    .filter((p) => active === "Todos" || p.category === active)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const showFeatured = active === "Todos" && featured;

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-28 pb-16 relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            VOLVER AL INICIO
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Blog & Noticias
              </span>
              <div className="w-12 h-px bg-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              CRASH <span className="text-gradient-primary">BLOG</span>
            </h1>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
              Entrenamiento, nutrición, noticias del gym y todo lo que necesitás saber para rendir al máximo.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  active === cat
                    ? "bg-primary text-white shadow-[0_0_14px_hsl(228_90%_51%/0.4)]"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted border border-border/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {showFeatured && featured && (
            <div className="mb-10">
              <BlogCard post={featured} featured />
            </div>
          )}

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-muted-foreground/50 text-sm">
              No hay artículos en esta categoría todavía.
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
