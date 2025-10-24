export default function Contact() {
  return (
    <section className="container-p py-12">
      <h1 className="text-3xl font-bold">聯絡我們</h1>
      <form className="mt-6 max-w-xl space-y-3" action="https://formspree.io/f/YOUR_ID" method="POST">
        <input name="name" placeholder="你的名字" required className="w-full rounded-xl px-3 py-2 ring-1 ring-neutral-200 dark:ring-white/10 bg-transparent" />
        <input type="email" name="email" placeholder="你的 Email" required className="w-full rounded-xl px-3 py-2 ring-1 ring-neutral-200 dark:ring-white/10 bg-transparent" />
        <textarea name="message" placeholder="你的訊息" rows="5" className="w-full rounded-xl px-3 py-2 ring-1 ring-neutral-200 dark:ring-white/10 bg-transparent"></textarea>
        <button className="btn-primary">送出</button>
      </form>
    </section>
  );
}
