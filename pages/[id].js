import React from "react";
import Banner from "../components/Banner";
import BrandInfo from "../components/BrandInfo";
import Photos from "../components/Photos";

const Detail = () => {
  return (
    <div className="p-2  mt-12 md:mt-16">
      <Banner />
      <BrandInfo />
      <Photos />
    </div>
  );
};

export default Detail;
