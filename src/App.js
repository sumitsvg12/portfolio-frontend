
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Education from "./pages/Education";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "../src/App.css"

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About/>
    <Education/>
    <Services/>
    <Skills/>
    <Projects/>
    <Contact/>
  </>
  );
}

export default App;