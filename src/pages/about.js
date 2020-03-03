import React, { Component } from "react"
import SEO from "../components/seo"

import { Parallax } from 'react-scroll-parallax';

export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <div>
          <SEO title="about" />
          <div className="component-wrap" data-bg-text="About">
            <div className="content-wrapper scrollable">
              <div className="about-wrap">
                <h1 className="inline-block mb-30 outlined fs150" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">About</h1>
                <div className="about-content-main">
                  <div className="heading" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">
                    <Parallax y={[-20, 20]} ParallaxCache>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis rutrum purus.
                Nullam a ante vitae velit facilisis vulputate. Morbi dui urna. <a href="google.com">Fusce vitae</a> risus quis tortor scelerisque blandit at ut libero
                    </Parallax>
                  </div>
                  <div className="align-items-top flex-equal mt-50" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
                    <div className="about-column">
                      <h2 className="heading outlined-grey fw-900"><Parallax x={[15, -20]} ParallaxCache>Work Experience</Parallax></h2>
                      <ul className="mt-n20 z-index1">
                        <li><strong>2018</strong> Odysseus Solutions,Vadodara</li>
                        <li><strong>2016-2018</strong> Investis Digital, Vadodara</li>
                      </ul>
                    </div>
                    <div className="about-column">
                      <h2 className="heading outlined-grey fw-900"><Parallax x={[16, -20]} ParallaxCache>Personal Skill</Parallax></h2>
                      <p className="mt-n20 z-index1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis rutrum purus. Nullam a ante vitae velit facilisis vulputate. Morbi dui urna.</p>
                    </div>
                  </div>
                  <div className="align-items-top flex-equal mt-50" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
                    <div className="about-column">
                      <h2 className="heading outlined-grey fw-900"><Parallax x={[8, -20]} ParallaxCache>Education</Parallax></h2>
                      <ul className="mt-n20 z-index1" >
                        <li><strong>2012-2016</strong> Lorem ipsum dolor sit amet</li>
                        <li><strong>2012</strong> Lorem ipsum dolor sit amet</li>
                        <li><strong>2010</strong> Lorem ipsum dolor sit amet</li>
                      </ul>
                    </div>
                    <div className="flex-equal">
                      <div className="about-column">
                        <h2 className="heading outlined-grey fw-900"><Parallax x={[8, -20]} ParallaxCache>Skills</Parallax></h2>
                        <ul className="mt-n20 z-index1">
                          <li>Loremipsum</li>
                          <li>dolor</li>
                          <li>dolor</li>
                          <li>sit amet</li>
                          <li>sit amet</li>
                        </ul>
                      </div>
                      <div className="about-column">
                        <h2 className="heading outlined-grey fw-900"><Parallax x={[8, -20]} ParallaxCache>Pasion</Parallax></h2>
                        <ul className="mt-n20 z-index1">
                          <li>Loremipsum</li>
                          <li>dolor</li>
                          <li>dolor</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-seciton" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
              <div>

              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}