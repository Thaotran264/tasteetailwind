import React from "react";
import BrandItem from "./BrandItem";
import { listFood } from "../data";
const Page = () => {
  return (
    <div className="container mx-auto p-2 grid gap-2 lg:gap-1 grid-cols-2 lg:grid-cols-5 ">
      {listFood.map((item, index) => <BrandItem key={index} item={item}/>)}
    </div>
  );
};

export default Page;
