import React, { Component } from "react"
import { Link } from "gatsby"


import SEO from "../components/seo"

export default class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <SEO title="Home" />
        <div>
          <div className="content-wrapper">
            <div className="home-wrap">
              <span className="highlighted-text">Hi! Lorem Ipsum </span>
              <h1 className="mb-20">Lorem Ipsum<br /><span>Lorem ipsum dolor sit amet</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis rutrum purus.
                  Nullam a ante vitae velit facilisis vulputate. Morbi dui urna, aliquam eget metus eu,
                    ultricies efficitur diam</p>
              <Link className="button" to="mailto:024hrsh@gmail.com">Get In Touch</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
