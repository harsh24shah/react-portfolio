import React, { Component } from "react"
import SEO from "../components/seo"
import Accordion from "../components/accordian"
import { LiquidSvg } from "../assets/js/helper"

export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    LiquidSvg(2, 'morph1');
    LiquidSvg(5, 'morph2');
  }

  render() {
    const panels = [
      {
        label: "Few technologies or tools I've been working with",
        content: '<div class="flex-auto"><ul><li>Javascript</li><li>HTML & S(CSS)</li><li>Angular</li><li>Gulp</li></ul><ul><li>Figma</li><li>Photoshop</li><li>Git & Github</li></ul></div>',
      },
      {
        label: "Where I've worked",
        content: "<p>I'm currently working as a Front-end Designer in <a href=''>Odysseus Solutions</a> from Dec, 2018. earlier, I was working as a Web Producer with <a href=''>Investis Digital</a> at India location for two and half years where I have started my career in 2016.</p>",
      },
      {
        label: "Things I do when I'm not coding",
        content: '<p>I like traveling, clicking random things and making sketches. Heavy metal and Acoustic rock are my tastes of music.</p>',
      }

    ];
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
          <SEO title="About" />
          <div className="content-wrapper scrollable-mobile">
            <div className="about-wrap">
              <div className="about-content">
                <h1 className="inline-block fs50 title">About me</h1>
                <div className="mb-40">
                  <p>I'm Harsh Shah from Vadodara, India; a software developer with four years of experience who loves Building & Designing stuff that live on internet,
                  whether that will be web application, plugin, websites or in between. I enjoy solving complex problems with simple way.
                  </p>
                  <p>
                    I've completed Bachelors of Engineering in Information Technology from <a href="">SVIT (Sardar Vallabbhai patel Insitute of Technologies)</a> located in Gujarat, India.
                  </p>
                  <div className="mt-30">
                    <Accordion panels={panels} />
                  </div>
                </div>
              </div>
              <div className="image-wrapper">
                <img className="block-reveal" src="https://i.picsum.photos/id/866/800/1000.jpg" />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}