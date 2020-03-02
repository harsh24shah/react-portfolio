import React, { Component } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"


export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
  }

  render() {
    return (
      <div>
        <SEO title="Home" />
        <div>
          <div className="content-wrapper">
            <div className="home-wrap">
              <span className="highlighted-text" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">Hi! Lorem Ipsum </span>
              <h1 className="mb-20 fs110" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">Lorem Ipsum<br /><span>Lorem ipsum dolor sit amet</span></h1>
              <p data-sal="slide-up" data-sal-delay="700" data-sal-easing="ease">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis rutrum purus.
                  Nullam a ante vitae velit facilisis vulputate. Morbi dui urna, aliquam eget metus eu,
                    ultricies efficitur diam</p>
              <Link className="button" to="mailto:024hrsh@gmail.com" data-sal="slide-up" data-sal-delay="900" data-sal-easing="ease">Get In Touch</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
