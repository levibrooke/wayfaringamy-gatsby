import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo.png'

const Header = () => (
  <nav className="navbar navbar-default navbar-static-top" role="navigation">
    <div className="container">
      {/* Brand and toggle get grouped for better mobile display */}
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-toggle" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="/">
          <img id="logo" alt="Wayfaring Amy" src={logo} />
        </a>
      </div>
      <div id="nav-toggle" className="collapse navbar-collapse">
        <ul id="menu-header" className="nav navbar-nav navbar-right">
          {/* Note: Change later to a loop for these nav items */}
          <li><Link to="/about" className="header_menu-item">About</Link></li>
          <li><Link to="/travel" className="header_menu-item">Travel</Link></li>
          <li><Link to="/thoughts" className="header_menu-item">Thoughts</Link></li>
          <li><Link to="/newsletter" className="header_menu-item">Newsletter</Link></li>
          <li><Link to="/contact" className="header_menu-item">Contact</Link></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
