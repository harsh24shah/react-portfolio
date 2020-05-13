import React, { Component } from "react"
import SEO from "../components/seo"
import Thumbnail from "../components/thumbnail" // Import the Thumbnail component
import { LiquidSvg } from "../assets/js/helper"
import { FiExternalLink } from "react-icons/fi";

export default class Projects extends Component {
  projects = [
    {
      title: "Wallperex",
      subtitle: "The Image Gallery with High quality Images where you can search and get thousands of image category, share any image on social media, edit any image with filters like instagram and download as well.",
      gitLink: "https://google.co.in",
      behanceLink: "",
      externalLink: "https://google.co.in",
      thumbImage: "dummy-image.png",
      technology: "<ul><li>Unshplash API</li><li>Angular</li><li>HTML</li><li>SCSS</li></ul>",
    },
    {
      title: "News Cards",
      subtitle: "A Daily News applications having updated News of multiple News channels, where you can select News channels and get the news of perticular date of category or search any topic which is recently in trending",
      gitLink: "https://google.co.in",
      behanceLink: "", 
      externalLink: "https://google.co.in",
      thumbImage: "dummy-image.png",
      technology: "<ul><li>News API</li><li>Angular</li><li>HTML</li><li>SCSS</li></ul>",
    },
    {
      title: "Portfolio Design",
      subtitle: "A design mockup created for full page portfolio website idea for a person having technical proffesion background like web developer or a software developer.",
      gitLink: "",
      behanceLink: "https://google.co.in",
      externalLink: "",
      thumbImage: "dummy-image.png", 
      technology: "<ul><li>Photoshop</li></ul>",
    },
    {
      title: "Image Gallery",
      subtitle: "A prototype of mobile application of gallery app having prototypes of image preview, edit, notification, image share.",
      gitLink: "",
      behanceLink: "https://google.co.in",
      externalLink: "",
      thumbImage: "dummy-image.png",
      technology: "<ul><li>Photoshop</li><li>Figma</li></ul>",
    }
  ]

  otherProjects = [
    // {
    //   year: "2020",
    //   title: "Cruise Director UI",
    //   madeAt: "Odysseus Solutions",
    //   link: "https://google.co.in"
    // },
    // {
    //   year: "2019",
    //   title: "Cruisehub UI",
    //   madeAt: "Odysseus Solutions",
    //   link: "https://google.co.in"
    // },
    {
      year: "2018",
      title: "Rolls-Royce Careers",
      madeAt: "Investis Digital",
      link: "https://google.co.in"
    },
    {
      year: "2018",
      title: "ArcelorMittal Staligence",
      madeAt: "Investis Digital",
      link: "https://google.co.in"
    },
    {
      year: "2017",
      title: "Ferratum Investor Relation",
      madeAt: "Investis Digital",
      link: "https://google.co.in"
    }
  ]

  projectRender = this.projects.map(function (project, index) {
    return (
      <Thumbnail
        key={index}
        gitLink={project.gitLink}
        behanceLink={project.behanceLink}
        externalLink={project.externalLink}
        thumbImage={project.thumbImage}
        title={project.title}
        subtitle={project.subtitle}
        technology={project.technology}
      />
    )
  })

  otherProjectsRenderer = this.otherProjects.map(function (item, index) {
    return (
      <tr key={index}>
        <td className="fw-600">{item.year}</td>
        <td className="fw-600">{item.title}</td>
        <td className="text-grey fw-600">{item.madeAt}</td>
        <td><a href={item.link}><FiExternalLink size="24px" className="text-grey" /></a></td>
      </tr>
    )
  })

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    LiquidSvg(1, 'morph1');
    LiquidSvg(0, 'morph2');
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
        <SEO title="Projects" />
        <div className="component-wrap mb-0">
          <div className="content-wrapper scrollable">
            <div className="project-wrap">
              <h1 className="inline-block title">
                Some Things I've Built
              </h1>
              {this.projectRender}
            </div>
          </div>
          <div className="inverse-section">
            <div className="content-wrapper scrollable">
              <div className="w-100">
                <h1 className="inline-block title">
                  Projects I've worked on
              </h1>
                <div className="project-list">
                  <table className="w-100">
                    <thead>
                      <tr>
                        <th className="text-grey fw-600 text-left">Year</th>
                        <th className="text-grey fw-600 text-left">Title</th>
                        <th className="text-grey fw-600 text-left">Made at</th>
                        <th className="text-grey fw-600 text-left">Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.otherProjectsRenderer}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
