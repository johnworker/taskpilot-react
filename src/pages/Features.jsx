import FeatureTabs from "../components/sections/FeatureTabs";
import FeatureGrid from "../components/sections/FeatureGrid";

export default function Features() {
  return (
    <>
      <section className="container-p py-12">
        <h1 className="text-3xl font-bold">功能總覽</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">瀏覽不同面向：設計體驗、效能、整合。</p>
      </section>
      <FeatureTabs />
      <FeatureGrid />
    </>
  );
}
