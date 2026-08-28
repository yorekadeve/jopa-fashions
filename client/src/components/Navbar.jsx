import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <div className="navbar__logo-placeholder" />
        <span className="navbar__name">JOPA FASHIONS</span>
      </div>

      <button
        className="navbar__hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        <li><Link to="/"         onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about"    onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/gallery"  onClick={() => setMenuOpen(false)}>Gallery</Link></li>
        <li><Link to="/contact"  onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/location" onClick={() => setMenuOpen(false)}>Location</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar