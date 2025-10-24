export function useAnalytics() {
  function trackEvent(name, params = {}) {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", name, params);
    }
    if (typeof window !== "undefined" && window.plausible) {
      window.plausible(name, { props: params });
    }
    if (!(typeof window !== "undefined" && (window.gtag || window.plausible))) {
      // eslint-disable-next-line no-console
      console.debug("[analytics]", name, params);
    }
  }

  function bindClicks(root = document) {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll("[data-analytics]").forEach((el) => {
      if (el.__tp_analytics_bound) return;
      el.addEventListener("click", () => {
        const evt = el.getAttribute("data-analytics");
        if (evt) trackEvent(evt, {
          id: el.id || undefined,
          href: el.getAttribute("href") || el.getAttribute("to") || undefined,
          text: (el.textContent || "").trim() || undefined,
        });
      });
      el.__tp_analytics_bound = true;
    });
  }

  return { trackEvent, bindClicks };
}

export default useAnalytics;
