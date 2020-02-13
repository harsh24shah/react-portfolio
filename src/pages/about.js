import React, { Component } from "react"


import SEO from "../components/seo"

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
        <div>
          <div className="content-wrapper">
            <div className="about-wrap">
              <h1 className="lined inline-block mb-30">About</h1>
              <div className="flex flex-row-reverse about-columns">
                <div>
                  <img src="https://picsum.photos/400/400" alt="" />
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis rutrum purus.
                Nullam a ante vitae velit facilisis vulputate. Morbi dui urna. <a href="google.com">Fusce vitae</a> risus quis tortor scelerisque blandit at ut libero</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis <a href="google.com">rutrum</a> purus. Nullam a ante vitae velit facilisis vulputate.
                    Morbi dui urna, aliquam eget metus eu, ultricies efficitur diam</p>
                  <ul className="bullets">
                    <li>Lorem ipsum</li>
                    <li>varius non</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>ipsum</li>
                    <li>Lorem ok</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}