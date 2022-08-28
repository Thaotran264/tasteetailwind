import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto mb-2 mt-14 md:mt-20 px-2">
      <div className="aspect-video rounded h-52 md:h-96 w-full">
        <img
          className="w-full h-full object-cover rounded"
          src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
