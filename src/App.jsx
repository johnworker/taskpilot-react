import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAnalytics from "./composables/useAnalytics";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import CookieBanner from "./components/common/CookieBanner";
import StickyCTA from "./components/sections/StickyCTA";
import GoTop from "./components/common/GoTop";

export default function App() {
  const { bindClicks } = useAnalytics();
  useEffect(() => { bindClicks(document); }, [bindClicks]);

  return (
    <>
      <div className="min-h-dvh flex flex-col">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
      </div>
      <StickyCTA />
      <GoTop />
      <CookieBanner />
    </>
  );
}
