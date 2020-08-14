import React, { Component } from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Thumbnail from '../components/thumbnail';
import { LiquidSvg } from '../assets/js/helper';
import { FiExternalLink } from 'react-icons/fi';
import content from '../assets/content/content.json';
import { SRLWrapper } from 'simple-react-lightbox'

const Content = content.works;
const projects = Content.projects;
const otherProjects = Content.pastProjects;

const options = {
  caption: {
    captionFontSize: '22px',
    captionColor: '#ffffff',
    captionFontWeight: 300,
    showCaption: true
  },
  settings: {
    overlayColor: 'rgba(0, 0, 0, 0.8)',
  },
  progressBar: {
    height: '3px',
    fillColor: '#f87f64',
    backgroundColor: 'rgba(43, 45, 66, 0.95)'
  }
}

export default class Projects extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    setTimeout(() => {
      LiquidSvg(1, 'morph1');
      LiquidSvg(0, 'morph2');
    }, 200)
  }

  projectRender = projects.map(function (project, index) {
    return (
      <Thumbnail
        key={index}
        gitLink={project.gitLink}
        behanceLink={project.behanceLink}
        externalLink={project.externalLink}
        thumbImages={project.thumbImages}
        title={project.title}
        subtitle={project.subtitle}
        technology={project.technology}
      />
    )
  })

  otherProjectsRenderer = otherProjects.map(function (item, index) {
    return (
      <tr key={index}>
        <td className='fw-600'>{item.year}</td>
        <td className='fw-600'>{item.title}</td>
        <td className='text-grey fw-600'>{item.madeAt}</td>
        <td className='text-grey fw-600 hide-in-mobile'>{item.role}</td>
        <td><a title='Opens in a new tab' target='_blank' href={item.link}><FiExternalLink size='24px' className='text-grey' /></a></td>
      </tr>
    )
  })

  render() {
    return (
      <Layout>
        <div className='morph-wrap1 anticlock'>
          <svg className='morph1' width='1400' height='770' viewBox='0 0 1400 770'>
            <polygon points='700,84.4 1047.1,685.6 352.9,685.6 352.9,685.6 352.9,685.6 352.9,685.6' />
          </svg>
        </div>
        <div className='morph-wrap2'>
          <svg className='morph2' width='1400' height='770' viewBox='0 0 1400 770'>
            <polygon points='' />
          </svg>
        </div>
        <SEO title="Harsh's Projects" />
        <div className='component-wrap mb-0'>
          <div className='content-wrapper scrollable'>
            <SRLWrapper options={options}>
              <div className='project-wrap'>
                <h1 className='inline-block title' data-sal='slide-up' data-sal-delay='300' data-sal-easing='ease'>{Content.title}</h1>
                {this.projectRender}
              </div>
            </SRLWrapper>
          </div>
          <div className='inverse-section'>
            <div className='content-wrapper scrollable'>
              <div className='w-100'>
                <h1 className='inline-block title'>{Content.pastProjectsTitle}</h1>
                <div className='project-list'>
                  <table className='w-100'>
                    <thead>
                      <tr>
                        <th className='text-grey fw-600'>Year</th>
                        <th className='text-grey fw-600'>Title</th>
                        <th className='text-grey fw-600'>Made at</th>
                        <th className='text-grey fw-600 hide-in-mobile'>Role</th>
                        <th className='text-grey fw-600'>Link</th>
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
      </Layout>
    )
  }
}
