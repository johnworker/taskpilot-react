import PricingTable from "../components/sections/PricingTable";
import FAQ from "../components/sections/FAQ";

export default function Pricing() {
  return (
    <>
      <section className="container-p py-12">
        <h1 className="text-3xl font-bold">定價方案</h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">一次購買，永久使用，含更新。</p>
      </section>
      <PricingTable />
      <FAQ />
    </>
  );
}
