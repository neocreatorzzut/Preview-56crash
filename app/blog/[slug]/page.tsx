import { posts } from "@/data/blog";
import BlogPost from "@/routes/BlogPost";
import { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};

  const ogImage = post.coverImage || "/assets/logo.webp";

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: "Crash Training",
      images: [{ url: ogImage, alt: post.title }],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default function Page({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug) ?? null;

  const jsonLd = post
    ? [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: post.coverImage || `${siteUrl}/assets/logo.webp`,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@type": "Person", name: post.author },
          publisher: {
            "@type": "Organization",
            name: "Crash Training",
            logo: {
              "@type": "ImageObject",
              url: `${siteUrl}/assets/logo.webp`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${siteUrl}/blog/${post.slug}`,
          },
          keywords: post.category,
          articleSection: post.category,
          inLanguage: "es-CO",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: `${siteUrl}/blog`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: post.title,
              item: `${siteUrl}/blog/${post.slug}`,
            },
          ],
        },
      ]
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogPost post={post} />
    </>
  );
}
