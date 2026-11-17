import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

const Hero3DScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 10);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);

    const violet = new THREE.MeshBasicMaterial({
      color: 0x9b5cff,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });

    const blue = new THREE.MeshBasicMaterial({
      color: 0x38a5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.48,
    });

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.55, 2),
      violet
    );
    core.position.set(2.1, 0.15, -0.8);
    root.add(core);

    const knot = new THREE.Mesh(
      new THREE.TorusKnotGeometry(0.78, 0.018, 160, 8, 2, 5),
      blue
    );
    knot.position.set(2.1, 0.15, 0.15);
    root.add(knot);

    const orbitMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b69ff,
      transparent: true,
      opacity: 0.32,
    });

    const orbitOne = new THREE.Mesh(
      new THREE.TorusGeometry(2.25, 0.009, 8, 120),
      orbitMaterial
    );
    orbitOne.position.copy(core.position);
    orbitOne.rotation.set(0.9, 0.3, 0.45);
    root.add(orbitOne);

    const orbitTwo = new THREE.Mesh(
      new THREE.TorusGeometry(2.65, 0.006, 8, 120),
      blue
    );
    orbitTwo.position.copy(core.position);
    orbitTwo.rotation.set(1.25, 0.6, -0.35);
    root.add(orbitTwo);

    const particleCount = 230;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5 - 1;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x9c83ff,
      size: 0.025,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    let frameId = 0;
    let width = 0;
    let height = 0;
    let pointerX = 0;
    let pointerY = 0;
    let disposed = false;

    const resize = () => {
      if (!container || disposed) return;
      width = container.clientWidth;
      height = container.clientHeight;

      if (!width || !height) return;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch" || reduceMotion) return;

      const bounds = container.getBoundingClientRect();
      pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.25;
      pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.2;
    };

    const animate = () => {
      if (disposed) return;

      core.rotation.x += 0.0018;
      core.rotation.y += 0.0025;
      knot.rotation.x -= 0.0015;
      knot.rotation.y += 0.002;
      orbitOne.rotation.z += 0.0008;
      orbitTwo.rotation.x -= 0.0006;

      root.rotation.y += (pointerX - root.rotation.y) * 0.025;
      root.rotation.x += (-pointerY - root.rotation.x) * 0.025;

      particles.rotation.y += 0.00015;
      renderer.render(scene, camera);

      if (!reduceMotion) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    container.addEventListener("pointermove", onPointerMove, { passive: true });

    resize();
    animate();

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      container.removeEventListener("pointermove", onPointerMove);

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          object.geometry.dispose();

          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];

          materials.forEach((material) => material.dispose());
        }
      });

      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [reduceMotion]);

  return (
    <div
      ref={containerRef}
      className="neo-3d-scene"
      aria-hidden="true"
    />
  );
};

export default Hero3DScene;
