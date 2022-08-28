import React, { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Page from "./Page";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="mt-16 py-2">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
