const ACTION = "https://formspree.io/f/YOUR_ID";
export default function NewsletterBar() {
  return (
    <section className="container-p py-12">
      <div className="card p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">取得新模板與優惠通知</h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">不亂發信，每月 1–2 封精選內容。</p>
        </div>
        <form action={ACTION} method="POST" className="flex-1 flex gap-2 w-full md:w-auto">
          <input type="email" name="email" required placeholder="你的 Email" className="flex-1 min-w-0 px-3 py-2 rounded-xl ring-1 ring-neutral-200 dark:ring-white/10 bg-transparent" />
          <button className="btn-primary">訂閱</button>
        </form>
      </div>
    </section>
  );
}
