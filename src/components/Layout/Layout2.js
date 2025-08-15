import React from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout2 = ({ title, description, keywords }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="AviDLabs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Helmet>

      <Toaster />
    </div>
  );
};

export default Layout2;
