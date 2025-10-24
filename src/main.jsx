import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import "./assets/index.css";
import App from "./App";

// === 懶載入各頁 ===
const Home = React.lazy(() => import("./pages/Home"));
const Features = React.lazy(() => import("./pages/Features"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const Blog = React.lazy(() => import("./pages/Blog"));
const BlogPost = React.lazy(() => import("./pages/BlogPost"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Privacy = React.lazy(() => import("./pages/Privacy"));
const Terms = React.lazy(() => import("./pages/Terms"));

// Hash 平滑捲動（處理 /pricing#buy 等）
function HashScroll() {
  React.useEffect(() => {
    const handle = () => {
      if (window.location.hash) {
        const el = document.querySelector(window.location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    handle();
  }, []);
  return null;
}

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        <ScrollRestoration />
        <HashScroll />
      </>
    ),
    children: [
      { index: true, element: <React.Suspense fallback={null}><Home /></React.Suspense> },
      { path: "features", element: <React.Suspense fallback={null}><Features /></React.Suspense> },
      { path: "pricing", element: <React.Suspense fallback={null}><Pricing /></React.Suspense> },
      { path: "blog", element: <React.Suspense fallback={null}><Blog /></React.Suspense> },
      { path: "blog/:slug", element: <React.Suspense fallback={null}><BlogPost /></React.Suspense> },
      { path: "about", element: <React.Suspense fallback={null}><About /></React.Suspense> },
      { path: "contact", element: <React.Suspense fallback={null}><Contact /></React.Suspense> },
      { path: "privacy", element: <React.Suspense fallback={null}><Privacy /></React.Suspense> },
      { path: "terms", element: <React.Suspense fallback={null}><Terms /></React.Suspense> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
