import React, { Component } from "react"
import SEO from "../components/seo"
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { LiquidSvg } from "../assets/js/helper"
import content from "../components/content.json";

const Content = content.contact;

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
            <h1 className="inline-block title mb-0" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">{Content.title}</h1>
            <div className="box-wrapper">
              <div className="padding-box">
                <p className="intro-para" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">{Content.mainContent}</p>
                <p className="intro-para" data-sal="slide-up" data-sal-delay="600" data-sal-easing="ease">{Content.address}</p>
                <div><a href="mailto:024hrsh@gmail.com" className="button" data-sal="slide-up" data-sal-delay="600" data-sal-easing="ease">{Content.ctaTitle}</a></div>
                <div className="separator" data-sal="slide-up" data-sal-delay="800" data-sal-easing="ease"></div>
                <div className="inline-block my-12 contacts-logo" data-sal="slide-up" data-sal-delay="900" data-sal-easing="ease">
                  <span className="mr-20"><a href="https://www.linkedin.com/in/24hjs" rel="noopener noreferrer" target="_blank" className="hover-this"><IoLogoLinkedin size="30px" /></a></span>
                  <span className="mr-20"><a href="https://www.facebook.com/24hjs" rel="noopener noreferrer" target="_blank" className="hover-this"><IoLogoFacebook size="30px" /></a></span>
                  <span className="mr-20"><a href="https://www.instagram.com/24harsh" rel="noopener noreferrer" target="_blank" className="hover-this"><AiFillInstagram size="30px" /></a></span>
                </div>
                <div className="mt-50"  data-sal="slide-up" data-sal-delay="1000" data-sal-easing="ease"><small>{Content.copyRightText}</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 