import React from "react";
import Banner from "../components/Banner/Banner";
import BrandInfo from "../components/BrandInfo";
import Merchant from "../components/Layout/Merchant";
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
Detail.getLayout = function getLayout(page) {
  return (
    <Merchant>{page}</Merchant>
  )
}
