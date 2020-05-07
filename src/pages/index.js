import React, { Component } from "react"
import SEO from "../components/seo"
import { LiquidSvg } from "../assets/js/helper";

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    LiquidSvg(1);
  }

  render() {
    return (
      <div>
        <div className="morph-wrap1">
          <svg className="morph1" width="1400" height="770" viewBox="0 0 1400 770">
            <polygon points="700,84.4 1047.1,685.6 352.9,685.6 352.9,685.6 352.9,685.6 352.9,685.6" />
          </svg>
        </div>
        <SEO title="Home" />
        <div className="content-wrapper">
          <div className="home-wrap">
            <span className="highlighted-text" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">Hi, My name is</span>
            <h1 className="mt-20 fs110" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">Harsh Shah<br /><span>I build things for the web</span></h1>
            <div className="w-80 my-50" data-sal="slide-up" data-sal-delay="800" data-sal-easing="ease">
              <p>I'm software engineer based on Vadodara, India specializing in building(and sometimes designing) pixel perfect, high-quality websites and applications.</p>
            </div>
            <a className="button" href="mailto:024hrsh@gmail.com" data-sal="slide-up" data-sal-delay="900" data-sal-easing="ease">Get In Touch</a>
          </div>
        </div>
      </div>
    )
  }
}
