import React from "react";

const BrandInfo = () => {
  return (
    <div className="container mx-auto mb-2">
      <div className="flex flex-col md:flex-row flex-wrap">
        <div className="w-full md:w-1/2 flex items-center justify-center mb-2 md:mb-0">
          <img
            src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-6/296591997_582860939971305_8728101982842821150_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SbrxzWjvU28AX-BG_jK&tn=ybrhR-8-aW06gLvY&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT-xyw45aMX9vffhKSScM-yhcSGZEPR_m-eZVfx1AEfJww&oe=62F969B7"
            alt=""
            className="w-52 md:w-64 h-52 md:h-64 object-cover rounded-full"
          />
        </div>
        <div className="w-full md:w-1/2 ">
          <h2 className="text-center text-2xl">Title</h2>
          <p className="text-center text-xl mb-2 ">Address</p>
          <div className="w-full flex gap-3 md:gap-5">
            <button className="w-1/2 bg-red-800 rounded text-xl h-10">
              Menu
            </button>
            <button className="w-1/2 bg-neutral-700 rounded text-xl h-10">
              Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandInfo;
