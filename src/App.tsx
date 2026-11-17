import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import { navItems } from "./data/data";
import Footer from "./components/Footer";

const WireframeScene = lazy(() => import("./components/WireframeScene"));
const ProjectsDetails = lazy(() => import("./components/ProjectsDetails"));

function RouteScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        const targetId = decodeURIComponent(hash.slice(1));
        document.getElementById(targetId)?.scrollIntoView({ block: "start" });
      } else {
        window.scrollTo({ top: 0, left: 0 });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}

function NotFound() {
  return (
    <main className="wf-project-not-found">
      <span className="wf-project-eyebrow">404 / PAGE NOT FOUND</span>
      <h1>PAGE NOT FOUND<span>.</span></h1>
      <p>The page you are looking for could not be found.</p>
      <Link to="/" className="wf-not-found-link">RETURN HOME</Link>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-black text-gray-100 scroll-smooth">
        <RouteScrollManager />
        <Navbar items={navItems} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="portfolio-page">
                <Suspense fallback={<div className="wireframe-canvas" aria-hidden="true" />}>
                  <WireframeScene />
                </Suspense>
                <main className="portfolio-content">
                  <Hero />
                  <Projects />
                  <Experience />
                  <Skills />
                  <Education />
                  <Certifications />
                  <ContactUs />
                </main>
              </div>
            }
          />
          <Route
            path="/projects/:title"
            element={
              <Suspense fallback={<div className="project-loading" role="status">Loading project...</div>}>
                <ProjectsDetails />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
