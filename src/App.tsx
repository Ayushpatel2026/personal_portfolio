import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className="app-container">
      <Header /> {/* add margin to the bottom of the header just to check */}
      <Home/>
      <About />
      <section id="projects">
        <span className="project-heading">
          Projects
        </span>
        <div className="project-container">
          <Project/>
          <Project/>
        </div>
      </section>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App;
