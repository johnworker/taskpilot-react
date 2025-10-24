import { Link } from "react-router-dom";
import { hero } from "../../config/sections";
import heroShot from "../../assets/hero.png"; // ← 直接從 src/assets 匯入

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-10 dark:opacity-20"
        aria-hidden="true"
        style={{
          background: `radial-gradient(600px 300px at 10% -10%, rgba(99,102,241,.6), transparent),
                       radial-gradient(600px 300px at 90% -10%, rgba(99,102,241,.3), transparent)`
        }}
      />
      <div className="container-p pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl/tight sm:text-5xl font-bold">{hero.headline}</h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">{hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to={hero.primaryHref} className="btn-primary" id="hero-cta" data-analytics="cta_hero_start">
                立即開始
              </Link>
              <Link
                to={hero.secondaryTo}
                className="inline-flex items-center justify-center rounded-xl ring-1 ring-neutral-200 dark:ring-white/10 px-5 py-3"
              >
                看看功能
              </Link>
            </div>
            <ul className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-300">
              {hero.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  ✔️ <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            {/* 直接用 import 後的變數當 src */}
            <img
              src={heroShot}
              alt="TaskPilot 產品預覽"
              loading="lazy"
              className="w-full rounded-2xl shadow-xl ring-1 ring-black/5 dark:ring-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
