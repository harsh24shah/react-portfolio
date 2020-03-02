import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withController } from 'react-scroll-parallax';

class Image extends Component {
    static propTypes = {
        parallaxController: PropTypes.object.isRequired,
        src: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.props.parallaxController.update();

    };

    render() {
        return (
            <img src={this.props.src} onLoad={this.handleLoad} alt={this.props.alt} className={this.props.class} />
        );
    }
}

export default withController(Image);