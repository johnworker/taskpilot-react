import { Link } from "react-router-dom";
import { features } from "../../config/sections";

export default function FeatureGrid() {
  return (
    <section id="features" className="container-p py-16">
      <h2 className="text-3xl font-bold text-center">功能亮點</h2>
      <p className="mt-2 text-center text-neutral-600 dark:text-neutral-300">用最低學習負擔，做出能轉換的著陸頁。</p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(f => (
          <article key={f.title} className="card p-6">
            <div className="text-3xl">{f.icon}</div>
            <h3 className="mt-3 font-semibold text-lg">{f.title}</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">{f.desc}</p>
            <Link to={f.href} className="mt-4 inline-flex underline underline-offset-4">了解更多 →</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
