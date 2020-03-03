import React, { Component } from "react";
import { Parallax } from 'react-scroll-parallax';
import Image from './image'; // Import the Thumbnail component

export default class Thumbnail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="project">
                <div className="project-image" data-sal="slide-up" data-sal-easing="ease">
                    <a href={this.props.link} className="hover-this project-url">
                        <Parallax y={[-10, 10]} tagOuter="figure" ParallaxCache>
                            <Image id="effect-image" src={this.props.thumbImage} alt={this.props.title} />
                        </Parallax>
                        <div className="project-title inline-block text-white">
                            <Parallax x={[-10, 10]} ParallaxCache>
                                <span className="block mb-10 project-title-inline">{this.props.title}</span>
                                <span className="block">{this.props.subtitle}</span>
                                <span className="block">{this.props.technology}</span>
                            </Parallax>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
