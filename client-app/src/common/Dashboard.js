import React from "react";
import Menu from "./Menu";
import "../../src/index.css";
import { Container } from "react-bootstrap";
import { getCategories } from "./helper/userapicall";
import CardCategory from "./CardCategory";
import CardCarousel from "./CardCarousel";
import LogoDescription from "./LogoDescription";
import ParallaxHome from "./ParallaxHome";
import AboutUs from "./AboutUs";
import FeatureIcon from "./FeatureIcon";
import ImageGalleryHome from "./ImageGalleryHome";
import "react-image-gallery/styles/css/image-gallery.css";
import Footer from "./Footer";
const Dashboard = () => {
  return (
    <div>
      <Menu />
      <CardCarousel />
      <hr />
      <LogoDescription />
      <hr />
      <CardCategory />
      <hr />
      <ParallaxHome />
      <AboutUs />
      <FeatureIcon />
      <hr />
      <Container>
      <p className="text-center font-weight-bold text-xl-center">Some of the important lovely pictures</p>
      </Container>
      
      <ImageGalleryHome />
      <Footer/>
    </div>
    
  );
};

export default Dashboard;
