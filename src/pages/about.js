import React, { Component } from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Accordion from '../components/accordian';
import { LiquidSvg } from '../assets/js/helper';
import Image from '../components/image';
import content from '../assets/content/content.json';
import { SRLWrapper } from 'simple-react-lightbox'

const Content = content.about;
const panels = Content.panels;
const gallery = Content.sketchGallery;
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

export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  galleryImage = gallery.map(function (image, index) {
    let imageurl = image.src.toString();
    let imgAlt = image.alt;
    return (
      <div key={index} data-image-id={imageurl} className="gallery-img w-100"><Image filename={imageurl} alt={imgAlt} /></div>
    )
  })

  componentDidMount() {
    setTimeout(() => {
      LiquidSvg(2, 'morph1');
      LiquidSvg(5, 'morph2');
    }, 200)
  }

  render() {
    return (
      <Layout>
        <div className='morph-wrap1'>
          <svg className='morph1' width='1400' height='770' viewBox='0 0 1400 770'>
            <polygon points='' />
          </svg>
        </div>
        <div className='morph-wrap2 anticlock'>
          <svg className='morph2' width='1400' height='770' viewBox='0 0 1400 770'>
            <polygon points='' />
          </svg>
        </div>
        <SEO title='About Harsh' description='A software developer with four years of experience who loves building & designing stuff like web application, extentions or websites' />
        <div className="component-wrap">
          <div className='content-wrapper scrollable'>
            <div className='about-wrap'>
              <div className='about-content'>
                <h1 className='inline-block title'>{Content.title}</h1>
                <div className='mb-40'>
                  <p dangerouslySetInnerHTML={{ __html: Content.mainContent }}></p>
                  <p dangerouslySetInnerHTML={{ __html: Content.subContent }}></p>
                  <div className='mt-30'>
                    <Accordion panels={panels} />
                  </div>
                </div>
              </div>
              <div className='image-wrapper' data-sal='fade' data-sal-delay='400' data-sal-easing='ease'>
                <Image
                  filename='harsh-profile-image.jpg'
                  alt='profile image'
                />
              </div>
            </div>
            <div className="w-100 about-gallery-outer">
              <h1 className='inline-block title'>{Content.galleryTitle}</h1>
              <div className='about-gallery-wrap'>
                <SRLWrapper options={options}>
                  {this.galleryImage}
                </SRLWrapper>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}