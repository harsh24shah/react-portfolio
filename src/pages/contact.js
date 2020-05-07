import React, { Component } from "react"
import SEO from "../components/seo"
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { LiquidSvg } from "../assets/js/helper"

export default class Contact extends Component {

  componentDidMount() {
    LiquidSvg(4);
  }
  
  render() {
    return (
      <div>
        <div className="morph-wrap1">
          <svg className="morph1" width="1400" height="770" viewBox="0 0 1400 770">
            <polygon points="700,84.4 1047.1,685.6 352.9,685.6 352.9,685.6 352.9,685.6 352.9,685.6" />
          </svg>
        </div>
        <SEO title="contact" />
        <div className="component-wrap" data-bg-text="Contacts">
          <div className="content-wrapper">
            <div className="box-outer">
              <h1 className="fs50 inline-block title">Say hi.</h1>
              <div className="box-wrapper" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">
                <div className="padding-box">
                  <p className="text-white">I love implement UI design and make things. I work at Odysseus Solutions as UI developer. <a href="mailto:test@test.com" className="underlined">Say hi!</a></p>
                  <div className="heading"><a href="mailto:024hrsh@gmail.com" className="underlined hover-this">024hrsh@gmail.com</a></div>
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
      </div>
    )
  }
}