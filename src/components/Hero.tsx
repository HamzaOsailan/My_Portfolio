import { motion, useReducedMotion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import profileImage from "../assets/Myimage.jpg.jpeg";
import { aboutMe } from "../data/data";

const Hero3DScene = lazy(() => import("./Hero3DScene"));

const Hero = () => {
  const [scrollHint, setScrollHint] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrollHint(window.scrollY < 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--tilt-x", `${-y * 10}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${x * 12}deg`);
  };

  const resetPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <section id="about" className="neo-hero">
      <div className="neo-hero-grid" aria-hidden="true" />
      <div className="neo-hero-glow neo-hero-glow-one" aria-hidden="true" />
      <div className="neo-hero-glow neo-hero-glow-two" aria-hidden="true" />
      <div className="neo-hero-noise" aria-hidden="true" />
      <Suspense fallback={null}>
        <Hero3DScene />
      </Suspense>

      <div className="neo-hero-inner">
        <motion.div
          className="neo-hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="neo-hero-kicker">
            <span className="neo-status-dot" />
            <span>SOFTWARE ENGINEER</span>
            <i />
            <span>FULL-STACK & BACKEND DEVELOPER</span>
          </div>

          <p className="neo-hero-overline">HELLO, I'M</p>

          <h1 className="neo-hero-title">
            Hamza
            <span>Osailan<span className="neo-title-period">.</span></span>
          </h1>

          <div className="neo-hero-role">
            <span className="neo-role-line" />
            <span>Building systems. Creating impact.</span>
          </div>

          <p className="neo-hero-description">{aboutMe}</p>

          <div className="neo-hero-actions">
            <a className="neo-button neo-button-primary" href="#portfolio">
              <span>EXPLORE MY WORK</span>
              <span aria-hidden="true">↗</span>
            </a>
            <a className="neo-button neo-button-ghost" href="#contact">
              LET'S CONNECT
            </a>
          </div>

          <div className="neo-hero-location">
            <span className="neo-location-mark" />
            <span>BASED IN SAUDI ARABIA</span>
            <span className="neo-location-divider">/</span>
            <span>OPEN TO OPPORTUNITIES</span>
          </div>
        </motion.div>

        <motion.div
          className="neo-portrait-column"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.88, x: 28 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="neo-portrait-orbit neo-orbit-one" aria-hidden="true" />
          <div className="neo-portrait-orbit neo-orbit-two" aria-hidden="true" />

          <div
            className="neo-portrait-stage"
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
          >
            <div className="neo-portrait-card">
              <div className="neo-portrait-topline">
                <span>PROFILE / 001</span>
                <span className="neo-portrait-live"><i /> ONLINE</span>
              </div>

              <div className="neo-portrait-image-wrap">
                <div className="neo-portrait-image-backdrop" />
                <img
                  src={profileImage}
                  alt="Hamza Osailan"
                  className="neo-portrait-image"
                  fetchPriority="high"
                />
                <div className="neo-portrait-image-shade" />
                <span className="neo-portrait-corner neo-corner-tl" />
                <span className="neo-portrait-corner neo-corner-br" />
              </div>

              <div className="neo-portrait-bottom">
                <div>
                  <span className="neo-portrait-label">CREATIVE MINDSET</span>
                  <strong>ENGINEER <span>×</span> BUILDER</strong>
                </div>
                <span className="neo-portrait-index">01 — 04</span>
              </div>
            </div>
          </div>

          <div className="neo-float-tag neo-float-tag-top">
            <span className="neo-float-icon">✳</span>
            <span>BACKEND<br />ENGINEERING</span>
          </div>

          <div className="neo-float-tag neo-float-tag-bottom">
            <span className="neo-float-pulse" />
            <span>TURNING IDEAS<br />INTO PRODUCTS</span>
          </div>

          <div className="neo-hero-coordinate" aria-hidden="true">
            24° 42' N&nbsp; / &nbsp;46° 40' E
          </div>
        </motion.div>
      </div>

      <div className={`neo-hero-scroll ${scrollHint ? "is-visible" : ""}`}>
        <span>SCROLL TO EXPLORE</span>
        <i />
      </div>

      <div className="neo-hero-index" aria-hidden="true">
        <span>01</span>
        <i />
        <span>07</span>
      </div>
    </section>
  );
};

export default Hero;
