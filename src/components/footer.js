import React from "react"
import PropTypes from "prop-types"

const Footer = () => (
    <footer>
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
