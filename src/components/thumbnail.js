import React, { Component } from "react"
import Image from "./image"
import { FiExternalLink } from "react-icons/fi";
import { FaBehance, FaGithub } from "react-icons/fa";

export default class Thumbnail extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
  }

  render() {
    var thumb = this.props.thumbImage.toString();
    var projectGitLink, projectBehanceLink, projectExternalLink;
    if (this.props.gitLink !== '') {
      projectGitLink = <a className="mr-16" href={this.props.gitLink}><FaGithub size="24px" /></a>;
    }
    if (this.props.behanceLink !== '') {
      projectBehanceLink = <a className="mr-16" href={this.props.behanceLink}><FaBehance size="24px" /></a>;
    }
    if (this.props.externalLink !== '') {
      projectExternalLink = <a className="mr-16" href={this.props.externalLink}><FiExternalLink size="24px" /></a>;
    }
    return (
      <div className="project" data-sal="slide-up" data-sal-delay="700" data-sal-easing="ease" >
        <div className="project-image">
          <Image
            filename={thumb}
            alt={this.props.title}
          />
          <div className="project-title inline-block">
            <span className="block mb-10 project-title-inline fw-100">
              {this.props.title}
              <span className="block fw-600 text-grey" dangerouslySetInnerHTML={{ __html: this.props.technology }}></span>
            </span>
            <div className="project-description mb-30" ><p>{this.props.subtitle}</p></div>
            <div className="flex align-items-center">
              {projectGitLink}
              {projectBehanceLink}
              {projectExternalLink}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
