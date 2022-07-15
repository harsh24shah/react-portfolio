import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import LogoImage from './logoimage'
import { LiquidSvg } from '../assets/js/helper'
import { IoLogoCodepen, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'


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
    const element = document.getElementById(param);

    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      prevScrollpos > currentScrollPos ? element.classList.remove('hide') : element.classList.add('hide');
      prevScrollpos = currentScrollPos;
    }
  }

  componentDidMount() {
    this.headerHide('header-inner');
  }

  render() {
    return (
      <>
        <header data-sal='fade' data-sal-delay='200' data-sal-easing='ease'>
          <div className={'navigation ' + this.toggleMenu}>
            <nav className='menu-items'>
              <Link to='/' className='hover-this' activeClassName='current' onClick={this.toggleSidenav}>
                <span className='underlined'>Home</span>
              </Link>
              <Link to='/about' className='hover-this' activeClassName='current' onClick={this.toggleSidenav}>
                <span className='underlined'>About</span>
              </Link>
              <Link to='/projects' className='hover-this' activeClassName='current' onClick={this.toggleSidenav}>
                <span className='underlined'>Works</span>
              </Link>
              <Link to='/contact' className='hover-this' activeClassName='current' onClick={this.toggleSidenav}>
                <span className='underlined'>Contact</span>
              </Link>
              <a title='Opens in a new tab' href='https://drive.google.com/file/d/1z_PxurGL4re0Dk5QT07Kshj5P2F1ZYVH/view?format=pdf' rel='noopener noreferrer' target='_blank' className='button invert my-20'>
                <span>Resume</span>
              </a>
            </nav>
            <div className='morph-wrap3'>
              <svg className='morph3' width='1400' height='770' viewBox='0 0 1400 770'>
                <polygon points='' />
              </svg>
            </div>
          </div>
          <div className='header-inner' id='header-inner'>
            <div className='logo'>
              <Link to='/' className='hover-this logo-link'>
                <LogoImage />
              </Link>
            </div>

            <a title='Menu' onClick={this.toggleSidenav} className={'hover-this menu-burger ' + this.toggleMenu} role='button' onKeyDown={this.toggleSidenav} tabIndex='0'>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className={'overlay ' + this.toggleMenu} onClick={this.toggleSidenav}></div>
          <div className={'social-media-logos ' + this.toggleMenu}>
            <div className='inline-block my-12'>
              <span className='mr-20'>
                <a title='GitHub - opens in a new tab' href='https://github.com/harsh24shah' rel='noopener noreferrer' target='_blank' className='hover-this'><IoLogoGithub size='30px' /></a>
              </span>
              <span className='mr-20'>
                <a title='Codepen - opens in a new tab' href='https://codepen.io/24harshjshah' rel='noopener noreferrer' target='_blank' className='hover-this'><IoLogoCodepen size='30px' /></a>
              </span>
              <span className='mr-20'>
                <a title='Linkedin - opens in a new tab' href='https://www.linkedin.com/in/24harshjshah' rel='noopener noreferrer' target='_blank' className='hover-this'><IoLogoLinkedin size='30px' /></a>
              </span>
              <span className='mr-20'>
                <a title='Instagram - opens in a new tab' href='https://www.instagram.com/harshjshahh' rel='noopener noreferrer' target='_blank' className='hover-this'><AiFillInstagram size='30px' /></a>
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
