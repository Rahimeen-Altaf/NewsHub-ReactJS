import React, { Component } from 'react'

export class NavBar extends Component {
    constructor() {
      super();
      this.state = {
          activeLink: 'home', // Default active link is 'home'
      };
  }

  // Function to set the active link when a link is clicked
  setActiveLink = (link) => {
      this.setState({ activeLink: link });
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">NewsHub</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className={`nav-link ${this.state.activeLink === 'home' ? 'active' : ''}`} aria-current="page" href="/" onClick={() => this.setActiveLink('home')}>Home</a></li>
                <li className="nav-item"><a className={`nav-link ${this.state.activeLink === 'about' ? 'active' : ''}`} href="/about" onClick={() => this.setActiveLink('about')}>About</a></li>
                <li className="nav-item"><a className={`nav-link ${this.state.activeLink === 'business' ? 'active' : ''}`} href="/business" onClick={() => this.setActiveLink('business')}>Business</a></li>
                <li className="nav-item"><a className={`nav-link ${this.state.activeLink === 'entertainment' ? 'active' : ''}`} href="/entertainment" onClick={() => this.setActiveLink('entertainment')}>Entertainment</a></li>
                <li className="nav-item"><a className={`nav-link ${this.state.activeLink === 'general' ? 'active' : ''}`} href="/general" onClick={() => this.setActiveLink('general')}>General</a></li>
                <li className="nav-item"><a className={`nav-link ${this.state.activeLink === 'health' ? 'active' : ''}`} href="/health" onClick={() => this.setActiveLink('health')}>Health</a></li>
                <li className="nav-item"><a className={`nav-link ${this.state.activeLink === 'science' ? 'active' : ''}`} href="/science" onClick={() => this.setActiveLink('science')}>Science</a></li>
                <li className="nav-item"><a className={`nav-link ${this.state.activeLink === 'sports' ? 'active' : ''}`} href="/sports" onClick={() => this.setActiveLink('sports')}>Sports</a></li>
                <li className="nav-item"><a className={`nav-link ${this.state.activeLink === 'tech' ? 'active' : ''}`} href="/tech" onClick={() => this.setActiveLink('tech')}>Technology</a></li>
            </ul>
            </div>
        </div>
        </nav>
      </>
    )
  }
}

export default NavBar