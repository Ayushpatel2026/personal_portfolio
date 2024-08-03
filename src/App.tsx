import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
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
      <Experience />
      <Projects />
      <Contact />
      <Footer>

      </Footer>
    </div>
  )
}

export default App;
