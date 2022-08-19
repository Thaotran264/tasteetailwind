import React from "react";
import Slider from "react-slick";
import { listImage } from "../../data";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "none" }} />;
}
const MultiSlide = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
          infinite: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto px-2 mb-2 border-b-2 border-black">
      <div className="rounded py-6 bg-white">
        <h2 className="px-2 text-slate-500 mb-2 text-base md:text-xl">
          Cửa hàng yêu thích
        </h2>
        <Slider {...settings}>
          {listImage &&
            listImage.map((item, index) => (
              <div key={index} className="p-1">
                <img
                  src={item}
                  alt=""
                  className="h-20 md:h-44 w-full object-cover rounded-full"
                />
              </div>
            ))}
          {listImage &&
            listImage.map((item, index) => (
              <div key={index} className="p-1">
                <img
                  src={item}
                  alt=""
                  className="h-20 md:h-44 w-full object-cover rounded-full"
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default MultiSlide;
