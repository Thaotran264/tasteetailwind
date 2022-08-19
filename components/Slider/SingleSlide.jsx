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
const SingleSlide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-2 ">
      <div className="rounded py-6 bg-white">
        <h2 className="text-black px-2 text-slate-500 mb-2">
          Món ăn ngon trong ngày
        </h2>
        <Slider {...settings} className="mb-2">
          {listImage &&
            listImage.map((item, index) => (
              <div key={index} className="p-1">
                <img
                  src={item}
                  alt=""
                  className="rounded h-28 md:h-72 w-full"
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default SingleSlide;
