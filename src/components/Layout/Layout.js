import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header/Header";
import { Toaster } from "react-hot-toast";

const Layout = ({ children, title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="AviDLabs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SKF &#x2219; {`${title}`}</title>
      </Helmet>
      <div className="layout-style">
        <Header />
        <main>
          <Toaster />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
