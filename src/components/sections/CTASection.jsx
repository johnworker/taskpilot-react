import { Link } from "react-router-dom";
import { cta } from "../../config/sections";
export default function CTASection() {
  return (
    <section className="container-p py-16">
      <div className="card p-8 text-center">
        <h3 className="text-2xl font-bold">{cta.title}</h3>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">{cta.desc}</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link to={cta.primaryHref} className="btn-primary" id="cta-primary" data-analytics="cta_primary">立刻開始</Link>
          <Link to={cta.secondaryTo} className="inline-flex items-center justify-center rounded-xl ring-1 ring-neutral-200 dark:ring-white/10 px-5 py-3" id="cta-secondary" data-analytics="cta_need_help">
            需要協助
          </Link>
        </div>
      </div>
    </section>
  );
}
