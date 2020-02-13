import React from "react"
import PropTypes from "prop-types"
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io";
import { FaBehance } from "react-icons/fa";

const Footer = () => (
    <footer>
        <div className="social-media-logos">
            <div className="inline-block my-12">
                <span className="mr-20">
                    <a href="github.com" className="hover-this"><IoLogoGithub size="30px" /></a>
                </span>
                <span className="mr-20">
                    <a href="linkedin.com" className="hover-this"><IoLogoLinkedin size="30px" /></a>
                </span>
                <span className="mr-20">
                    <a href="linkedin.com" className="hover-this"><IoLogoFacebook size="30px" /> </a>
                </span>
                <span className="mr-20">
                    <a href="linkedin.com" className="hover-this"><FaBehance size="30px" /></a>
                </span>
                <span className="mr-20">
                    <a href="github.com" className="hover-this"><IoLogoInstagram size="30px" /></a>
                </span>
            </div>
        </div>
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
