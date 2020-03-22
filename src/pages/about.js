import React, { Component } from "react"
import SEO from "../components/seo"
import { Parallax } from 'react-scroll-parallax';

export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <div>
          <SEO title="about" />
          <div className="component-wrap" data-bg-text="About">
            <div className="content-wrapper scrollable">
              <div className="about-wrap">
                <h1 className="inline-block mb-30 fs110" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">About</h1>
                <div className="about-content-main">
                  <div className="heading fw-100 text-grey" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">
                    Hi, I'm Harsh J. Shah basd on Vadodara, India, a software engineer who loves working and building with all things relate to web.
                I build morden web apps with pixel perfect and clean UI.
                </div>
                  <div className="align-items-top flex-equal mt-60" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">
                    <div className="about-column">
                      <h2 className="heading text-grey mb-8"><Parallax y={[0, -20]} ParallaxCache>Work Experience</Parallax></h2>
                      <ul>
                        <li><strong>2018 - Present</strong> <a className="underlined thin" href="https://www.odysseussolutions.com/" target="_blank">Odysseus Solutions</a>, Vadodara</li>
                        <li><strong>2016 - 2018</strong> <a className="underlined thin" href="https://www.investisdigital.com/" target="_blank">Investis Digital</a>, Vadodara</li>
                      </ul> 
                    </div>
                    <div className="about-column">
                      <h2 className="heading text-grey mb-8"><Parallax y={[0, -20]} ParallaxCache>Personal Skill</Parallax></h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis rutrum purus. Nullam a ante vitae velit facilisis vulputate. Morbi dui urna.</p>
                    </div>
                  </div>
                  <div className="align-items-top flex-equal mt-50" data-sal="slide-up" data-sal-delay="700" data-sal-easing="ease">
                    <div className="about-column">
                      <h2 className="heading text-grey mb-8"><Parallax y={[0, -20]} ParallaxCache>Education</Parallax></h2>
                      <ul>
                        <li><strong>2012-2016</strong> Bechlor in Engineering, S.V.I.T., Vasad</li>
                        <li><strong>2012</strong> HSC, Dayaram Highschool, Dabhoi</li>
                        <li><strong>2010</strong> SSC, Dayaram School, Dabhoi</li>
                      </ul>
                    </div>
                    <div className="flex-equal">
                      <div className="about-column">
                        <h2 className="heading text-grey mb-8"><Parallax y={[0, -20]} ParallaxCache>Skills</Parallax></h2>
                        <ul>
                          <li>HTML5 & (S)CSS</li>
                          <li>Javascript (ES6+)</li>
                          <li>Angular</li>
                          <li>React</li>
                          <li>Node js</li>
                        </ul>
                      </div>
                      <div className="about-column">
                        <h2 className="heading text-grey mb-8"><Parallax y={[0, -20]} ParallaxCache>Pasion</Parallax></h2>
                        <ul>
                          <li>Programming</li>
                          <li>Sketching</li>
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