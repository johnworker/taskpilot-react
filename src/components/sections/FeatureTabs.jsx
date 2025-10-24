import { useEffect, useState } from "react";
import { featureTabs } from "../../config/sections";

export default function FeatureTabs() {
  const [current, setCurrent] = useState(featureTabs[0]?.key || "ux");
  useEffect(() => { if (!current && featureTabs.length) setCurrent(featureTabs[0].key); }, [current]);

  return (
    <section className="container-p py-16">
      <div className="flex flex-wrap gap-2">
        {featureTabs.map(t => (
          <button key={t.key}
            className={`px-4 py-2 rounded-xl ring-1 ring-neutral-200 dark:ring-white/10 ${current===t.key ? "bg-brand text-white":""}`}
            onClick={() => setCurrent(t.key)} type="button">{t.label}</button>
        ))}
      </div>
      {featureTabs.map(t => current===t.key && (
        <div key={t.key} className="mt-8">
          <p className="text-neutral-600 dark:text-neutral-300">{t.intro}</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.items.map(it => (
              <article key={it.title} className="card p-6">
                <div className="text-3xl">{it.icon}</div>
                <h3 className="mt-3 font-semibold text-lg">{it.title}</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-300">{it.desc}</p>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
