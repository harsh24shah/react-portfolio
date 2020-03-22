import React from "react"
import PropTypes from "prop-types"

const Footer = () => (
    <footer data-sal="fade" data-sal-delay="1000" data-sal-easing="ease">
        <div className="mail-fixed">
            <a className="highlighted-text" href="mailto:024hrsh@gmail.com">024hrsh@gmail.com</a>
        </div>
    </footer>
)

export default Footer

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ``,
}
