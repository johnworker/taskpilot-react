import { Link, useNavigate, useParams } from "react-router-dom";
import { getSortedPosts, getPostBySlug } from "../config/posts";
import { useMemo } from "react";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const nav = useNavigate();

  const sorted = useMemo(() => getSortedPosts(), []);
  const idx = sorted.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx >= 0 && idx < sorted.length - 1 ? sorted[idx + 1] : null;

  if (!post) {
    return (
      <section className="container-p py-12">
        <p className="text-neutral-500">找不到這篇文章。</p>
        <button onClick={() => nav(-1)} className="btn-primary mt-4">回上一頁</button>
      </section>
    );
  }

  // BlogPosting 結構化資料（可提高 SEO 顯示品質）
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    description: post.excerpt,
    author: { "@type": "Person", name: "TaskPilot Team" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://你的網域/blog/${post.slug}` },
  };

  return (
    <article className="container-p prose dark:prose-invert py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="text-sm text-neutral-500">
        <time dateTime={post.date}>{post.date}</time> · {post.readingTime}
      </p>
      <h1>{post.title}</h1>
      {post.tags?.length > 0 && (
        <p>
          {post.tags.map((t) => (
            <span key={t} className="mr-2 px-2 py-1 rounded-md text-xs ring-1 ring-neutral-200 dark:ring-white/10">
              #{t}
            </span>
          ))}
        </p>
      )}

      {/* 文章內容（以 HTML 字串渲染） */}
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

      <hr />
      <div className="not-prose mt-6 flex flex-col sm:flex-row gap-3 justify-between">
        <div>
          {prev ? (
            <Link to={`/blog/${prev.slug}`} className="underline underline-offset-4">← {prev.title}</Link>
          ) : <span className="text-neutral-400">已是最舊的文章</span>}
        </div>
        <div>
          {next ? (
            <Link to={`/blog/${next.slug}`} className="underline underline-offset-4">{next.title} →</Link>
          ) : <span className="text-neutral-400">已是最新的文章</span>}
        </div>
      </div>

      <div className="not-prose mt-8">
        <Link to="/blog" className="btn-primary no-hover-scale" data-analytics="blog_back_to_list">
          回到列表
        </Link>
      </div>
    </article>
  );
}
