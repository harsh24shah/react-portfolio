import React, { Component } from "react"
import Image from "./image" // Import the Thumbnail component

export default class Thumbnail extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="project">
        <div className="project-image">
          <span className="image-wrap" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
            <Image
              className="effect-image"
              src={this.props.thumbImage}
              alt={this.props.title}
            />
          </span>
          <div className="project-title inline-block text-white" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
            <span className="block mb-10 project-title-inline fw-100">
              {this.props.title}
              <span className="block fw-600 text-grey" dangerouslySetInnerHTML={{ __html: this.props.technology }}></span>
            </span>
            <div className="project-description mb-40" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease"><p>{this.props.subtitle}</p></div>
            <a className="button" href={this.props.link} data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
              <span>Discover</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
