import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { listBrand } from "../../data";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}
const BannerSlide = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-2 mb-2">
      <div className="rounded bannerConfig">
        <Slider {...settings} className="mb-2">
          {
            listBrand.map((item, index) => (
              <div key={index} className="h-[30vh] md:h-[50vh] w-full">
                <img
                  src={item}
                  alt=""
                  className="rounded w-full h-full"
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlide;
