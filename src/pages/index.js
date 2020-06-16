import React, { Component } from 'react'
import SEO from '../components/seo'
import { LiquidSvg } from '../assets/js/helper'
import content from '../assets/content/content.json'

const Content = content.home;

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    setTimeout(() => {
      LiquidSvg(1, 'morph1');
      LiquidSvg(3, 'morph2');
    }, 200)
  }

  render() {
    return (
      <div>
        <div className='morph-wrap1 anticlock'>
          <svg className='morph1' width='1400' height='770' viewBox='0 0 1400 770'>
            <polygon points='' />
          </svg>
        </div>
        <div className='morph-wrap2'>
          <svg className='morph2' width='1400' height='770' viewBox='0 0 1400 770'>
            <polygon points='' />
          </svg>
        </div>
        <SEO title='Harsh Shah' keyword='Harsh Shah, Harsh, Shah, UX, UI developer, Web development, Web designer, UI development' />
        <div className='content-wrapper'>
          <div className='home-wrap'>
            <span className='highlighted-text' data-sal='slide-up' data-sal-delay='500' data-sal-easing='ease'>{Content.prevText}</span>
            <h1 className='mt-20 fs110' data-sal='slide-up' data-sal-delay='700' data-sal-easing='ease'>{Content.mainText}<br /><span>{Content.subText}</span></h1>
            <div className='intro-para' data-sal='slide-up' data-sal-delay='800' data-sal-easing='ease'>
              <p>{Content.introText}</p>
            </div>
            <a className='button' href='mailto:024hrsh@gmail.com' data-sal='slide-up' data-sal-delay='1000' data-sal-easing='ease'>
              <span>{Content.ctaText}</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
