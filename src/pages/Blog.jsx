import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getSortedPosts } from "../config/posts";

export default function Blog() {
  const all = useMemo(() => getSortedPosts(), []);
  const allTags = useMemo(() => {
    const s = new Set();
    all.forEach((p) => p.tags?.forEach((t) => s.add(t)));
    return Array.from(s);
  }, [all]);

  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");

  const filtered = all.filter((p) => {
    const matchQ =
      !q ||
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(q.toLowerCase()) ||
      p.tags?.some((t) => t.toLowerCase().includes(q.toLowerCase()));
    const matchTag = !tag || p.tags?.includes(tag);
    return matchQ && matchTag;
  });

  // 讓 <Link> 在本頁只套用「origin-left + hover:scale-105」
  // 外層 Link：加上 group + no-hover-scale（關閉全站 a:hover 的 1.2 倍）
  // 內層 span：用 group-hover 觸發 1.05 倍縮放，並設置 origin-left
  const ScaleLink = ({ to, className = "", children, ...props }) => (
    <Link to={to} className={`group no-hover-scale inline-block ${className}`} {...props}>
      <span className="inline-block origin-left transition-transform duration-150 ease-out group-hover:scale-105">
        {children}
      </span>
    </Link>
  );

  return (
    <section className="container-p py-12">
      <div className="flex flex-col md:flex-row md:items-end gap-4">
        <div className="flex-1">
          <h1 className="text-3xl font-bold">部落格</h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            教你用最短路徑把著陸頁上線、優化、轉換。
          </p>
        </div>

        <div className="flex gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="搜尋文章或標籤…"
            className="rounded-xl px-3 py-2 ring-1 ring-neutral-200 dark:ring-white/10 bg-transparent"
          />
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="rounded-xl px-3 py-2 ring-1 ring-neutral-200 dark:ring-white/10 bg-transparent"
          >
            <option value="">所有標籤</option>
            {allTags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <article key={p.slug} className="card p-6">
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <time dateTime={p.date}>{p.date}</time>
              <span>·</span>
              <span>{p.readingTime}</span>
            </div>

            <h2 className="mt-2 text-xl font-semibold">
              {/* 文章標題連結：採用本頁專屬的縮放行為 */}
              <ScaleLink to={`/blog/${p.slug}`} className="underline underline-offset-4">
                {p.title}
              </ScaleLink>
            </h2>

            <p className="mt-2 text-neutral-600 dark:text-neutral-300">{p.excerpt}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags?.map((t) => (
                <button
                  key={t}
                  onClick={() => setTag(t === tag ? "" : t)}
                  className={`px-2 py-1 rounded-md text-xs ring-1 ring-neutral-200 dark:ring-white/10 ${
                    t === tag ? "bg-brand text-white" : ""
                  }`}
                  aria-pressed={t === tag}
                >
                  #{t}
                </button>
              ))}
            </div>

            <div className="mt-4">
              {/* 按鈕型連結：保留原有 btn-primary，但同樣用本頁縮放方案 */}
              <ScaleLink
                to={`/blog/${p.slug}`}
                className="btn-primary"
                data-analytics={`blog_read_${p.slug}`}
              >
                繼續閱讀
              </ScaleLink>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-neutral-500">沒有符合條件的文章，換個關鍵字或標籤吧。</p>
      )}
    </section>
  );
}
