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
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default App
