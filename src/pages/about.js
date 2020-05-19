import React, { Component } from "react"
import SEO from "../components/seo"
import Accordion from "../components/accordian"
import { LiquidSvg } from "../assets/js/helper"
import Image from "../components/image"
import content from "../components/content.json";

const Content = content.about;

export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    setTimeout(() => {
      LiquidSvg(2, 'morph1');
      LiquidSvg(5, 'morph2');
    }, 200)
  }

  render() {
    const panels = Content.panels;

    return (
      <>
        <div>
          <div className="morph-wrap1">
            <svg className="morph1" width="1400" height="770" viewBox="0 0 1400 770">
              <polygon points="" />
            </svg>
          </div>
          <div className="morph-wrap2">
            <svg className="morph2" width="1400" height="770" viewBox="0 0 1400 770">
              <polygon points="" />
            </svg>
          </div>
          <SEO title="About Harsh" description="a software developer with four years of experience who loves building & designing stuff like web application, extentions or websites" />
          <div className="content-wrapper scrollable-mobile">
            <div className="about-wrap">
              <div className="about-content">
                <h1 className="inline-block title" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">{Content.title}</h1>
                <div className="mb-40">
                  <p data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">{Content.mainContent}</p>
                  <p data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">{Content.subContent}</p>
                  <div className="mt-30">
                    <Accordion panels={panels} />
                  </div>
                </div>
              </div>
              <div className="image-wrapper" data-sal="fade" data-sal-delay="400" data-sal-easing="ease">
                <Image
                  filename="profile.jpg"
                  alt="profile image" 
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}