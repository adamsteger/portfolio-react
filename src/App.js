import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Experiences from "./components/experiences/experiences";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Home />
      <About />
      <hr />
      <Skills />
      <hr />
      <Experiences />
    </div>
  );
}

export default App;
