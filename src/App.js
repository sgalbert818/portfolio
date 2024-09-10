import './App.css';
import Intro from "./components/Intro"
import About from "./components/About"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import { Link, Element } from "react-scroll"

function App() {
    return (
        <div>
            <Element name="intro">
                <Intro></Intro>
            </Element>
            <nav className="navbar">
                <div className="nav-options">
                    <Link to="intro" smooth={true} duration={500}>
                        <button className="nav-btn">Home</button>
                    </Link>
                    <Link to="about" smooth={true} duration={500}>
                        <button className="nav-btn">About</button>
                    </Link>
                    <Link to="projects" smooth={true} duration={500}>
                        <button className="nav-btn">Projects</button>
                    </Link>
                </div>
            </nav>
            <Element name="about">
                <About></About>
            </Element>
            <Element name="projects">
                <Projects></Projects>
            </Element>
            <Footer></Footer>
        </div>
    )
}

export default App;
