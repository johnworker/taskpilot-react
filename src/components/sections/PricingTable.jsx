import { useState } from "react";
import { pricing } from "../../config/sections";

export default function PricingTable() {
  const [billing, setBilling] = useState("monthly");
  return (
    <section id="pricing" className="container-p py-16">
      <div className="flex items-center justify-center gap-2">
        <button className={`px-3 py-2 rounded-lg ring-1 ring-neutral-200 dark:ring-white/10 ${billing==="monthly" ? "bg-brand text-white":""}`} onClick={() => setBilling("monthly")}>月付</button>
        <button className={`px-3 py-2 rounded-lg ring-1 ring-neutral-200 dark:ring-white/10 ${billing==="yearly" ? "bg-brand text-white":""}`} onClick={() => setBilling("yearly")}>年付 <span className="opacity-80">(省 2 個月)</span></button>
      </div>
      <div id="buy" className="mt-8 grid md:grid-cols-3 gap-6">
        {pricing.tiers.map(t => (
          <div key={t.name} className={`card p-6 border ${t.popular ? "ring-2 ring-brand" : "ring-1 ring-neutral-200 dark:ring-white/10"}`}>
            <div className="flex items-baseline justify-between">
              <div>
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">{t.tagline}</p>
              </div>
              <span className="text-3xl font-bold">${billing==="monthly" ? t.monthly : t.yearly}</span>
            </div>
            <ul className="mt-4 space-y-2">
              {t.features.map(f => <li key={f} className="flex items-center gap-2">✔️ <span>{f}</span></li>)}
            </ul>
            <a href={t.cta} className="btn-primary mt-6 w-full text-center" data-analytics={`buy_${t.name.toLowerCase()}_${billing}`}>開始使用</a>
          </div>
        ))}
      </div>
    </section>
  );
}
