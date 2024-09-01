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
          <Project
            projectTitle="Chess Engine"
            projectDescription="This project is a Java-based application that leverages Java Swing utilities to provide a GUI. It has allowed me to practically apply object oriented programming concepts learned in class and showcases a minimax algorithm to calculate computer moves."
            gitHubLink="https://github.com/Ayushpatel2026/chess-engine"
          />
          <Project
            projectTitle="Rescue Mission"
            projectDescription="This collaborative class project is an exploration command center for the Island game. Coded in the Java programming language, this project was a great way to learn SOLID and Agile principles. It was also my first introduction to complex UML diagrams and full unit testing."
            gitHubLink="https://github.com/2AA4-W24/a2-rescue-mission-team-217"
          />
          <Project
            projectTitle="E-Commerce Website"
            projectDescription="This is a full stack application built with Next.js, Sanity as the backend CMS, and Stripe for payment processing. This modern e-commerce website provides a seamless shopping experience from browsing products, adding to cart and completing a purchase."
            gitHubLink='https://github.com/Ayushpatel2026/ecommerce'
            websiteLink='https://ecommerce-headphonestore.vercel.app/'
          />
        </div>
      </section>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App;
