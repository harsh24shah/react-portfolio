import React, { Component } from "react"
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import Image from "../components/image"
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import { FaBehance } from "react-icons/fa";

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
            <Link to="/" className="hover-this">
              <Image src="https://i.picsum.photos/id/1048/80/80.jpg" alt="logo" />
            </Link>
          </div>
          <div className={'navigation ' + this.toggleMenu}>
            <nav className="menu-items">
              <Link to="/" className="hover-this" activeClassName="current" onClick={this.toggleSidenav}>
                <span className="underlined">Home</span>
              </Link>
              <Link to="/about" className="hover-this" activeClassName="current" onClick={this.toggleSidenav}>
                <span className="underlined">About</span>
              </Link>
              <Link to="/projects" className="hover-this" activeClassName="current" onClick={this.toggleSidenav}>
                <span className="underlined">Works</span>
              </Link>
              <Link to="/contacts" className="hover-this" activeClassName="current" onClick={this.toggleSidenav}>
                <span className="underlined">Contact</span>
              </Link>
              <Link to="/contacts" className="button invert my-20">Resume</Link>
            </nav>
          </div>
          <div onClick={this.toggleSidenav} className={'hover-this menu-burger ' + this.toggleMenu} role="button" onKeyDown={this.toggleSidenav} tabIndex="0">
            <span></span>
            <span></span>
          </div>
          <div className={'social-media-logos ' + this.toggleMenu}>
            <div className="inline-block my-12">
              <span className="mr-20">
                <a href="github.com" className="hover-this"><IoLogoGithub size="30px" /></a>
              </span>
              <span className="mr-20">
                <a href="linkedin.com" className="hover-this"><IoLogoLinkedin size="30px" /></a>
              </span>
              <span className="mr-20">
                <a href="linkedin.com" className="hover-this"><IoLogoFacebook size="30px" /> </a>
              </span>
              <span className="mr-20">
                <a href="linkedin.com" className="hover-this"><FaBehance size="30px" /></a>
              </span>
              <span className="mr-20">
                <a href="github.com" className="hover-this"><IoLogoInstagram size="30px" /></a>
              </span>
            </div>
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
