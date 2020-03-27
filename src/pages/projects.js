import React, { Component } from "react"
import SEO from "../components/seo"
import Thumbnail from "../components/thumbnail" // Import the Thumbnail component

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

  componentDidMount() { }

  render() {
    return (
      <div>
        <SEO title="projects" />
        <div className="component-wrap" data-bg-text="Projects">
          <div className="content-wrapper scrollable">
            <div className="project-wrap">
              <h1 className="inline-block mb-100 fs110" data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
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
