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
import { Helmet } from 'react-helmet';
const App = () => {
  const [loading, setLoading] = React.useState(true);
  console.warn = () => {}
  console.error = () => {}
  return (
    <BrowserRouter>
    <Navbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Joaby Oliveira</title>
        <link rel="shortcut icon" href="caminhodoarquivo/favicon.ico" />
      </Helmet>
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
