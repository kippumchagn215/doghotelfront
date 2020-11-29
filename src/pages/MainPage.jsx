import React from "react";
import Navbar from "../component/Navbars/Navbar";
import Features from "../component/Features/Features";
import Heading from "../component/Headings/Heading";
import Carousel from "../component/Carousels/Carousel";
import Service from "../component/Services/Service";
import Footer from "../component/Footers/Footer";
import Follow from "../component/Follows/Follow";

function Main() {
  return (
    <div>
      <Navbar />
      <Heading />
      <Features />
      <Service />
      <Carousel />
      <Footer />
      <Follow />
    </div>
  );
}
export default Main;
