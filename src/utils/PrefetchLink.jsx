import { Link } from "react-router-dom";

/**
 * PrefetchLink
 * - props.to: 目標路徑
 * - props.prefetch: () => Promise  對應路徑的 lazy import（用於預抓）
 */
export default function PrefetchLink({ to, prefetch, children, ...rest }) {
  function handlePrefetch() {
    if (typeof prefetch === "function") {
      try { prefetch(); } catch {}
    }
  }
  return (
    <Link
      to={to}
      onMouseEnter={handlePrefetch}
      onFocus={handlePrefetch}
      {...rest}
    >
      {children}
    </Link>
  );
}
