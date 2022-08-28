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
const BrandSlide = () => {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-2 mb-2">
      <div className="rounded py-2 bg-white">
        <h2 className="text-slate-500 px-2 mb-2">
          Thương hiệu nổi bật
        </h2>
        <Slider {...settings} className="mb-2">
          {
            listBrand.map((item, index) => (
              <div key={index} className="px-1">
                <img
                  src={item}
                  alt=""
                  className="rounded h-40 md:h-60 w-full"
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandSlide;
