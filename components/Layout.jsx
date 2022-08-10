import React, { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Page from "./Page";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
