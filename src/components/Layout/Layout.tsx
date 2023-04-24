import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps extends React.PropsWithChildren {}

function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen">
      <NavBar />
      <div className="pb-36">
        <ScrollToTop />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
