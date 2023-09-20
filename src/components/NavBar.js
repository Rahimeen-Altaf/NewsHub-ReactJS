import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NavBar extends Component {
    constructor() {
      super();
      this.state = {
          activeLink: 'home',
      };
  }

  setActiveLink = (link) => {
      this.setState({ activeLink: link });
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsHub</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className={`nav-link ${this.state.activeLink === 'home' ? 'active' : ''}`} aria-current="page" to="/" onClick={() => this.setActiveLink('home')}>Home</Link></li>
                <li className="nav-item"><Link className={`nav-link ${this.state.activeLink === 'about' ? 'active' : ''}`} to="/about" onClick={() => this.setActiveLink('about')}>About</Link></li>
                <li className="nav-item"><Link className={`nav-link ${this.state.activeLink === 'business' ? 'active' : ''}`} to="/business" onClick={() => this.setActiveLink('business')}>Business</Link></li>
                <li className="nav-item"><Link className={`nav-link ${this.state.activeLink === 'entertainment' ? 'active' : ''}`} to="/entertainment" onClick={() => this.setActiveLink('entertainment')}>Entertainment</Link></li>
                <li className="nav-item"><Link className={`nav-link ${this.state.activeLink === 'general' ? 'active' : ''}`} to="/general" onClick={() => this.setActiveLink('general')}>General</Link></li>
                <li className="nav-item"><Link className={`nav-link ${this.state.activeLink === 'health' ? 'active' : ''}`} to="/health" onClick={() => this.setActiveLink('health')}>Health</Link></li>
                <li className="nav-item"><Link className={`nav-link ${this.state.activeLink === 'science' ? 'active' : ''}`} to="/science" onClick={() => this.setActiveLink('science')}>Science</Link></li>
                <li className="nav-item"><Link className={`nav-link ${this.state.activeLink === 'sports' ? 'active' : ''}`} to="/sports" onClick={() => this.setActiveLink('sports')}>Sports</Link></li>
                <li className="nav-item"><Link className={`nav-link ${this.state.activeLink === 'technology' ? 'active' : ''}`} to="/technology" onClick={() => this.setActiveLink('technology')}>Technology</Link></li>
            </ul>
            </div>
        </div>
        </nav>
      </>
    )
  }
}

export default NavBar