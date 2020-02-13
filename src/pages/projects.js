
import React, { Component } from "react"

import SEO from "../components/seo"

import Thumbnail from '../components/thumbnail'; // Import the Thumbnail component

export default class Projects extends Component {
    image = document.querySelectorAll('.image-slide');
    projects = [
        {
            'title': 'project1',
            'subtitle': 'subtitle goes here',
            'link': 'https://google.co.in',
            'thumbImage': 'https://picsum.photos/700/800',
            'technology': 'Angular, HTML, SCSS'
        },
        {
            'title': 'project-title2',
            'subtitle': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'link': 'https://google.co.in',
            'thumbImage': 'https://picsum.photos/600/400',
            'technology': 'JQuery, HTML5, CSS3'
        },
        {
            'title': 'project3',
            'subtitle': 'subtitle goes here',
            'link': 'https://google.co.in',
            'thumbImage': 'https://picsum.photos/650/500',
            'technology': 'Photoshop'
        },
        {
            'title': 'project-long-title',
            'subtitle': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            'link': 'https://google.co.in',
            'thumbImage': 'https://picsum.photos/600/400',
            'technology': 'Angular, Javascript, SCSS'
        },
        {
            'title': 'project5',
            'subtitle': 'subtitle goes here',
            'link': 'https://google.co.in',
            'thumbImage': 'https://picsum.photos/700/900',
            'technology': 'JQuery, HTML5, CSS3'
        }
    ];

    projectRender = this.projects.map(function (project, index) {
        return <Thumbnail
            key={index}
            link={project.link}
            thumbImage={project.thumbImage}
            title={project.title}
            subtitle={project.subtitle}
            technology={project.technology}
        />;
    })

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <SEO title="projects" />
                <div>
                    <div className="content-wrapper scrollable">
                        <div className="project-wrap" >
                            <h1 className="lined inline-block mb-30">Projects</h1>
                            {this.projectRender}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
