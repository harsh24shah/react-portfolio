import React from "react"
import SEO from "../components/seo"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <div>
    <SEO title="404:Not Found" />
    <div className="content-wrapper">
      <div className="box-outer">
        <h1 className="inline-block title mb-0">404</h1>
        <div className="box-wrapper" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">
          <div className="padding-box">
            <p className="intro-para">Opps! This kind of link does not exist in this world. please help yourself and open menu or click on below button to get redirected on Home</p>
            <div><a href="mailto:024hrsh@gmail.com" className="button">{Content.ctaTitle}</a></div>
            <Link to="/" className="button" >Home</Link>
            <div className="separator"></div>
            <div className="inline-block my-12">
              <span className="mr-20"><a href="https://www.linkedin.com/in/24hjs" rel="noopener noreferrer" target="_blank" className="hover-this"><IoLogoLinkedin size="30px" /></a></span>
              <span className="mr-20"><a href="https://www.facebook.com/24hjs" rel="noopener noreferrer" target="_blank" className="hover-this"><IoLogoFacebook size="30px" /></a></span>
              <span className="mr-20"><a href="https://www.instagram.com/24harsh" rel="noopener noreferrer" target="_blank" className="hover-this"><IoLogoInstagram size="30px" /></a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default NotFoundPage
