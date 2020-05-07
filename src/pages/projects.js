import React, { Component } from "react"
import SEO from "../components/seo"
import Thumbnail from "../components/thumbnail" // Import the Thumbnail component
import { LiquidSvg } from "../assets/js/helper"

export default class Projects extends Component {
  projects = [
    {
      title: "project1",
      subtitle: "subtitle goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "https://google.co.in",
      thumbImage: "https://i.picsum.photos/id/866/700/400.jpg",
      technology: "Angular, HTML, SCSS",
    },
    {
      title: "project-title2",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "https://google.co.in",
      thumbImage: "https://i.picsum.photos/id/866/600/400.jpg",
      technology: "JQuery, HTML5, CSS3",
    },
    {
      title: "project3",
      subtitle: "subtitle goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "https://google.co.in",
      thumbImage: "https://i.picsum.photos/id/866/650/500.jpg",
      technology: "Photoshop",
    },
    {
      title: "project-long-title",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      link: "https://google.co.in",
      thumbImage: "https://i.picsum.photos/id/866/600/400.jpg",
      technology: "Angular, Javascript, SCSS",
    },
    {
      title: "project5",
      subtitle: "subtitle goes here",
      link: "https://google.co.in",
      thumbImage: "https://i.picsum.photos/id/866/700/200.jpg",
      technology: "JQuery, HTML5, CSS3",
    },
  ]

  projectRender = this.projects.map(function (project, index) {
    return (
      <Thumbnail
        key={index}
        link={project.link}
        thumbImage={project.thumbImage}
        title={project.title}
        subtitle={project.subtitle}
        technology={project.technology}
      />
    )
  })

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    LiquidSvg(1,'morph1');
    LiquidSvg(0,'morph2');
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
        <SEO title="projects" />
        <div className="component-wrap" >
          <div className="content-wrapper scrollable">
            <div className="project-wrap">
              <h1 className="inline-block fs50 title">
                Projects
              </h1>
              {this.projectRender}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
