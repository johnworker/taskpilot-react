import { Link } from "react-router-dom";

export default function Terms() {
  const lastUpdated = "2025-10-01"; // ← 自行更新
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TermsOfService",
    name: "服務條款",
    url: "https://你的網域/terms",
    dateModified: lastUpdated,
    publisher: { "@type": "Organization", name: "TaskPilot" },
  };

  return (
    <section className="container-p prose dark:prose-invert py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>服務條款</h1>
      <p className="lead">使用或購買本模板套組即表示你同意以下條款。若你不同意，請不要使用本服務。</p>
      <p className="text-sm">最後更新：<time dateTime={lastUpdated}>{lastUpdated}</time></p>

      <h2 id="definitions">一、定義</h2>
      <ul>
        <li><strong>「本服務」</strong>：TaskPilot 提供的模板、原始碼、文件與示範站。</li>
        <li><strong>「你」</strong>：購買或使用本服務的個人或組織。</li>
        <li><strong>「授權」</strong>：你可依購買方案（單專案、多專案、代理）於對應範圍內使用。</li>
      </ul>

      <h2 id="license">二、授權與限制</h2>
      <ul>
        <li>授權為非獨占、不可轉讓、不可再授權（除非方案載明可代理）的使用權。</li>
        <li>不得直接轉售、轉贈或上傳原始資產（含圖片、原始碼）到公開資源庫。</li>
        <li>可在授權範圍內修改與重構原始碼，用於商業專案。</li>
      </ul>

      <h2 id="payment">三、費用與退款</h2>
      <ul>
        <li>價格以商品頁或訂單為準；可能隨時調整。</li>
        <li>屬於可下載數位商品，除法律另有規定，<strong>通常不提供退款</strong>；請在購買前確認需求。</li>
      </ul>

      <h2 id="updates">四、更新與支援</h2>
      <ul>
        <li>方案含基本更新；重大改版或新套組可能需另購。</li>
        <li>技術支援方式與時程以方案說明為準（Email / 優先 / SLA）。</li>
      </ul>

      <h2 id="warranty">五、保證免責</h2>
      <p>本服務以「現況」提供，我們不對其適銷性、特定目的適用性或非侵權做任何明示或默示保證。</p>

      <h2 id="liability">六、責任限制</h2>
      <p>在法律允許範圍內，對於因使用或無法使用本服務所造成的任何間接、附帶、特殊或衍生損害，我們不承擔責任。對直接損害的總責任，以你實際支付之費用為上限。</p>

      <h2 id="compliance">七、遵循法規與第三方資源</h2>
      <p>使用者須自行確保商業使用之合規（如字型、圖片、第三方服務條款）。第三方服務（如表單、分析）受其各自條款與隱私政策約束。</p>

      <h2 id="termination">八、終止</h2>
      <p>若你嚴重違反本條款，我們得終止授權；終止後你應停止使用並刪除相關資產。</p>

      <h2 id="law">九、準據法與爭議處理</h2>
      <p>除非商品頁另有約定，本條款以你所在司法轄區的強制性規範為最低保障，其他依我們登記地之法律為準據法。爭議由具管轄權之法院處理。</p>

      <h2 id="contact">十、聯絡方式</h2>
      <p>對本條款有任何問題，請聯繫：<a href="mailto:legal@yourdomain.com">legal@yourdomain.com</a>，或前往 <Link to="/contact">聯絡我們</Link>。</p>
    </section>
  );
}
