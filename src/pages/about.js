import React, { Component } from "react"
import SEO from "../components/seo"
import Accordion from "../components/accordian"
import { LiquidSvg } from "../assets/js/helper"

export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    LiquidSvg(2);
  }

  render() {
    const panels = [
      {
        label: 'Experience',
        content: 'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
      },
      {
        label: 'Technologies',
        content: 'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
      },
      {
        label: 'Hobby',
        content: 'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
      }

    ];
    return (
      <>
        <div>
        <div className="morph-wrap1">
          <svg className="morph1" width="1400" height="770" viewBox="0 0 1400 770">
            <polygon points="700,84.4 1047.1,685.6 352.9,685.6 352.9,685.6 352.9,685.6 352.9,685.6" />
          </svg>
        </div>
          <SEO title="about" />
          <div className="component-wrap" >
            <div className="content-wrapper scrollable-mobile">
              <div className="about-wrap">
                <div className="about-content">
                  <h1 className="inline-block fs50 title">About me</h1>
                  <div className="mb-40">
                    <p data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
                    ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum
                  </p>
                    <div className="mt-30">
                      <Accordion panels={panels} />
                    </div>
                  </div>
                </div>
                <div className="image-wrapper">       
                    <img className="block-reveal" src="https://i.picsum.photos/id/866/800/1000.jpg" />          
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}