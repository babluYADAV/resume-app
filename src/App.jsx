import TopLine from "./components/TopLine.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import FeaturedProject from "./components/FeaturedProject.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <TopLine />
      <div className="wrap">
        <Hero />
        <Experience />
        <FeaturedProject />
        <Skills />
        <Education />
      </div>
      <Footer />
    </>
  );
}
