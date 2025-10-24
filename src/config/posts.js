export const posts = [
  {
    slug: "launch-your-saas-landing-in-3-minutes",
    title: "3 分鐘上線你的 SaaS 著陸頁：TaskPilot 範例流程",
    date: "2025-08-12",
    readingTime: "5 min",
    tags: ["SaaS", "Landing Page", "Tailwind"],
    excerpt:
      "用 React + Vite + Tailwind 組合，快速打造高轉換著陸頁。本文示範從建立專案到部署的完整動線。",
    cover: null, // 可放 "/covers/xxx.webp"（public）或 import 圖片
    contentHtml: `
      <p>如果你常為了行銷檔期緊急開新頁面，<strong>TaskPilot</strong> 的結構能讓你快速複用區塊、調整文案、上線 A/B 測試。</p>
      <h2>步驟一：建立專案</h2>
      <pre><code>npm create vite@latest my-landing -- --template react
cd my-landing
npm i
npm run dev</code></pre>
      <h2>步驟二：加上 Tailwind + 區塊</h2>
      <p>在 <code>src/components/sections</code> 放入 Hero、Pricing、FAQ 等元件，並在 Home.jsx 串起來。</p>
      <h2>步驟三：部署</h2>
      <p>Vercel / Netlify 均可，一鍵上線，之後只要改文案就能出新頁面。</p>
      <blockquote>重點：把 CTA 導到 <code>/pricing#buy</code>，縮短轉換路徑。</blockquote>
    `,
  },
  {
    slug: "dark-mode-prose-best-practices",
    title: "深色模式的文章組版：白字不刺眼的 6 個技巧",
    date: "2025-07-28",
    readingTime: "6 min",
    tags: ["Design", "Dark Mode", "Typography"],
    excerpt:
      "深色模式不是把背景變黑、文字變白就好。本文教你在實戰中避免對比過強與 CTA 被稀釋。",
    cover: null,
    contentHtml: `
      <p>好的深色模式要平衡<strong>對比度</strong>與<strong>閱讀舒適度</strong>。</p>
      <ol>
        <li>內文白字，但標題與 CTA 維持品牌色。</li>
        <li>程式碼區塊用半透明底色以維持層次。</li>
        <li>blockquote 左邊框不必太白，降低突兀。</li>
      </ol>
      <p>TaskPilot 的 <code>.prose</code> 白字方案就是依照這些原則調整。</p>
    `,
  },
  {
    slug: "pricing-page-conversion-checklist",
    title: "定價頁轉換清單：從功能比較到 FAQ 的安排",
    date: "2025-06-02",
    readingTime: "7 min",
    tags: ["Pricing", "Conversion", "UX"],
    excerpt:
      "定價頁是轉換核心。本文提供一份清單，幫你把功能、方案、FAQ 與 CTA 排列到位。",
    cover: null,
    contentHtml: `
      <p>定價頁的關鍵是解答猶豫。請至少準備：</p>
      <ul>
        <li>方案比較表、常見問題（退款、授權、更新）。</li>
        <li>「立即開始」直達購買錨點。</li>
        <li>社會信任元素（證言、客戶 Logo）。</li>
      </ul>
      <p>把 CTA 統一導向 <code>/pricing#buy</code>，能顯著降低流失。</p>
    `,
  },
];

// 簡易工具：依日期新到舊排序
export function getSortedPosts() {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 取單篇
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}
