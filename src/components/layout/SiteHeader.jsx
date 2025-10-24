import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PrefetchLink from "../../utils/PrefetchLink";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = (p) => location.pathname === p;

  function toggleDark() {
    document.documentElement.classList.toggle("dark");
    const v = document.documentElement.classList.contains("dark") ? "1" : "0";
    localStorage.setItem("tp_dark", v);
  }

  useEffect(() => {
    const dark = localStorage.getItem("tp_dark") === "1";
    if (dark) document.documentElement.classList.add("dark");
  }, []);

  // 懶載入對應：與 main.jsx 的 lazy import 保持一致
  const pf = {
    home:     () => import("../../pages/Home"),
    features: () => import("../../pages/Features"),
    pricing:  () => import("../../pages/Pricing"),
    blog:     () => import("../../pages/Blog"),
    about:    () => import("../../pages/About"),
    contact:  () => import("../../pages/Contact"),
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b dark:bg-neutral-950/80">
      <nav className="container-p h-16 flex items-center justify-between">
        <PrefetchLink to="/" prefetch={pf.home} className="font-bold" aria-label="TaskPilot Home">
          TaskPilot
        </PrefetchLink>

        <ul className="hidden md:flex items-center gap-6">
          <li><PrefetchLink to="/features" prefetch={pf.features} className={isActive("/features") ? "underline" : ""}>功能</PrefetchLink></li>
          <li><PrefetchLink to="/pricing"  prefetch={pf.pricing}  className={isActive("/pricing")  ? "underline" : ""}>定價</PrefetchLink></li>
          <li><PrefetchLink to="/blog"     prefetch={pf.blog}     className={isActive("/blog")     ? "underline" : ""}>部落格</PrefetchLink></li>
          <li><PrefetchLink to="/about"    prefetch={pf.about}    className={isActive("/about")    ? "underline" : ""}>關於</PrefetchLink></li>
        </ul>

        <div className="flex items-center gap-2">
          <button className="px-3 py-2 rounded-lg ring-1 ring-neutral-200 dark:ring-white/10" onClick={toggleDark} aria-label="切換深色模式">🌙</button>
          <PrefetchLink to="/pricing#buy" prefetch={pf.pricing} className="btn-primary hidden sm:inline-flex" id="header-cta" data-analytics="cta_header_free_start">
            免費開始
          </PrefetchLink>
          <button className="md:hidden px-3 py-2 rounded-lg ring-1 ring-neutral-200 dark:ring-white/10" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-controls="mobile-menu">☰</button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t dark:border-white/10">
          <div className="container-p py-4 flex flex-col gap-3">
            <PrefetchLink to="/features" prefetch={pf.features} onClick={() => setOpen(false)}>功能</PrefetchLink>
            <PrefetchLink to="/pricing"  prefetch={pf.pricing}  onClick={() => setOpen(false)}>定價</PrefetchLink>
            <PrefetchLink to="/blog"     prefetch={pf.blog}     onClick={() => setOpen(false)}>部落格</PrefetchLink>
            <PrefetchLink to="/about"    prefetch={pf.about}    onClick={() => setOpen(false)}>關於</PrefetchLink>
            <PrefetchLink to="/pricing#buy" prefetch={pf.pricing} className="btn-primary text-center" id="mobile-cta" data-analytics="cta_mobile_free_start" onClick={() => setOpen(false)}>
              免費開始
            </PrefetchLink>
          </div>
        </div>
      )}
    </header>
  );
}
