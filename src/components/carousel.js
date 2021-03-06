import React from "react";
import Image from './image'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'


function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <button className={className} onClick={onClick}>
            <IoIosArrowForward size="20px" />
        </button>
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button className={className} onClick={onClick}>
            <IoIosArrowBack size="20px" />
        </button>
    );
}

export default class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    images = this.props.images.map(function (image, index) {
        let imageurl = image.src.toString();
        let imgAlt = image.alt;
        return (
            <Image key={index} filename={imageurl} alt={imgAlt} />
        )
    })

    render() {
        var settings = {
            dots: false,
            speed: 500,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            cssEase: 'ease-in-out',
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        };
        return (
            <div className="product-carousel">
                <div className="product-carousel-inner">
                    <Slider {...settings}>
                        {this.images}
                    </Slider>
                </div>
            </div>
        );
    }
}