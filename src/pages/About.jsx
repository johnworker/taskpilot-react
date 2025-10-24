import { Link } from "react-router-dom";

export default function About() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TaskPilot",
    url: "https://你的網域/",
    description: "提供高轉換的 React/Vue/Tailwind 著陸頁模板與區塊套件，強調效能與可維護性。",
    sameAs: [
      "https://twitter.com/你的帳號",
      "https://github.com/你的帳號"
    ],
  };

  const values = [
    { title: "以轉換為核心", desc: "每個區塊都有明確行動與層級對比，縮短使用者路徑。" },
    { title: "效能先行",   desc: "Vite 分包、懶載入、預抓，維持良好的 Core Web Vitals。" },
    { title: "可維護性",   desc: "文案集中、樣式一致、解耦的 sections 與 config。" },
    { title: "可存取性",   desc: "語義化標籤、焦點可視、對比度檢查，讓更多人可用。" },
  ];

  const milestones = [
    { date: "2025-03", title: "TaskPilot 起始", desc: "整理市面上高轉換著陸頁共同元素，形成可重組的區塊庫。" },
    { date: "2025-05", title: "Vue 版釋出",  desc: "以 Vite + Tailwind 建置、完成 9 個核心頁面與多個 sections。" },
    { date: "2025-09", title: "React 版就緒", desc: "平行移植，加入路由懶載入、滑過預抓與 Sticky CTA。" },
  ];

  const stack = ["React", "Vite", "Tailwind CSS", "React Router", "Formspree/Netlify Forms", "GA4 / Plausible"];

  const team = [
    { name: "Amber", role: "產品與體驗", avatar: "A" },
    { name: "Ethan", role: "前端工程", avatar: "E" },
    { name: "Mia",   role: "行銷與內容", avatar: "M" },
  ];

  return (
    <>
      {/* SEO：組織結構化資料 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      {/* Hero / Intro */}
      <section className="container-p py-12">
        <h1 className="text-3xl font-bold">關於 TaskPilot</h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-3xl">
          我們專注打造<strong>高轉換</strong>、<strong>好維護</strong>的著陸頁模板與區塊套組。
          以 React/Vue + Tailwind 為技術基底，提供可快速組裝的 Hero、Features、Pricing、FAQ、CTA 等常用模組，
          幫你將心力放在產品價值與投放成效，而不是重複造輪子。
        </p>
        <div className="mt-6 flex gap-3">
          <Link to="/pricing#buy" className="btn-primary" data-analytics="about_to_pricing">查看定價</Link>
          <Link to="/contact" className="inline-flex items-center justify-center rounded-xl ring-1 ring-neutral-200 dark:ring-white/10 px-5 py-3" data-analytics="about_to_contact">聯絡我們</Link>
        </div>
      </section>

      {/* Values */}
      <section className="container-p py-12">
        <h2 className="text-2xl font-semibold">我們相信的價值</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(v => (
            <article key={v.title} className="card p-6">
              <h3 className="font-semibold">{v.title}</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Milestones / Timeline */}
      <section className="container-p py-12">
        <h2 className="text-2xl font-semibold">里程碑</h2>
        <ol className="mt-6 relative border-s ps-6 dark:border-white/10">
          {milestones.map(m => (
            <li key={m.date} className="mb-6">
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-brand"></div>
              <time className="text-sm text-neutral-500">{m.date}</time>
              <h3 className="font-semibold">{m.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">{m.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Tech Stack */}
      <section className="container-p py-12">
        <h2 className="text-2xl font-semibold">技術棧</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map(s => (
            <span key={s} className="px-3 py-1 rounded-xl ring-1 ring-neutral-200 dark:ring-white/10 text-sm">{s}</span>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container-p py-12">
        <h2 className="text-2xl font-semibold">團隊</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map(t => (
            <article key={t.name} className="card p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-brand text-white grid place-items-center text-lg font-bold">{t.avatar}</div>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">{t.role}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="container-p py-16">
        <div className="card p-8 text-center">
          <h3 className="text-2xl font-bold">準備好用更快的方式做出更好的著陸頁？</h3>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">從範例開始，3 分鐘就能上線你的下一個產品頁。</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Link to="/pricing#buy" className="btn-primary" id="about-cta" data-analytics="about_primary_cta">立刻開始</Link>
            <Link to="/features" className="inline-flex items-center justify-center rounded-xl ring-1 ring-neutral-200 dark:ring-white/10 px-5 py-3">看看功能</Link>
          </div>
        </div>
      </section>

      {/* 內容段落（可選）：若要較長的品牌故事，放在 prose 區塊 */}
      <section className="container-p prose dark:prose-invert py-12">
        <h2>我們怎麼做內容與迭代</h2>
        <p>每次釋出都會同步調整文件、最佳化 Lighthouse 分數、增加更實用的 sections，並維持跨框架一致的 API 與 CSS token。</p>
      </section>
    </>
  );
}
