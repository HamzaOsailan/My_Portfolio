import React, { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// eslint-disable-next-line react-refresh/only-export-components -- application entry component.
function PortfolioEntry() {
  useEffect(() => {
    let cancelled = false;
    let removeTimer: number | undefined;
    let loadHandler: (() => void) | undefined;

    const pageLoaded = document.readyState === "complete"
      ? Promise.resolve()
      : new Promise<void>((resolve) => {
          loadHandler = () => resolve();
          window.addEventListener("load", loadHandler, { once: true });
        });

    const minimumDisplay = new Promise<void>((resolve) => {
      window.setTimeout(resolve, 1200);
    });

    const pageReady = Promise.race([
      Promise.all([pageLoaded, document.fonts.ready]).then(() => undefined),
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, 10000);
      }),
    ]);

    Promise.all([minimumDisplay, pageReady]).then(() => {
      if (cancelled) return;

      const splash = document.getElementById("initial-splash");
      if (splash) {
        splash.classList.add("is-leaving");
      }

      removeTimer = window.setTimeout(() => {
        if (splash) {
          splash.remove();
        }

        const hero = document.getElementById("about");
        if (hero) {
          const heroTop = hero.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: Math.max(0, heroTop),
            left: 0,
            behavior: "instant",
          });
        }
      }, 650);
    });

    return () => {
      cancelled = true;

      if (loadHandler) {
        window.removeEventListener("load", loadHandler);
      }

      if (removeTimer !== undefined) {
        window.clearTimeout(removeTimer);
      }
    };
  }, []);

  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <PortfolioEntry />
    </MotionConfig>
  </React.StrictMode>
);