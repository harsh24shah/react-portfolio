import React, { Component } from "react"
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
// import testSvg from '../images/harsh-logo.svg';
// import Img from "gatsby-image"
import PropTypes from "prop-types"

import { LiquidSvg } from "../assets/js/helper";
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";


export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navVisible: true
    };
  }

  toggleSidenav = () => {
    if (this.state.navVisible) {
      LiquidSvg(Math.floor(Math.random() * 12), 'morph3');
    }
    this.setState({ navVisible: !this.state.navVisible });
    this.toggleMenu = this.state.navVisible ? 'active' : '';
  }

  headerHide = (param) => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById(param).classList.remove('hide');
      } else {
        document.getElementById(param).classList.add('hide');
      }
      prevScrollpos = currentScrollPos;
    }
  }

  componentDidMount() {
    this.headerHide('header-inner');
  }

  render() {
   // const { isDark, setIsDark } = this.props;
    return (
      <> 
        <StaticQuery
          query={graphql`
          query {
            file(relativePath: { eq: "harsh-logo.svg" }) {
              childImageSharp {
                fixed(width: 80, height: 80) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }  
        `}
          render={data => (

            <header data-sal="fade" data-sal-delay="200" data-sal-easing="ease">         
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
                  <Link to="/contact" className="hover-this" activeClassName="current" onClick={this.toggleSidenav}>
                    <span className="underlined">Contact</span>
                  </Link>
                  <a href="https://drive.google.com/file/d/17Bnsc5N94yIAEUlUUrabf4OQZtD47bE2/view?usp=sharing" rel="noopener noreferrer" target="_blank" className="button invert my-20">
                    <span>Resume</span>           
                  </a>
                </nav>
                <div className="morph-wrap3">
                  <svg className="morph3" width="1400" height="770" viewBox="0 0 1400 770">
                    <polygon points="" />
                  </svg>
                </div>
              </div>
              <div className="header-inner" id="header-inner">
                <div className="logo">
                  <Link to="/" className="hover-this">
                    {/* <Img fixed={data.file.childImageSharp.fixed} alt="Harsh logo" /> */}
                    {/* <img src={testSvg} alt="test"/> */}
                    <div className="logo-custom">Harsh</div>
                  </Link>
                </div>

                <a onClick={this.toggleSidenav} className={'hover-this menu-burger ' + this.toggleMenu} role="button" onKeyDown={this.toggleSidenav} tabIndex="0">
                  <span></span>
                  <span></span>
                </a>
              </div>
              <div className={'overlay ' + this.toggleMenu} onClick={this.toggleSidenav}></div>
              <div className={'social-media-logos ' + this.toggleMenu}>
                <div className="inline-block my-12">
                  <span className="mr-20">
                    <a href="https://github.com/harsh24shah" rel="noopener noreferrer" target="_blank" className="hover-this"><IoLogoGithub size="30px" /></a>
                  </span>
                  <span className="mr-20">
                    <a href="https://www.linkedin.com/in/24hjs" rel="noopener noreferrer" target="_blank" className="hover-this"><IoLogoLinkedin size="30px" /></a>
                  </span>
                  <span className="mr-20">
                    <a href="https://www.facebook.com/24hjs" rel="noopener noreferrer" target="_blank" className="hover-this"><IoLogoFacebook size="30px" /> </a>
                  </span>
                  <span className="mr-20">
                    <a href="https://www.instagram.com/24harsh" rel="noopener noreferrer" target="_blank" className="hover-this"><AiFillInstagram size="30px" /></a>
                  </span>
                </div>
              </div>
             
            </header>
          )}
        />        
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
