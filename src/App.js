import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Notfound from './Components/Notfound'
import About from './Components/About'
import Project from './Components/Project'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact';
const App = () => {
  const [loading, setLoading] = React.useState(true);
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id:qtt" element={<Project />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
