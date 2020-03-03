/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import { ParallaxProvider } from 'react-scroll-parallax';
import { creatCursor } from '../assets/js/helper';

import "./app.scss";


const Layout = ({ children }) => {

  useEffect(() => {
    creatCursor();
  });

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        } 
      }
    }
  `)

  return (
    <>
      <ParallaxProvider>
        <React.Fragment>
          <div className="main">
            <main className='routed'>
              <Header siteTitle={data.site.siteMetadata.title} />
              <div className="cursor"></div>
              <div className="main-content">{children}</div>
              <Footer />
            </main>
          </div>
        </React.Fragment>
      </ParallaxProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

