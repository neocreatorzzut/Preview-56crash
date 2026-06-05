import { posts } from "@/data/blog";
import BlogPost from "@/routes/BlogPost";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

type Props = { params: { slug: string } };

export default function Page({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug) ?? null;
  return <BlogPost post={post} />;
}
