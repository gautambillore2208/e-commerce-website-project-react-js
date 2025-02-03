import React from "react";
import Image1 from "../../assets/banner/banner-1.jpg";
import Image2 from "../../assets/banner/banner-2.jpg";
import Image3 from "../../assets/banner/banner-3.jpg";
import Slider from "react-slick";
import {Carousel } from "flowbite-react";


const ImageList = [
];

const banner = ({ handleOrderPopup }) => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="h-96 sm:h-96 xl:h-96 2xl:h-96">
    <Carousel className="rounded-none">
        <img src={Image1} className="rounded-none" alt="..." />
        <img src={Image2} className="rounded-none" alt="..." />
        <img src={Image3} className="rounded-none" alt="..." />
    </Carousel>
</div>
  );
};

export default banner;
