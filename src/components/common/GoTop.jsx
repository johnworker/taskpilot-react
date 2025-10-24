import { useEffect, useState } from "react";
import useAnalytics from "../../composables/useAnalytics";

export default function GoTop() {
  const [visible, setVisible] = useState(false);
  const { trackEvent } = useAnalytics();
  useEffect(() => {
    const onScroll = () => setVisible((window.scrollY || 0) > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  function goTop() {
    try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch { window.scrollTo(0,0); }
    trackEvent("gotop_click");
  }
  if (!visible) return null;
  return (
    <button
      onClick={goTop}
      aria-label="回到頁面頂部"
      title="回到頂部"
      className="fixed bottom-6 md:bottom-20 right-6 z-50 rounded-full h-12 w-12 flex items-center justify-center
                 bg-brand text-white shadow-lg ring-1 ring-black/5 no-hover-scale"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      ↑
    </button>
  );
}
