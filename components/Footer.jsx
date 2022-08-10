import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-5">
      <div className="container mx-auto flex flex-wrap flex-col items-center md:flex-row">
        <div className="md:w-1/2 lg:w-1/4">
          <h4 className="text-center">Thông tin</h4>
        </div>
        <div className="md:w-1/2 lg:w-1/4">
          <h4 className="text-center">Hỗ trợ</h4>
        </div>
        <div className="md:w-1/2 lg:w-1/4">
          <h4 className="text-center">Kết nối</h4>
        </div>
        <div className="md:w-1/2 lg:w-1/4">
          <h4 className="text-center">Liên hệ</h4>
        </div>
      </div>
      <div className="">
        <p className="text-center py-3">Desgin & code: RmTran</p>
      </div>
    </footer>
  );
};

export default Footer;
