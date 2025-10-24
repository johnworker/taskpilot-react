import { testimonials } from "../../config/sections";
export default function Testimonials() {
  return (
    <section className="container-p py-16">
      <h2 className="text-3xl font-bold text-center">用戶見證</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {testimonials.map(t => (
          <figure key={t.author} className="card p-6">
            <blockquote className="text-neutral-700 dark:text-neutral-100">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-neutral-500">{t.author}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
