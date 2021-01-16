import React from "react";

//components
import Header from "./Header";
import { GlobalStyle } from "./styles/GlobalStyles";
import Footer from "./Footer";



const Layout = ({ children }) => {
  return (
    <div>
    <GlobalStyle />
      <Header />
        <main>{children}</main>
        <Footer />
    </div>
  )
  }

export default Layout;
