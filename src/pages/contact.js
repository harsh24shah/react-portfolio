import React, { Component } from "react"
import SEO from "../components/seo"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
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
            <h1 className="fs50 inline-block title">Get in Touch</h1>
            <div className="box-wrapper" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">
              <div className="padding-box">
                <p className="text-white w-80">Though I'm not looking for any opportunities, My inbox is always open for you and I would like to work or talk everything about web with you. <a href="mailto:test@test.com" className="underlined">Say hi!</a></p>
                <div className="heading"><a href="mailto:024hrsh@gmail.com" className="button">Say Hi</a></div>
                <div className="separator white-separator"></div>
                <div className="inline-block my-12">
                  <span className="mr-20"><a href="github.com" className="hover-this"><IoLogoGithub size="30px" /></a></span>
                  <span className="mr-20"><a href="linkedin.com" className="hover-this"><IoLogoLinkedin size="30px" /></a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}