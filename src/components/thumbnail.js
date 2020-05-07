import React, { Component } from "react"
import Image from "./image" // Import the Thumbnail component

export default class Thumbnail extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    // LiquidSvg();
  }

  render() {
    return (
      <div className="project" data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease">
        <div
          className="project-image"
          data-sal="slide-up"
          data-sal-easing="ease"
        >
          <span className="image-wrap">
            <Image
              className="effect-image"
              src={this.props.thumbImage}
              alt={this.props.title}
            />
          </span>
          <div className="project-title inline-block text-white">
            <span className="block mb-10 project-title-inline">
              {this.props.title}
              <span className="block fw-600 fs16 text-grey">{this.props.technology}</span>
            </span>
            <div className="project-description mb-40"><p>{this.props.subtitle}</p></div>
            <a className="button" href={this.props.link}>
              Discover
            </a>
          </div>

        </div>
      </div>
    )
  }
}
