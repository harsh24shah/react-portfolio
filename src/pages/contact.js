import React, { Component } from "react"
import SEO from "../components/seo"
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import { LiquidSvg } from "../assets/js/helper"

export default class Contact extends Component {

  componentDidMount() {
    LiquidSvg(3, 'morph1');
    LiquidSvg(4, 'morph2');
  }

  render() {
    return (
      <div>
        <div className="morph-wrap1">
          <svg className="morph1" width="1400" height="770" viewBox="0 0 1400 770">
            <polygon points="700,84.4 1047.1,685.6 352.9,685.6 352.9,685.6 352.9,685.6 352.9,685.6" />
          </svg>
        </div>
        <div className="morph-wrap2">
          <svg className="morph2" width="1400" height="770" viewBox="0 0 1400 770">
            <polygon points="" />
          </svg>
        </div>
        <SEO title="Contact" />
        <div className="content-wrapper">
          <div className="box-outer">
            <h1 className="inline-block title mb-0">Get in Touch</h1>
            <div className="box-wrapper" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">
              <div className="padding-box">
                <p className="intro-para">Though I'm not looking for any opportunities, My inbox is always open for you and I would like to answer in case you have any questions or you can just say hi, I will try to get back to you.</p>
                <div><a href="mailto:024hrsh@gmail.com" className="button">Say Hi</a></div>
                <div className="separator"></div>
                <div className="inline-block my-12">
                  <span className="mr-20"><a href="https://github.com/harsh24shah" rel="noopener noreferrer" target="_blank" className="hover-this"><IoLogoGithub size="30px" /></a></span>
                  <span className="mr-20"><a href="https://www.linkedin.com/in/24hjs" rel="noopener noreferrer" target="_blank" className="hover-this"><IoLogoLinkedin size="30px" /></a></span>
                  <span className="mr-20"><a href="https://www.facebook.com/24hjs" rel="noopener noreferrer" target="_blank" className="hover-this"><IoLogoFacebook size="30px" /></a></span>
                  <span className="mr-20"><a href="https://www.instagram.com/24harsh" rel="noopener noreferrer" target="_blank" className="hover-this"><IoLogoInstagram size="30px" /></a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 