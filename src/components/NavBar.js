import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = (props) => {

  const [activeLink, setActiveLink] = useState('home');

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsHub</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} aria-current="page" to="/" onClick={() => setActiveLink('home')}>Home</Link></li>
              <li className="nav-item"><Link className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} to="/about" onClick={() => setActiveLink('about')}>About</Link></li>
              <li className="nav-item"><Link className={`nav-link ${activeLink === 'business' ? 'active' : ''}`} to="/business" onClick={() => setActiveLink('business')}>Business</Link></li>
              <li className="nav-item"><Link className={`nav-link ${activeLink === 'entertainment' ? 'active' : ''}`} to="/entertainment" onClick={() => setActiveLink('entertainment')}>Entertainment</Link></li>
              <li className="nav-item"><Link className={`nav-link ${activeLink === 'general' ? 'active' : ''}`} to="/general" onClick={() => setActiveLink('general')}>General</Link></li>
              <li className="nav-item"><Link className={`nav-link ${activeLink === 'health' ? 'active' : ''}`} to="/health" onClick={() => setActiveLink('health')}>Health</Link></li>
              <li className="nav-item"><Link className={`nav-link ${activeLink === 'science' ? 'active' : ''}`} to="/science" onClick={() => setActiveLink('science')}>Science</Link></li>
              <li className="nav-item"><Link className={`nav-link ${activeLink === 'sports' ? 'active' : ''}`} to="/sports" onClick={() => setActiveLink('sports')}>Sports</Link></li>
              <li className="nav-item"><Link className={`nav-link ${activeLink === 'technology' ? 'active' : ''}`} to="/technology" onClick={() => setActiveLink('technology')}>Technology</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar