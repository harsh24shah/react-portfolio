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
                <div className="project-image">
                    <a href={this.props.link} className="hover-this">
                        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure" ParallaxCache>
                            <Image src={this.props.thumbImage} alt={this.props.title} />
                        </Parallax>
                        <div className="project-title inline-block text-white font-roboto">
                            <span className="fs60 block mb-20">{this.props.title}</span>
                            <span className="block">{this.props.subtitle}</span>
                            <span className="block fs12">{this.props.technology}</span>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
