import { useEffect, useRef } from "react";
import { portfolioItems } from "../data/data";

const WireframeScene = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  const sceneCards = Array.from({ length: 8 }, (_, index) => ({
    project: portfolioItems[index % portfolioItems.length],
    index,
  }));

  useEffect(() => {
    const orbit = orbitRef.current;
    if (!orbit) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onPointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 5;
      const y = (event.clientY / window.innerHeight - 0.5) * -4;
      orbit.style.setProperty("--tilt-x", `${x}deg`);
      orbit.style.setProperty("--tilt-y", `${y}deg`);
    };
    const onScroll = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight * 1.2), 1);
      const canvas = orbit.parentElement;
      if (!canvas) return;
      canvas.style.opacity = String(1 - progress * 0.78);
      if (!reducedMotion.matches) {
        orbit.style.setProperty("--scene-shift", `${progress * -28}px`);
        orbit.style.setProperty("--scene-scale", String(1 - progress * 0.045));
      }
    };

    if (!reducedMotion.matches) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="wireframe-canvas" aria-hidden="true">
      <div className="project-orbit" ref={orbitRef}>
        {sceneCards.map(({ project, index }) => (
          <div className={`project-plane project-plane-${index + 1}`} key={`${project.title}-${index}`}>
            <img src={project.cardImage} alt="" loading={index < 4 ? "eager" : "lazy"} />
            <span className="project-plane-frame" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WireframeScene;
