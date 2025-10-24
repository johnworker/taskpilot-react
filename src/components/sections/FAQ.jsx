import { faqs } from "../../config/sections";
export default function FAQ() {
  return (
    <section className="container-p py-16">
      <h2 className="text-3xl font-bold">常見問題</h2>
      <div className="mt-6 space-y-4">
        {faqs.map(f => (
          <details key={f.q} className="card p-5">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
