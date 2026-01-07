import Hero from "./components/Hero";
import MobileMenu from "./components/MobileMenu";
import Latest from "./sections/Latest";
import Research from "./sections/Research";
import Work from "./sections/Work";
import Projects from "./sections/Projects";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Hero />
      <MobileMenu />
      <main className="main-content">
        <Latest />
        <Research />
        <Work />
        <Projects />
      </main>
    </div>
  );
}

export default App;
