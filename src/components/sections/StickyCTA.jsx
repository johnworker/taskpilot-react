import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cta } from "../../config/sections";
import useAnalytics from "../../composables/useAnalytics";

const SHOW_AFTER = 800;
const STORAGE_KEY = "tp_stickycta_closed";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    try { setClosed(sessionStorage.getItem(STORAGE_KEY) === "1"); } catch {}
    const onScroll = () => {
      if (closed) return;
      setVisible((window.scrollY || 0) > SHOW_AFTER);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [closed]);

  function close() {
    setClosed(true); setVisible(false);
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch {}
    trackEvent("sticky_cta_closed");
  }

  if (!visible || closed) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50" role="region" aria-label="快速開始" style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0px)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-3">
        <div className="rounded-2xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 bg-white/95 dark:bg-neutral-900/95 backdrop-blur">
          <div className="px-5 py-4 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold">{cta.title}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">{cta.desc}</p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/pricing#buy" className="btn-primary no-hover-scale" id="sticky-cta-primary" data-analytics="cta_sticky_primary">立刻開始</Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-xl ring-1 ring-neutral-200 dark:ring-white/10 px-4 py-2 no-hover-scale" id="sticky-cta-secondary" data-analytics="cta_sticky_help">需要協助</Link>
              <button className="px-3 py-2 rounded-lg ring-1 ring-neutral-200 dark:ring-white/10 no-hover-scale" onClick={close} aria-label="關閉底部提示" title="關閉">✕</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
