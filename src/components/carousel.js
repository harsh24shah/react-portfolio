import React from "react";
import Image from './image'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'


function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <button className={className} onClick={onClick}>
            <IoIosArrowForward size="35px" />
        </button>

    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button className={className} onClick={onClick}>
            <IoIosArrowBack size="35px" />
        </button>
    );
}

export default class Carousel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    images = this.props.images.map(function (image, index) {
        console.log(image.altname);
        let imageurl = image.src.toString();
        let imgAlt = image.alt;
        return (
            <Image key={index} filename={imageurl} alt={imgAlt} />
        )
    })

    render() {
        var settings = {
            dots: true,
            speed: 500,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
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