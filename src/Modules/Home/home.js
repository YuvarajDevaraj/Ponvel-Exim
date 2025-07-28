import React from "react";
import "../../styles/Home.css";
import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import Shipment from "./Shipment";
import VisionMission from "./VisionMission";
import TrustedBrands from "./TrustedBrands";
import Certifications from "./Certifications";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <VisionMission />
      <Shipment />
      <TrustedBrands />
      <Certifications />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;
