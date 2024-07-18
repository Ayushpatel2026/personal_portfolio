import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {

  return (
    <>
      <Header /> {/* add margin to the bottom of the header just to check */}
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default App
