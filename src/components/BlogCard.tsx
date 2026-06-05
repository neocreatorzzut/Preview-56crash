import Link from "next/link";
import { ImageIcon, Calendar, User } from "lucide-react";
import { type Post, categoryMeta } from "@/data/blog";

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const meta = categoryMeta[post.category];

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group relative overflow-hidden rounded-2xl bg-card card-glass flex flex-col md:flex-row min-h-[320px] transition-all duration-500 hover:scale-[1.01]"
      >
        {/* Image */}
        <div className="relative md:w-1/2 h-56 md:h-auto flex-shrink-0 overflow-hidden">
          {post.coverImage ? (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-muted/60 to-card flex flex-col items-center justify-center gap-2">
              <ImageIcon className="w-10 h-10 text-muted-foreground/25" />
              <span className="text-[10px] font-medium tracking-widest text-muted-foreground/30 uppercase">
                Imagen próximamente
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 hidden md:block" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-7 md:p-10 flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full border ${meta.bg} ${meta.text} ${meta.border}`}
            >
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground/60 font-medium uppercase tracking-widest">
              Destacado
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight leading-snug mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground/60">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.date)}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative overflow-hidden rounded-2xl bg-card card-glass flex flex-col transition-all duration-500 hover:scale-[1.02]"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 via-muted/60 to-card flex flex-col items-center justify-center gap-2">
            <ImageIcon className="w-8 h-8 text-muted-foreground/25" />
            <span className="text-[10px] font-medium tracking-widest text-muted-foreground/30 uppercase">
              Imagen próximamente
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${meta.bg} ${meta.text} ${meta.border}`}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-base font-bold tracking-tight leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-1 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground/50 pt-3 border-t border-border/40">
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {post.author.split("·")[0].trim()}
          </span>
          <span className="flex items-center gap-1 ml-auto">
            <Calendar className="w-3 h-3" />
            {formatDate(post.date)}
          </span>
        </div>
      </div>
    </Link>
  );
}
