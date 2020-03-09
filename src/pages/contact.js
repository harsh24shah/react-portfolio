import React, { Component } from "react"
import SEO from "../components/seo"
import { Parallax } from 'react-scroll-parallax';
import Image from '../components/image';

import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";


export default class Contact extends Component {

  render() {
    return (
      <div>
        <SEO title="contact" />
        <div className="component-wrap" data-bg-text="Contacts">
          <div className="content-wrapper scrollable">
            <div className="box-outer">
              <h1 className="fs110" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">Say hi.</h1>
              <Parallax y={[-10, 10]} tagOuter="div" ParallaxCache>
                <div className="box-wrapper" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">
                  <div className="bg-acent padding-box">
                    <div className="heading"><a href="mailto:024hrsh@gmail.com" className="underlined hover-this">024hrsh@gmail.com</a></div>
                    <div className="separator white-separator"></div>
                    <p className="text-white">I love implement UI design and make things. I work at Odysseus Solutions as UI developer. <a href="mailto:test@test.com" className="underlined">Say hi!</a></p>
                    <div className="inline-block my-12">
                      <span className="mr-20"><a href="github.com" className="hover-this"><IoLogoGithub size="30px" /></a></span>
                      <span className="mr-20"><a href="linkedin.com" className="hover-this"><IoLogoLinkedin size="30px" /></a></span>
                    </div>
                  </div>
                  <div className="bg-img image-box responsive-image">
                    <Image src="https://i.picsum.photos/id/1048/700/400.jpg" alt="" class="w-100" />
                  </div>
                </div>
              </Parallax>
            </div>
            <div className="box-outer mt-100" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">
              <h1 className="fs110">@</h1>
              <Parallax y={[-10, 10]} tagOuter="div" ParallaxCache>
                <div className="box-wrapper">
                  <div className="bg-acent-opac padding-box">
                    <div className="heading text-white">Also connect at..</div>
                    <div className="separator white-separator"></div>
                    <p className="text-white">B-23, Payas park Society, <br />Waghodiya road, <br /> Vadodara, India<br />tel: <a href="tel:+919725222588" className="underlined hover-this">+91 9725222588</a></p>
                  </div>
                  <div className="bg-img image-box responsive-image">
                    <Image src="https://i.picsum.photos/id/1048/700/400.jpg" alt="" class="w-100" />
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    )
  }
}