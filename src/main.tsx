import React, { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// eslint-disable-next-line react-refresh/only-export-components -- application entry component.
function PortfolioEntry() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

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

      setLeaving(true);

      removeTimer = window.setTimeout(() => {
        window.requestAnimationFrame(() => {
          const hero = document.getElementById("about");

          if (hero) {
            const heroTop = hero.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
              top: Math.max(0, heroTop),
              left: 0,
              behavior: "instant",
            });
          }

          window.requestAnimationFrame(() => {
            setVisible(false);
          });
        });
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

  return (
    <>
      <App />
      {visible && (
        <div
          className={`portfolio-splash${leaving ? " is-leaving" : ""}`}
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          <div className="portfolio-splash-grid" />
          <div className="portfolio-splash-content">
            <div className="portfolio-splash-emblem">
              <span className="portfolio-splash-orbit portfolio-splash-orbit-one" />
              <span className="portfolio-splash-orbit portfolio-splash-orbit-two" />
              <img
                className="portfolio-splash-icon"
                src="/hamza-osailan-favicon.png"
                alt=""
                aria-hidden="true"
              />
              <span className="portfolio-splash-emblem-dot" />
            </div>

            <div className="portfolio-splash-name">HAMZA OSAILAN</div>
            <div className="portfolio-splash-role">
              DEVELOPER <span>·</span> QUALITY ENGINEER
            </div>

            <div className="portfolio-splash-progress">
              <span />
            </div>
            <div className="portfolio-splash-caption">INITIALIZING EXPERIENCE</div>
          </div>
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <PortfolioEntry />
    </MotionConfig>
  </React.StrictMode>
);