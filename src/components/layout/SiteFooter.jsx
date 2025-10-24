import { Link } from "react-router-dom";
import { useSite } from "../../config/useSite";

export default function SiteFooter() {
  const { site } = useSite();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t">
      <div className="container-p py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="text-xl font-bold">{site.name}</Link>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">{site.tagline}</p>
        </div>
        <nav>
          <h3 className="text-sm font-semibold">導覽</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/features">功能</Link></li>
            <li><Link to="/pricing">定價</Link></li>
            <li><Link to="/blog">部落格</Link></li>
            <li><Link to="/about">關於</Link></li>
          </ul>
        </nav>
        <nav>
          <h3 className="text-sm font-semibold">法務</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to={site.legal.privacy}>隱私權政策</Link></li>
            <li><Link to={site.legal.terms}>服務條款</Link></li>
          </ul>
        </nav>
      </div>

      <div className="container-p py-6 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-500">
        <p>© {year} {site.name}. All rights reserved.</p>
        <div className="mt-3 md:mt-0 flex items-center gap-4">
          <a href={site.links.twitter} aria-label="Twitter">Twitter</a>
          <a href={site.links.github} aria-label="GitHub">GitHub</a>
          <Link to={site.links.contact}>Contact</Link>
          <Link to="/pricing#buy" className="btn-primary no-hover-scale" id="footer-cta" data-analytics="cta_footer_free_start">
            免費開始
          </Link>
        </div>
      </div>
    </footer>
  );
}
