export const hero = {
  headline: "用 TaskPilot 3 分鐘上線高轉換 SaaS 著陸頁",
  sub: "React + Tailwind 區塊組合，RWD 與深色模式都幫你準備好。",
  bullets: ["免後端表單", "Core Web Vitals 友善", "深色模式", "可擴充區塊庫"],
  image: "/hero.png",
  primaryHref: "/pricing#buy",
  secondaryTo: "/features",
};

export const trust = [
  { src: "/logos/logo-1.svg", alt: "Brand A" },
  { src: "/logos/logo-2.svg", alt: "Brand B" },
  { src: "/logos/logo-3.svg", alt: "Brand C" },
  { src: "/logos/logo-4.svg", alt: "Brand D" },
  { src: "/logos/logo-5.svg", alt: "Brand E" },
  { src: "/logos/logo-6.svg", alt: "Brand F" },
];

export const features = [
  { icon:"⚡", title:"快速上線", desc:"Vite + Tailwind 結構，3 分鐘跑起來。", href:"/features" },
  { icon:"📱", title:"RWD 穩定", desc:"行動優先設計，所有斷點皆妥當。", href:"/features" },
  { icon:"🌙", title:"深色模式", desc:"白字深底預設，對比舒適、閱讀清楚。", href:"/features" },
  { icon:"🧩", title:"模組化區塊", desc:"Hero/Features/Pricing/FAQ/CTA 即插即用。", href:"/features" },
  { icon:"📈", title:"轉換導向", desc:"清楚 CTA 與價錢表、FAQ 化解反對點。", href:"/features" },
  { icon:"🔌", title:"免後端表單", desc:"Formspree/Netlify Forms 部署即用。", href:"/features" },
];

export const pricing = {
  tiers: [
    { name:"Starter", monthly:9, yearly:79, tagline:"個人/單專案", features:["完整頁面","RWD & 深色模式","Email 支援"], cta:"#", popular:false },
    { name:"Pro",     monthly:29, yearly:249, tagline:"團隊/多專案", features:["全部 Starter","優先支援","延伸區塊包"], cta:"#", popular:true },
    { name:"Team",    monthly:59, yearly:499, tagline:"代理與客戶專案", features:["全部 Pro","SLA 支援","代理授權"], cta:"#", popular:false },
  ]
};

export const faqs = [
  { q:"需要後端嗎？", a:"不需要。表單可用 Formspree 或 Netlify Forms，純前端部署即可。" },
  { q:"支援深色模式嗎？", a:"有，預設白字深底，卡片背景也做了對比最佳化。" },
  { q:"可以用在商業專案嗎？", a:"可以，依授權方案（單專案/多專案/代理）選擇。" },
  { q:"怎麼部署？", a:"build 後丟到 Vercel 或 Netlify 即可；README 有步驟。" },
  { q:"會持續更新嗎？", a:"會，會增加更多版型與最佳化。" },
];

export const cta = {
  title: "準備好提升轉換了嗎？",
  desc: "3 分鐘上線你的 SaaS 著陸頁，專注產品價值，把模板交給我們。",
  primaryHref: "/pricing#buy",
  secondaryTo: "/contact",
};

export const metrics = [
  { value: "32%", label: "投放轉換提升" },
  { value: "3x",  label: "頁面建置速度" },
  { value: "98",  label: "Lighthouse/Perf" },
];

export const testimonials = [
  { quote:"半天就完成新產品頁，投放成效提升 32%。", author:"Amber / 行銷主管" },
  { quote:"RWD 很穩、樣式一致，可直接複製多品牌。", author:"Ethan / 前端工程師" },
  { quote:"表單、法務、追蹤一次到位，上線超快。", author:"Mia / 創業者" },
];

export const featureTabs = [
  {
    key: "ux", label: "UI/UX", intro: "主打高轉換的可用性與一致性。",
    items: [
      { icon:"✨", title:"一致的設計系統", desc:"按鈕、卡片、表單、排版皆一致。" },
      { icon:"🧭", title:"導覽清楚",       desc:"桌面/行動導覽、麵包屑、錨點平滑捲動。" },
      { icon:"♿", title:"可存取性",       desc:"語義化標籤、焦點樣式、ARIA、對比度。" },
    ],
  },
  {
    key: "perf", label: "效能", intro: "懶載入、預抓、最佳化排版，提升 LCP 與互動回應。",
    items: [
      { icon:"⚡", title:"路由懶載入",   desc:"首頁先上、子頁分塊，初載更快。" },
      { icon:"🪄", title:"滑過預抓",     desc:"滑過選單預先載入子頁，點擊秒開。" },
      { icon:"🖼️", title:"圖像最佳化",   desc:"lazy、正確尺寸、可換 WebP。" },
    ],
  },
  {
    key: "integration", label: "整合", intro: "免後端表單、部署到 Vercel/Netlify、分析事件。",
    items: [
      { icon:"📨", title:"Formspree / Netlify", desc:"表單一鍵接通，純前端部署。" },
      { icon:"📊", title:"Analytics 事件",       desc:"CTA 與購買鈕預設 data-analytics。" },
      { icon:"🔌", title:"彈性擴充",           desc:"易於對接 GA4、Plausible、Cloudflare。" },
    ],
  },
];

export const comparison = {
  head: ["功能", "Starter", "Pro", "Team"],
  rows: [
    ["完整頁面套組", "✔️","✔️","✔️"],
    ["商業授權",     "個人/單專案","多專案","代理/客戶專案"],
    ["技術支援",     "Email","優先","SLA"],
    ["延伸區塊庫",   "—","✔️","✔️"],
    ["企業合規文件", "—","—","可洽談"],
  ],
  note: "以上為範例，實際授權以商品頁標示為準。"
};
