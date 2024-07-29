import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Social from "./components/Social";
import About from "./components/About";
import Portfolio from "./components/Project";
import Experiences from "./components/Skill"
import Contact from "./components/Contact";
import Education from "./components/Education";
function App() {
  return (
    <div>
     <NavBar/>
      <Home/>
      <Social/>
      <About/>
      <Education/>
      <Portfolio/>
      <Experiences/>
      <Contact/>
        

    </div>
  )
}

export default App;
