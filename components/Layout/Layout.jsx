import React, { Children } from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-16 py-2">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
