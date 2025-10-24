import { useEffect, useState } from "react";
export default function CookieBanner() {
  const KEY = "tp_cookie_ok";
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(localStorage.getItem(KEY) !== "1"); }, []);
  function accept() { localStorage.setItem(KEY, "1"); setShow(false); }
  if (!show) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3">
      <div className="container-p">
        <div className="rounded-2xl bg-neutral-900 text-white p-4 flex flex-col sm:flex-row gap-3 items-center">
          <p className="text-sm">本網站使用 cookie 改善體驗。詳見隱私權政策。</p>
          <div className="ml-auto">
            <button onClick={accept} className="btn-primary no-hover-scale">知道了</button>
          </div>
        </div>
      </div>
    </div>
  );
}
