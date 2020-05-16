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

import "./app.scss";

export default class Layout extends Component {

  componentDidMount() {

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
                  <main className='routed'>
                    <Header siteTitle={data.site.siteMetadata.title} />
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

