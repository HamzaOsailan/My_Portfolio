import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ProjectsDetails from "./components/ProjectsDetails";

function App() {
  return (
    <Router>
      <div className="bg-black text-gray-100 scroll-smooth">
        <Navbar items={navItems} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Skills />
                <Experience />   {/* تظهر مرة واحدة هنا فقط */}
                <Projects />
                <Education />
                <Certifications />
                <ContactUs />
              </>
            }
          />
          <Route path="/projects/:title" element={<ProjectsDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;