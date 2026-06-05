import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { posts } from "@/data/blog";
import BlogCard from "@/components/BlogCard";

const latest = [...posts]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export default function BlogPreviewSection() {
  return (
    <section className="py-16 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Blog & Noticias
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              LO ÚLTIMO EN{" "}
              <span className="text-gradient-primary">CRASH</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors whitespace-nowrap group"
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-display font-semibold tracking-wide text-sm hover:scale-105 transition-all duration-300 card-glass-glow"
          >
            <Newspaper className="w-5 h-5" />
            VER BLOG COMPLETO
          </Link>
        </div>
      </div>
    </section>
  );
}
