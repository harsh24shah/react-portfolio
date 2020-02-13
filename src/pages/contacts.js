import React, { Component } from "react"


import SEO from "../components/seo"

import { Parallax } from 'react-scroll-parallax';

export default class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <SEO title="contact" />
        <div>
          <div className="content-wrapper scrollable">
            <div className="box-outer">
              <h1>Say hi.</h1>
              <Parallax className="custom-class" y={[-10, 10]} tagOuter="figure" ParallaxCache>
                <div className="box-wrapper">
                  <div className="bg-acent padding-box">
                    <div className="heading"><a href="mailto:024hrsh@gmail.com" className="underlined hover-this">024hrsh@gmail.com</a></div>
                    <div className="separator white-separator"></div>
                    <p className="text-white">I love implement UI design and make things. I work at Odysseus Solutions as UI developer. <a href="mailto:test@test.com" className="underlined">Say hi!</a></p>
                    <div className="inline-block my-12">
                      <span className="mr-20"><a href="github.com" className="hover-this"><em className="icon fs30 icon-github"></em></a></span>
                      <span className="mr-20"><a href="linkedin.com" className="hover-this"><em className="icon fs30 icon-linkedin"></em></a></span>
                    </div>
                  </div>
                  <div className="bg-img image-box responsive-image"><img alt="" className="w-100" src="https://picsum.photos/600/800" /></div>
                </div>
              </Parallax>
            </div>

            <div className="box-outer mt-100">
              <h1>@</h1>
              <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure" ParallaxCache>
                <div className="box-wrapper">
                  <div className="bg-acent-opac padding-box">
                    <div className="heading text-white">Also connect at..</div>
                    <div className="separator white-separator"></div>
                    <p className="text-white">B-23, Payas park Society, <br />Waghodiya road, <br /> Vadodara, India<br />tel: <a href="tel:+919725222588" className="underlined hover-this">+91 9725222588</a></p>
                  </div>
                  <div className="bg-img image-box responsive-image"><img alt="" className="w-100" src="https://picsum.photos/600/800" /></div>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    )
  }
}