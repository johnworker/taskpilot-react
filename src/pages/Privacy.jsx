import { Link } from "react-router-dom";

export default function Privacy() {
  const lastUpdated = "2025-10-01"; // ← 自行更新
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    name: "隱私權政策",
    url: "https://你的網域/privacy",
    dateModified: lastUpdated,
    publisher: { "@type": "Organization", name: "TaskPilot" },
  };

  return (
    <section className="container-p prose dark:prose-invert py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>隱私權政策</h1>
      <p className="lead">我們重視你的隱私並致力於保護你的個人資料。此政策說明我們收集什麼、為何收集、如何使用與保護，以及你擁有哪些權利。</p>
      <p className="text-sm">最後更新：<time dateTime={lastUpdated}>{lastUpdated}</time></p>

      <h2 id="toc">目錄</h2>
      <ol>
        <li><a href="#what-we-collect">我們收集的資料</a></li>
        <li><a href="#how-we-use">我們如何使用</a></li>
        <li><a href="#cookies">Cookie 與追蹤</a></li>
        <li><a href="#sharing">資料分享</a></li>
        <li><a href="#security">資訊安全</a></li>
        <li><a href="#retention">保存期間</a></li>
        <li><a href="#your-rights">你的權利</a></li>
        <li><a href="#international">跨境傳輸</a></li>
        <li><a href="#children">未成年人</a></li>
        <li><a href="#contact">聯絡方式</a></li>
      </ol>

      <h2 id="what-we-collect">我們收集的資料</h2>
      <ul>
        <li><strong>帳務與聯絡資料：</strong>姓名、Email、公司名稱（若你主動提交）。</li>
        <li><strong>使用資料：</strong>頁面瀏覽、點擊事件（例如 CTA）；僅做匿名或彙整分析。</li>
        <li><strong>表單內容：</strong>透過 <code>Formspree / Netlify Forms</code> 送出的表單字段。</li>
      </ul>

      <h2 id="how-we-use">我們如何使用</h2>
      <ul>
        <li>提供與維護服務（示範站、文件、授權驗證）。</li>
        <li>改善體驗與效能（A/B 測試、錯誤追蹤、功能分析）。</li>
        <li>與你聯繫（客戶支援、產品更新、必要性通知）。</li>
      </ul>

      <h2 id="cookies">Cookie 與追蹤</h2>
      <p>我們可能使用 GA4、Plausible 或同類工具蒐集匿名使用統計；你可透過瀏覽器設定限制 Cookie。頁面底部的 <strong>Cookie 橫幅</strong>可讓你同意後隱藏。</p>

      <h2 id="sharing">資料分享</h2>
      <p>我們不販售個人資料。僅在以下情況可能分享：</p>
      <ul>
        <li>與服務處理商（託管、分析、表單）依約提供必要服務。</li>
        <li>法規或執法要求。</li>
        <li>公司交易（合併、收購）依法告知並移轉。</li>
      </ul>

      <h2 id="security">資訊安全</h2>
      <p>採用 HTTPS、最小化存取權限與例行稽核，但網路傳輸風險無法保證 100% 安全。</p>

      <h2 id="retention">保存期間</h2>
      <p>我們僅在達成蒐集目的所需期間內保留資料，或依法律要求保存。</p>

      <h2 id="your-rights">你的權利</h2>
      <ul>
        <li>查詢、存取或更正你的資料。</li>
        <li>要求刪除（在法律容許範圍內）。</li>
        <li>撤回同意或拒絕行銷訊息。</li>
        <li>資料可攜（在技術可行範圍內）。</li>
      </ul>
      <p>要提出請求，請寄信到 <a href="mailto:privacy@yourdomain.com">privacy@yourdomain.com</a>，我們將於合理期間內回覆。</p>

      <h2 id="international">跨境傳輸</h2>
      <p>你的資料可能被傳輸並處理於你所在地以外的地區；我們會採取適當保護措施。</p>

      <h2 id="children">未成年人</h2>
      <p>本服務不是為 13 歲以下兒童設計；若你認為兒童向我們提供資料，請聯繫我們協助刪除。</p>

      <h2 id="contact">聯絡方式</h2>
      <p>若對本政策有疑問，請聯繫：<a href="mailto:privacy@yourdomain.com">privacy@yourdomain.com</a> 或透過 <Link to="/contact">聯絡我們</Link>。</p>
    </section>
  );
}
