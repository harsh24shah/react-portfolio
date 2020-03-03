import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
      <div className="content-wrapper">
        <div className="home-wrap">
          <h1 className="mb-20 fs110" data-sal="slide-up" data-sal-delay="700" data-sal-easing="ease">404 <span>Not Found</span></h1>
          <p data-sal="slide-up" data-sal-delay="700" data-sal-easing="ease">You just hit a route that doesn't exist... the sadness.</p>
        </div>
      </div>
  </div>
)

export default NotFoundPage
