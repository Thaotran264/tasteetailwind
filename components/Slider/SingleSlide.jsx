import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { listFood } from "../../data";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}
const SingleSlide = () => {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,infinite: false,
    responsive: [
     
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
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
          Món ăn ngon trong ngày
        </h2>
        <Slider {...settings} className="mb-2">
          {listFood &&
            listFood.map((item, index) => (
              <div key={index} className="p-1">
                <img
                  src={item}
                  alt=""
                  className="mx-auto rounded-full w-32 h-32 md:w-52 md:h-52"
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default SingleSlide;
