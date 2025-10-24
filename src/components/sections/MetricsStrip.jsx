import { metrics } from "../../config/sections";
export default function MetricsStrip() {
  return (
    <section className="container-p pt-2 pb-10">
      <div className="grid grid-cols-3 gap-4">
        {metrics.map(m => (
          <div key={m.label} className="text-center">
            <div className="text-3xl font-bold">{m.value}</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-300">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
