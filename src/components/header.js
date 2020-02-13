import React, { Component } from "react"
import Link from 'gatsby-plugin-transition-link'
import PropTypes from "prop-types"

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navVisible: true,
    };
  }

  toggleSidenav = () => {
    this.setState({ navVisible: !this.state.navVisible });
    this.toggleMenu = this.state.navVisible ? 'active' : '';
  }

  render() { 
    return (
      <>
        <header>
          <div className="logo">
            <Link to="/" className="hover-this"><img src="https://picsum.photos/80/80" alt="logo" /></Link>
          </div>
          <div className={'navigation ' + this.toggleMenu}>
            <nav className="menu-items">
              <Link cover className="hover-this" duration={2} to="/" bg="#ffff" direction="right" onClick={this.toggleSidenav}>
                <span className="underlined">Home</span>
              </Link>
              <Link to="/about" className="hover-this" activeClassName="current" onClick={this.toggleSidenav}>
                <span className="underlined">About</span>
              </Link >
              <Link to="/projects" className="hover-this" activeClassName="current" onClick={this.toggleSidenav}>
                <span className="underlined">Works</span>
              </Link >
              <Link to="/contacts" className="hover-this" activeClassName="current" onClick={this.toggleSidenav}>
                <span className="underlined">Contact</span>
              </Link >
              <Link to="/contacts" className="button invert my-20">Resume</Link>
            </nav>
          </div>
          <div onClick={this.toggleSidenav} className={'hover-this menu-burger ' + this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>
      </>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

