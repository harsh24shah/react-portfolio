/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from "./header";
import Footer from "./footer";
import { creatCursor } from '../assets/js/helper';
import "./app.scss";

export default class Layout extends Component {

  componentDidMount() {
    creatCursor();
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <StaticQuery
          query={graphql`
                  query SiteTitleQuery {
                    site {
                      siteMetadata {
                        title
                      } 
                    }
                  }
                    `}
          render={data => (
            <ParallaxProvider>
              <React.Fragment>
                <div className="main">
                {/* <div className="morph-wrap">
                    <svg className="morph" width="1400" height="770" viewBox="0 0 1400 770">
                      <path d="M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z"/>
                    </svg>
                </div> */}
                  <main className='routed'>
                    <Header siteTitle={data.site.siteMetadata.title} />
                    <div className="cursor"></div>
                    <div className="main-content">{children}</div>
                    <Footer />
                  </main>
                </div>
              </React.Fragment>
            </ParallaxProvider>
          )}
        />
      </>
    )
  }
}

