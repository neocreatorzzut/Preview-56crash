"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, User, ImageIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BlogCard from "@/components/BlogCard";
import { type Post, posts, categoryMeta } from "@/data/blog";

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPost({ post }: { post: Post | null }) {
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-foreground">
        Artículo no encontrado.
      </div>
    );
  }

  const meta = categoryMeta[post.category];

  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar />

      <article className="pt-28 pb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            VOLVER AL BLOG
          </Link>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full border ${meta.bg} ${meta.text} ${meta.border}`}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8">
            {post.title}
          </h1>

          {/* Cover image */}
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10 card-glass">
            {post.coverImage ? (
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/10 via-muted/50 to-card flex flex-col items-center justify-center gap-3">
                <ImageIcon className="w-12 h-12 text-muted-foreground/20" />
                <span className="text-xs font-medium tracking-widest text-muted-foreground/30 uppercase">
                  Imagen próximamente
                </span>
              </div>
            )}
          </div>

          {/* Body */}
          <div
            className="prose prose-invert prose-sm md:prose-base max-w-none
              prose-headings:font-display prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-li:text-muted-foreground
              prose-strong:text-foreground
              prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:italic
              prose-ul:space-y-1"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="container mx-auto px-4 relative z-10 mt-16">
            <div className="max-w-3xl mx-auto">
              <div className="h-px bg-border/40 mb-10" />
              <h2 className="font-display text-xl font-bold tracking-tight mb-6">
                Más en <span className="text-gradient-primary">{post.category}</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </div>
        )}
      </article>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
