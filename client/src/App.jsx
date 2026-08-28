import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Location from './pages/Location'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/about"    element={<About />}    />
        <Route path="/gallery"  element={<Gallery />}  />
        <Route path="/contact"  element={<Contact />}  />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App